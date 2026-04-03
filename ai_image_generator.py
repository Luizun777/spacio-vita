#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador universal de imágenes con IA
Usa Groq para optimizar prompts + MultiProveedor para generar imágenes

Soporta cualquier proyecto/producto usando un JSON de configuración

Uso:
    python ai_image_generator.py                          # Interactivo
    python ai_image_generator.py config.json              # Desde archivo
    python ai_image_generator.py --project spacio-vita    # Proyecto conocido
"""

import json
import time
import sys
import io
import argparse
from pathlib import Path

# Configurar stdout para UTF-8 en Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Agregar ruta de claude-codex para importar ai_provider
sys.path.insert(0, str(Path(__file__).parent.parent / "claude-codex"))

from ai_provider import generate_text, generate_image, AIProviderFactory


def optimize_prompt_with_groq(base_prompt: str, item_name: str, lang: str = "auto") -> str:
    """
    Usa Groq para optimizar el prompt antes de generar imagen

    Args:
        base_prompt: Prompt original
        item_name: Nombre del item siendo procesado
        lang: Idioma ('es', 'en', 'auto' para detectar)
    """
    print(f"[Groq] Optimizando prompt para '{item_name}'...")

    optimization_prompt = f"""Optimiza este prompt para generar una imagen de alta calidad con DALL-E 3.
Hazlo más detallado, visual y artístico. Agrega detalles sobre lighting, composición, estilo y atmósfera.
Mantén el idioma original del prompt.

Prompt original: {base_prompt}

