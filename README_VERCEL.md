# Ranquel Tech Lab — Deploy con Vercel (Daily Tokens)

Este proyecto es **HTML/CSS/JS estático** + una **API serverless** para generar tokens de Daily.

## 1) Subir a GitHub (opcional)
- Creá un repo y subí todo el contenido del ZIP.

## 2) Deploy en Vercel
1. Entrá a Vercel -> **Add New** -> **Project**.
2. Importá el repo (o subí la carpeta).
3. En **Environment Variables** agregá:
   - `DAILY_API_KEY` = tu API key de Daily
   - `DAILY_DOMAIN` = `ranquel` (si tu dominio es `ranquel.daily.co`)
   - `DAILY_ROOM` = `VideoLlamada`
4. Deploy.

## 3) Probar
- Abrí la web.
- Andá a **Reserva / Videollamada**.
- Elegí turno (Google Calendar) y en la derecha debería cargar la videollamada.

### Nota importante (GitHub Pages)
GitHub Pages **no ejecuta** backend/serverless. Para tokens de Daily necesitás Vercel/Netlify/Cloudflare.

