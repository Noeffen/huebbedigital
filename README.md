# FairwayService Admin Panel

Web-basiertes Admin-Panel für FairwayService Golf Clubs.

## Features

- 📊 Dashboard mit Live-Stats
- 📋 Bestellungen verwalten (Gastro & Shop)
- 🍽️ Produkte verwalten
- ⚠️ Problem-Meldungen bearbeiten
- ⚙️ Club-Einstellungen (Öffnungszeiten, QR-Code)

## Deployment auf Netlify

### 1. Account erstellen
- Gehe zu: https://www.netlify.com
- Sign up mit GitHub

### 2. Neues Private Repo erstellen
```bash
# Erstelle neues PRIVATE Repo auf GitHub: fairwayservice-admin
# Clone es lokal
git clone https://github.com/Noeffen/fairwayservice-admin.git
cd fairwayservice-admin

# Kopiere Admin-Dateien rein
# Dann:
git add .
git commit -m "Initial commit"
git push
```

### 3. Deploy auf Netlify
- In Netlify: "Add new site" → "Import from Git"
- Wähle: `fairwayservice-admin` Repo
- Build settings: (alles leer lassen, ist statisch)
- Deploy!

### 4. Custom Domain (Optional)
- In Netlify Site Settings: "Domain management"
- Add custom domain: `admin.huebbedigital.com`
- DNS Setup bei Namecheap (CNAME Record)

## Sicherheit

- ✅ HTTPS automatisch
- ✅ Private Repository
- ✅ Firebase API Key mit Domain-Restrictions
- ✅ Firestore Security Rules
- ✅ Nur für Golfclub Odenwald Admins

## Support

christian@huebbedigital.com