Retorna SOLO el prompt optimizado sin explicaciones adicionales:"""

    optimized = generate_text(optimization_prompt, provider="groq", max_tokens=200)
    if optimized:
        print(f"[Groq] [OK] Prompt optimizado")
        return optimized.strip()
    return base_prompt


def generate_image_for_item(item: dict, providers_to_try: list = None) -> dict:
    """
    Genera una imagen para un item usando Groq + MultiProveedor

    Args:
        item: Diccionario con 'name' y 'prompt_base' (y opcionalmente 'description')
        providers_to_try: Lista de proveedores a intentar en orden
    """
    print(f"\n{'='*70}")
    print(f"GENERANDO: {item.get('name', 'Sin nombre')}")
    print(f"{'='*70}")

    if providers_to_try is None:
        providers_to_try = ["openai", "gemini", "huggingface"]

    # Step 1: Optimizar prompt con Groq
    optimized_prompt = optimize_prompt_with_groq(
        item['prompt_base'],
        item.get('name', 'item'),
        item.get('lang', 'auto')
    )

    print(f"\nPrompt original:\n  {item['prompt_base'][:80]}...")
    print(f"\nPrompt optimizado:\n  {optimized_prompt[:80]}...")

    # Step 2: Intentar generar con múltiples proveedores
    for provider in providers_to_try:
        print(f"\n[{provider.upper()}] Intentando generar imagen...")

        try:
            image_url = generate_image(
                optimized_prompt,
                provider=provider,
                size="1024x1024",
                quality="standard" if provider == "openai" else None
            )

            if image_url:
                print(f"[{provider.upper()}] [OK] Imagen generada exitosamente")
                return {
                    "name": item.get('name', 'Sin nombre'),
                    "image_url": image_url,
                    "base_prompt": item['prompt_base'],
                    "optimized_prompt": optimized_prompt,
                    "description": item.get('description', ''),
                    "provider": provider,
                    "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                    "status": "success"
                }
            else:
                print(f"[{provider.upper()}] [FAIL] No se pudo generar")
                continue
        except Exception as e:
            print(f"[{provider.upper()}] [ERROR] {str(e)[:60]}")
            continue

    # Si nada funcionó, retornar error pero incluir los prompts optimizados
    # (útil para generar después cuando haya presupuesto)
    return {
        "name": item.get('name', 'Sin nombre'),
        "base_prompt": item['prompt_base'],
        "optimized_prompt": optimized_prompt,
        "description": item.get('description', ''),
        "status": "failed",
        "error": f"No se pudo generar con ninguno de los proveedores: {providers_to_try}",
        "note": "Los prompts optimizados se guardaron para intentar después con otro proveedor",
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    }


def load_config(config_file: str) -> dict:
    """Carga configuración desde archivo JSON"""
    with open(config_file, 'r', encoding='utf-8') as f:
        return json.load(f)


def generate_images(config: dict, output_file: str = None):
    """
    Genera imágenes para todos los items en la configuración

    Args:
        config: Diccionario con:
            - title: Nombre del proyecto
            - items: Lista de items con name y prompt_base
            - image_providers: (opcional) Proveedores a usar
    """
    project_name = config.get('title', 'Proyecto')
    items = config.get('items', [])

    print("=" * 70)
    print(f"GENERADOR DE IMÁGENES - {project_name}")
    print("Groq (optimización) + MultiProveedor (generación)")
    print("=" * 70)

    # Verificar proveedores
    available = AIProviderFactory.get_available_providers()
    print(f"\nProveedores disponibles: {available}")

    if "groq" not in available:
        print("[ERROR] Groq no está configurado para optimizar prompts")
        return False

    print("[OK] Groq disponible para optimización")

    # Definir proveedores para generar imágenes
    image_providers = config.get('image_providers', None)
    if image_providers is None:
        image_providers = []
        for provider in ["openai", "gemini", "huggingface"]:
            if provider in available:
                image_providers.append(provider)

    if not image_providers:
        print("[ERROR] No hay proveedores de imágenes configurados")
        print("Necesitas: OpenAI, Google Gemini o Hugging Face")
        return False

    print(f"[OK] Proveedores de imagen disponibles: {image_providers}\n")

    if not items:
        print("[ERROR] No hay items para procesar")
        return False

    print(f"[INFO] Procesando {len(items)} items...\n")

    # Generar imágenes
    results = []
    for i, item in enumerate(items, 1):
        print(f"\n[{i}/{len(items)}]")
        result = generate_image_for_item(item, providers_to_try=image_providers)
        results.append(result)

        # Esperar un poco entre solicitudes
        if i < len(items):
            print("\n[WAIT] Esperando 2 segundos antes del siguiente...")
            time.sleep(2)

    # Guardar resultados
    print("\n" + "=" * 70)
    print("GUARDANDO RESULTADOS")
    print("=" * 70)

    if output_file is None:
        output_file = f"{project_name.lower().replace(' ', '_')}_images.json"

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({
            "project": project_name,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "stats": {
                "total": len(results),
                "successful": len([r for r in results if r['status'] == 'success']),
                "failed": len([r for r in results if r['status'] == 'failed'])
            },
            "results": results
        }, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] Resultados guardados en: {output_file}")

    # Resumen
    successful = len([r for r in results if r['status'] == 'success'])
    failed = len([r for r in results if r['status'] == 'failed'])

    print(f"\n{'='*70}")
    print(f"RESUMEN")
    print(f"{'='*70}")
    print(f"[OK] Exitosas: {successful}/{len(items)}")
    print(f"[FAIL] Fallidas: {failed}/{len(items)}")

    # Mostrar URLs generadas
    print(f"\n{'='*70}")
    print("IMÁGENES GENERADAS")
    print(f"{'='*70}")

    for result in results:
        if result['status'] == 'success':
            print(f"\n[OK] {result['name']}")
            print(f"   URL: {result['image_url'][:80]}...")
        else:
            print(f"\n[FAIL] {result['name']}")
            if 'error' in result:
                print(f"   Error: {result['error']}")

    return True


def main():
    parser = argparse.ArgumentParser(
        description='Generador universal de imágenes con IA usando Groq + MultiProveedor',
        epilog='''
Ejemplos:
  python ai_image_generator.py config.json
  python ai_image_generator.py config.json -o output.json
  python ai_image_generator.py --interactive
        '''
    )

    parser.add_argument('config', nargs='?', help='Archivo JSON con configuración')
    parser.add_argument('-o', '--output', help='Archivo de salida (default: <proyecto>_images.json)')
    parser.add_argument('-i', '--interactive', action='store_true', help='Modo interactivo')

    args = parser.parse_args()

    # Modo interactivo
    if args.interactive or not args.config:
        print("=" * 70)
        print("GENERADOR DE IMÁGENES - MODO INTERACTIVO")
        print("=" * 70)

        project_name = input("\nNombre del proyecto: ").strip()
        if not project_name:
            print("[ERROR] Nombre vacío")
            return

        items = []
        print(f"\nAgregar items para {project_name}")
        print("(Deja 'name' vacío para terminar)\n")

        idx = 1
        while True:
            print(f"Item {idx}:")
            name = input("  Nombre: ").strip()
            if not name:
                break

            prompt = input("  Prompt base: ").strip()
            if not prompt:
                print("  [ERROR] Prompt requerido\n")
                continue

            description = input("  Descripción (opcional): ").strip()

            items.append({
                "name": name,
                "prompt_base": prompt,
                "description": description
            })
            print()
            idx += 1

        if not items:
            print("[ERROR] No hay items")
            return

        config = {
            "title": project_name,
            "items": items
        }

        output = args.output or f"{project_name.lower().replace(' ', '_')}_images.json"
        generate_images(config, output)

    # Modo archivo
    else:
        if not Path(args.config).exists():
            print(f"[ERROR] Archivo no encontrado: {args.config}")
            return

        config = load_config(args.config)
        generate_images(config, args.output)


if __name__ == "__main__":
    main()
