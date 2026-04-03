# Quick Start - Generar Imágenes para Spacio Vita

## ⚡ 5 Minutos para Generar Imágenes

### Opción 1: Usar Gemini (Recomendado - Gratis)

```bash
# Paso 1: Configurar Gemini
python setup_gemini.py

# Paso 2: Generar imágenes
python ai_image_generator.py spacio_vita_images_config.json

# Paso 3: Ver resultados
cat spacio_vita_prompts_optimizados.json
```

### Opción 2: Usar OpenAI DALL-E 3 (Premium - Mejor Calidad)

```bash
# Editar .env manualmente
nano .env
# OPENAI_API_KEY=sk-...tu-clave...

# Generar imágenes
python ai_image_generator.py spacio_vita_images_config.json
```

### Opción 3: Modo Interactivo

```bash
python ai_image_generator.py --interactive
```

## 📋 Requisitos

- ✅ Python 3.8+
- ✅ Dependencias: `pip install -r ../claude-codex/requirements.txt`
- ✅ API Key de al menos uno: Groq, Gemini, OpenAI o Hugging Face

## 🔑 API Keys

### Groq (Obligatorio - Optimización)
- Gratis, ultra-rápido
- Obtener: https://console.groq.com/keys
- Ya configurado en .env

### Gemini (Recomendado - Generación)
- Gratis con crédito limitado
- Obtener: https://aistudio.google.com/app/apikey
- Usar: `python setup_gemini.py`

### OpenAI (Premium - Mejor calidad)
- Pagado (requiere crédito)
- Obtener: https://platform.openai.com/api-keys
- Editar `.env` directamente

### Hugging Face (Gratis - Open Source)
- Gratis, modelos abiertos
- Obtener: https://huggingface.co/settings/tokens
- Editar `.env` directamente

## 📊 Flujo Automático

```
[Groq Optimiza Prompts]
         ↓
[Intenta OpenAI → Gemini → Hugging Face]
         ↓
[Guarda URLs + Prompts en JSON]
         ↓
[Copia URLs a precios.ts]
```

## 🎯 Resultado Final

Archivo: `spacio_vita_prompts_optimizados.json`

```json
{
  "project": "Spacio Vita - Catálogo de Servicios",
  "results": [
    {
      "name": "Consultas",
      "image_url": "https://...",
      "provider": "gemini",
      "status": "success"
    },
    ...
  ]
}
```

## 📝 Pasos Detallados

### Paso 1: Instalar Dependencias

```bash
pip install -r ../claude-codex/requirements.txt
```

### Paso 2: Configurar API Keys

**Opción A: Gemini (Recomendado)**
```bash
python setup_gemini.py
```

**Opción B: Manual**
```bash
# Copiar template
cp .env.example .env

# Editar .env con tu editor favorito
nano .env
# O en Windows:
notepad .env
```

### Paso 3: Generar Imágenes

```bash
python ai_image_generator.py spacio_vita_images_config.json
```

### Paso 4: Verificar Resultados

```bash
# Ver archivo generado
cat spacio_vita_prompts_optimizados.json | jq '.results[0].image_url'
```

### Paso 5: Usar las Imágenes

```typescript
// En precios.ts
import { PreciosComponent } from './precios.component';

// Reemplaza las URLs de unsplash con las generadas
image: 'https://oaidalleapiprodscus.blob.core.windows.net/...'
```

## 🐛 Troubleshooting

### "API key not configured"
```bash
python setup_gemini.py
# O editar .env manualmente
```

### "Module not found"
```bash
pip install -r ../claude-codex/requirements.txt
pip install google-generativeai
```

### "No image providers available"
- Asegúrate de tener al menos una API key configurada
- Ejecuta `python setup_gemini.py`

### "Billing limit reached"
- Significa que OpenAI está sin presupuesto
- El script fallará en OpenAI pero intentará Gemini automáticamente

## ✨ Features

✅ **Multi-Proveedor** — Fallback automático  
✅ **Optimización Groq** — Prompts en español natural  
✅ **Guardado Automático** — Prompts + URLs + metadata  
✅ **Reutilizable** — Script universal para otros proyectos  
✅ **Documentado** — Archivos README completos  

## 🎬 Ejemplo Completo

```bash
# 1. Configurar Gemini
$ python setup_gemini.py
[OK] API Key guardada

# 2. Generar
$ python ai_image_generator.py spacio_vita_images_config.json
[OK] Groq optimizó 6/6 prompts
[OK] Generando imágenes...
[OK] Consultas: https://...

# 3. Verificar
$ jq '.results[0].image_url' spacio_vita_prompts_optimizados.json
"https://..."

# 4. Copiar URLs a precios.ts
# 5. Commit & Push
$ git add precios.ts
$ git commit -m "Update service images"
$ git push
```

## 📚 Documentación Completa

- **GEMINI_SETUP.md** — Setup detallado de Gemini
- **ai_image_generator.py** — Script universal (documentado)
- **.env.example** — Variables de configuración

## 🚀 Próximo Paso

```bash
python setup_gemini.py
```

**¡Empieza en 5 minutos!** ⚡
