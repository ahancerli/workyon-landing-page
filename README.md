# Workyon Landing Page

Workyon için Next.js 15 ile geliştirilmiş modern landing page uygulaması.

## Özellikler

- ⚡ Next.js 15 ve App Router
- 🎨 Tailwind CSS v4 ile modern tasarım
- 🔧 TypeScript desteği
- 📱 Responsive tasarım
- 🎯 Smooth scroll navigasyon
- 🔗 Jira entegrasyonu tanıtımı
- 🎭 Mavi-turuncu gradient teması

## Başlangıç

### Kurulum

```bash
npm install
```

### Geliştirme Sunucusu

```bash
npm run dev
```

http://localhost:3000 adresinde uygulamayı görüntüleyebilirsiniz.

### Build

```bash
npm run build
npm start
```

## Proje Yapısı

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Ana sayfa
├── globals.css        # Global CSS
└── components/        # React bileşenleri
    ├── Header.tsx     # Navigasyon
    ├── Hero.tsx       # Ana banner
    ├── Features.tsx   # Özellikler bölümü
    ├── JiraIntegration.tsx  # Jira entegrasyonu
    ├── Demo.tsx       # Demo bölümü
    ├── Pricing.tsx    # Fiyatlandırma
    ├── Footer.tsx     # Alt sayfa
    ├── figma/         # Figma bileşenleri
    └── ui/            # UI bileşenleri (shadcn/ui)
```

## Teknolojiler

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Type Safety:** TypeScript

## Deployment

Vercel'de kolayca deploy edebilirsiniz:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/workyon-landing)

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
