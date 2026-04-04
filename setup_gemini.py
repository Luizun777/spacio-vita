#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para configurar Google Gemini API key fácilmente
Agrega la clave al archivo .env o crea uno si no existe
"""

import sys
import os
from pathlib import Path

# Configurar stdout para UTF-8 en Windows
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def print_header():
    """Imprime el header"""
    print("=" * 70)
    print("CONFIGURADOR DE GOOGLE GEMINI API")
    print("=" * 70)


def print_instructions():
    """Imprime instrucciones para obtener API key"""
    print("\n[PASO 1] Obtener API Key de Google Gemini\n")
    print("  1. Abre: https://aistudio.google.com/app/apikey")
    print("  2. Inicia sesión con tu cuenta Google")
    print("  3. Haz clic en 'Create API Key'")
    print("  4. Copia la clave (comienza con 'AIza')")
    print("  5. Pégala aquí abajo")


def load_env() -> dict:
    """Carga variables de .env si existe"""
    env_file = Path(".env")
    env_vars = {}

    if env_file.exists():
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    if "=" in line:
                        key, value = line.split("=", 1)
                        env_vars[key.strip()] = value.strip()

    return env_vars


def save_env(env_vars: dict):
    """Guarda variables a .env"""
    env_file = Path(".env")

    # Crear contenido
    lines = ["# Configuración de API Keys"]
    lines.append("# Generado automáticamente por setup_gemini.py\n")

    for key, value in sorted(env_vars.items()):
        lines.append(f"{key}={value}")

    # Escribir archivo
    with open(env_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

    print(f"\n[OK] Archivo .env actualizado: {env_file.absolute()}")


def main():
    print_header()

    # Cargar env actual
    env_vars = load_env()

    # Mostrar estado actual
    print("\n[ESTADO ACTUAL]")
    print(f"  GROQ_API_KEY: {('✅ Configurada' if env_vars.get('GROQ_API_KEY') else '❌ No configurada')}")
    print(f"  OPENAI_API_KEY: {('✅ Configurada' if env_vars.get('OPENAI_API_KEY') else '❌ No configurada')}")
    print(f"  GOOGLE_API_KEY: {('✅ Configurada' if env_vars.get('GOOGLE_API_KEY') else '❌ No configurada')}")
    print(f"  HUGGINGFACE_API_KEY: {('✅ Configurada' if env_vars.get('HUGGINGFACE_API_KEY') else '❌ No configurada')}")

    # Preguntar si quiere configurar Gemini
    print("\n[OPCIÓN]")
    response = input("¿Deseas configurar Google Gemini? (s/n): ").strip().lower()

    if response != "s":
        print("\n[Abortado]")
        return

    # Mostrar instrucciones
    print_instructions()

    # Solicitar API key
    print("\n[PASO 2] Pegar API Key\n")
    api_key = input("Pega tu Google API Key (AIza...): ").strip()

    if not api_key:
        print("\n[ERROR] Clave vacía")
        return

    if not api_key.startswith("AIza"):
        print("\n[ADVERTENCIA] La clave no comienza con 'AIza'")
        confirm = input("¿Continuar de todas formas? (s/n): ").strip().lower()
        if confirm != "s":
            print("[Abortado]")
            return

    # Guardar
    env_vars["GOOGLE_API_KEY"] = api_key
    save_env(env_vars)

    # Verificar que se guardó
    print("\n[VERIFICACIÓN]")
    env_vars = load_env()
    if env_vars.get("GOOGLE_API_KEY") == api_key:
        print("  [OK] API Key guardada correctamente")
        print(f"  [OK] Clave: {api_key[:10]}...{api_key[-5:]}")
    else:
        print("  [ERROR] No se pudo guardar la clave")
        return

    # Instrucciones siguientes
    print("\n[PRÓXIMOS PASOS]")
    print("  1. Instalar dependencias:")
    print("     pip install google-generativeai==0.3.0")
    print("\n  2. Generar imágenes:")
    print("     python ai_image_generator.py spacio_vita_images_config.json")
    print("\n  3. Las imágenes se guardarán en:")
    print("     spacio_vita_prompts_optimizados.json")

    # Opción de instalar dependencias
    print("\n[INSTALAR AHORA]")
    response = input("¿Instalar dependencias ahora? (s/n): ").strip().lower()
    if response == "s":
        print("\n[Instalando...]")
        os.system("pip install google-generativeai==0.3.0 -q")
        print("[OK] Instalación completada")

    print("\n[✓] Configuración completada")
    print("=" * 70)


if __name__ == "__main__":
    main()
