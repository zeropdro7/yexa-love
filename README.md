# 💕 YxaLov - Special Dates Blog

Un blog romántico para celebrar fechas especiales, creado con amor para mi novia. Este proyecto combina tecnología moderna con diseño romántico y toques otaku.

## ✨ Características

- 🌸 **Fechas Especiales**: San Valentín, Día de la Primavera y más
- 🎨 **Diseño Romántico**: Gradientes suaves, animaciones delicadas
- 🇯🇵 **Toque Otaku**: Frases en japonés y referencias de anime
- 📱 **Responsive**: Perfectamente adaptado a todos los dispositivos
- ⚡ **Performance**: Optimizado con Next.js 15 y React 19

## 🛠️ Tecnologías

- **Framework**: Next.js 15.5.3
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4.1.13
- **Class Management**: clsx 2.1.1
- **Fuentes**: Google Fonts (Roboto, Great Vibes, Press Start 2P)
- **TypeScript**: Para tipado estático
- **Optimización**: Next.js Image, Link y fuentes optimizadas

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página principal con DateCards
│   ├── layout.tsx         # Layout raíz con fuentes
│   ├── valentine/         # Página de San Valentín
│   └── spring/            # Página de Primavera
├── components/            # Componentes reutilizables
│   └── common/
│       └── DateCard.tsx   # Componente de tarjeta de fecha
├── features/              # Funcionalidades por dominio
│   ├── valentine/
│   │   ├── content/       # Contenido específico de Valentine
│   │   └── mocks/         # Datos mock para Valentine
│   └── spring/
│       ├── content/       # Contenido específico de Spring
│       └── mocks/         # Datos mock para Spring
├── mocks/                 # Datos centralizados
│   ├── index.ts          # Exportaciones principales
│   ├── valentine/        # Mocks de Valentine
│   └── spring/           # Mocks de Spring
└── types/                 # Definiciones de TypeScript
    ├── index.ts          # Exportaciones de tipos
    └── DateCard.ts       # Tipos para DateCard
```

## 🎨 Convenciones de Código

### Componentes
- **Páginas**: `function` declarations (`export default function Page()`)
- **Componentes**: Arrow functions con `export const` (`export const Component = () => {}`)
- **Tipos**: Centralizados en `src/types/`
- **Mocks**: Organizados por feature en carpetas separadas

### Naming
- **Archivos**: PascalCase para componentes, camelCase para utilities
- **Componentes**: PascalCase
- **Variables**: camelCase
- **Constantes**: SNAKE_CASE para globales

## 🚀 Desarrollo

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd yxa-lov

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack

# Build y Start
npm run build        # Build de producción
npm start           # Servidor de producción

# Calidad de Código
npm run lint        # ESLint
npm run typecheck   # TypeScript compiler
npm run prettier    # Verificar formato
npm run format      # Formatear código

# Testing
npm run test        # Vitest
```

### Variables de Entorno

El proyecto no requiere variables de entorno específicas para desarrollo local.

## 📸 Assets

### Imágenes
- **Valentine**: `public/valentine/` - Imágenes románticas y de San Valentín
- **Spring**: `public/spring/` - Imágenes de primavera y flores amarillas

### Fuentes
- **Roboto**: Fuente principal del sistema (moderna y legible)
- **Great Vibes**: Para títulos románticos (especialmente Valentine)
- **Press Start 2P**: Para elementos retro/gaming y texto japonés

## 🌟 Características Especiales

### DateCards Dinámicas
Las tarjetas de fechas especiales son completamente configurables a través de mocks:

```typescript
export const valentineCard = {
  id: 'valentine',
  title: 'San Valentín',
  subtitle: 'Day of Love ♡',
  description: 'El día donde el amor florece como sakura',
  date: '14 de Febrero',
  imageSrc: '/valentine/happy.jpg',  // ← Cambiar imagen aquí
  imageAlt: "Valentine's Day celebration",
  href: '/valentine',
  bgGradient: 'from-pink-100 to-red-100',
  textColor: 'text-red-600',
  dateColor: 'text-pink-500',
}
```

### Componentes Interactivos
- **Valentine**: Botón "NO" que se mueve al hacer hover (easter egg)
- **Spring**: Galería de flores amarillas con modal
- **Animaciones**: Transiciones suaves y efectos hover

### Sistema de Componentes
- **Button**: Componente reutilizable con `clsx` para manejo dinámico de clases
- **DateCard**: Tarjetas de fechas especiales configurables
- **Arquitectura**: Componentes con `export const` y arrow functions

## 🎌 Elementos Románticos

- **Español**: Contenido principal en español
- **Japonés**: Frases románticas como "永遠の愛 (Eien no ai - Eternal Love)"
- **Inglés**: Algunos elementos técnicos y subtítulos
- **Emojis**: Uso estratégico para expresar emociones

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# El proyecto está optimizado para Vercel
vercel --prod
```

### Otros Proveedores
```bash
npm run build
npm start
```

## 📝 TODO / Roadmap

- [ ] Agregar más fechas especiales
- [ ] Implementar sistema de comentarios
- [ ] Galería de fotos compartida
- [ ] Modo oscuro romántico
- [ ] Animaciones con Framer Motion
- [ ] PWA support
- [ ] Sistema de notificaciones para fechas importantes

## 💖 Créditos

Hecho con 💕 por Pdro para mi novia

すべての愛を込めて (Subete no ai wo komete - With all my love)

---

*"Cada momento contigo se convierte en una fecha especial"*