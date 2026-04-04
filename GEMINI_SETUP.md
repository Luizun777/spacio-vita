# Configurar Google Gemini para Generar Imágenes

## 🎯 ¿Por qué Gemini?

- **Gratis** — Crédito gratuito para empezar
- **Rápido** — Respuestas ultra-rápidas
- **Multimodal** — Genera texto e imágenes
- **Buen fallback** — Si OpenAI falla, Gemini genera

## 📝 Pasos para Configurar

### Paso 1: Obtener API Key

1. Ve a: https://aistudio.google.com/app/apikey
2. Inicia sesión con tu cuenta Google
3. Haz clic en **"Create API Key"**
4. Copia la clave (comienza con `AIza`)

### Paso 2: Agregar a .env

1. Copia `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` y reemplaza:
   ```bash
   GOOGLE_API_KEY=AIza...tu-clave-aqui...
   ```

3. **IMPORTANTE:** No commits `.env` (ya está en `.gitignore`)

### Paso 3: Instalar dependencias

```bash
pip install -r D:\Dev\claude-codex\requirements.txt
```

O solo Gemini:
```bash
pip install google-generativeai==0.3.0
```

### Paso 4: Verificar configuración

```bash
# Windows
python config.py

# O directo con el script
python ai_image_generator.py spacio_vita_images_config.json
```

## 🖼️ Generar Imágenes

```bash
python ai_image_generator.py spacio_vita_images_config.json
```

El script intentará en este orden:
1. ✅ OpenAI (si tiene presupuesto)
2. ✅ **Gemini** (si tiene API key y presupuesto)
3. ✅ Hugging Face (si tiene API key)

## 💰 Límites de Gemini

| Plan | Límite | Costo |
|------|--------|-------|
| **Free** | 15 solicitudes/minuto | Gratis |
| **Free** | 1500 solicitudes/día | Gratis |
| **Paid** | Ilimitado | Según uso |

**Nota:** Gemini ahora ofrece crédito gratuito para nuevos usuarios. Verifica en https://console.cloud.google.com

## 🔄 Flujo Automático

El script ejecuta esto automáticamente:

```
1. Validar API keys configuradas
2. Para cada servicio:
   a. Groq optimiza el prompt (gratis, <1s)
   b. Intenta OpenAI → si falla
   c. Intenta Gemini → si falla
   d. Intenta Hugging Face
3. Guarda URLs y prompts en JSON
```

## ⚙️ Configuración Avanzada

### Usar solo Gemini

Edita `spacio_vita_images_config.json`:

```json
{
  "title": "Spacio Vita",
  "items": [...],
  "image_providers": ["gemini"]
}
```

### Cambiar orden de proveedores

```json
{
  "image_providers": ["gemini", "openai", "huggingface"]
}
```

## 🐛 Solución de Problemas

### Error: "GOOGLE_API_KEY no está configurada"

1. Verifica `.env` existe:
   ```bash
   ls .env
   ```

2. Verifica que tiene contenido:
   ```bash
   cat .env | grep GOOGLE_API_KEY
   ```

3. Si está vacío, agrega tu clave:
   ```bash
   echo GOOGLE_API_KEY=AIza...tu-clave >> .env
   ```

### Error: "google-generativeai no está instalado"

```bash
pip install google-generativeai==0.3.0
```

### Las imágenes generadas son lentas

- Gemini es rápido pero puede tener cola
- Intenta usar OpenAI si tiene presupuesto
- Verifica tu conexión a internet

### Crédito agotado

- Gemini ofrece crédito gratuito limitado
- Verifica: https://console.cloud.google.com/billing
- Considera un plan pagado si necesitas más

## 📊 Resultado Esperado

```json
{
  "name": "Consultas",
  "image_url": "https://...",
  "provider": "gemini",
  "status": "success"
}
```

## 📚 Recursos

| Recurso | URL |
|---------|-----|
| API Keys | https://aistudio.google.com/app/apikey |
| Documentación | https://ai.google.dev |
| Pricing | https://ai.google.dev/pricing |
| Community | https://github.com/google/generative-ai-python |

## 🎨 Ejemplos de Prompts Generados

```
✅ "Habitación de consulta médica iluminada con luz cálida..."
✅ "Sereno y lujoso spa de tratamientos faciales..."
✅ "Calmante y sereno entorno de spa de tratamiento corporal..."
```

Todos estos prompts fueron optimizados por **Groq** y pueden generar imágenes con **Gemini**.

## 🚀 Próximos Pasos

1. ✅ Obtener API key de Gemini
2. ✅ Agregar a `.env`
3. ✅ Instalar dependencias
4. ✅ Ejecutar script
5. ✅ Copiar URLs a `precios.ts`
6. ✅ Hacer push

**¡Listo para generar imágenes profesionales gratis!** 🎉
