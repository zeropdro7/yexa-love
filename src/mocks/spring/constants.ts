export const springPostContent = {
  // Metadata del post
  id: 'spring-2024',
  category: {
    label: '🌻 22 de Septiembre - Primavera 2025',
    bgColor: 'bg-yellow-light',
    textColor: 'text-yellow-dark',
  },

  // Header
  title: 'Día de la Primavera',
  subtitle:
    'Celebrando la fecha real, cuando la naturaleza despierta al igual que nuestro amor florece',
  japaneseText: {
    text: '春の恋 (Haru no koi) - Spring Love',
    fontFamily: 'var(--font-gaming)',
    textColor: 'text-yellow-dark',
  },

  // Hero Image
  heroImage: {
    src: '/spring/origami-heart.jpg',
    alt: 'Día de la Primavera - Flores amarillas y momentos especiales',
    width: 800,
    height: 450,
    overlayClass:
      'bg-gradient-to-t from-yellow-dark/20 to-transparent',
  },

  // Contenido principal
  mainContent: {
    title: '🌼 Celebrando de verdad',
    titleColor: 'text-green-dark',
    intro: `Mientras todos en Lima celebraron ayer por convención, nosotros elegimos ser diferentes. 
      Hoy, 22 de septiembre de 2025, es el verdadero equinoccio de primavera según la astronomía. 
      No seguimos las masas, seguimos nuestro corazón y la ciencia. Este es nuestro momento especial, 
      cuando realmente la naturaleza despierta y nuestro amor florece en perfecta sincronía con el cosmos.`,

    // Quote destacada
    quote: {
      text: `"Como el equinoccio que marca el equilibrio perfecto entre día y noche, 
        nuestro amor encuentra su momento ideal para florecer."`,
      bgClass: 'border-l-4 border-yellow-neutral bg-yellow-light/20',
      textColor: 'text-green-dark',
    },

    // Secciones en grid
    sections: [
      {
        title: '🌻 El verdadero equinoccio',
        titleColor: 'text-green-dark',
        content: `Hoy, 22 de septiembre a las 6:20pm, ocurre el equinoccio real de primavera. 
          Mientras otros celebraron ayer por viralidad, nosotros esperamos el momento 
          exacto. Así son nuestras flores amarillas: únicas, especiales y perfectamente sincronizadas 
          con el universo.`,
      },
      {
        title: '🌸 Siendo diferentes juntos',
        titleColor: 'text-green-dark',
        content: `No necesitamos seguir lo que todos hacen. Nuestro amor tiene su propio calendario, 
          sus momentos mágicos. Hoy las flores tienen un significado aún más profundo: 
          la valentía de ser auténticos y celebrar cuando realmente importa, desde hoy
          hasta mañana 23 de septiembre, día oficial de la primavera en Perú`,
      },
    ],
  },

  // Galería
  gallery: {
    title: '📸 Galería de momentos especiales',
    titleColor: 'text-green-dark',
    images: [
      {
        src: '/spring/happy-day.png',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/electric-miku.jpg',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/lot-sunflora.webp',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/kagamine-pika.jpg',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/yellow-hearts.png',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/miku-pika.png',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/sunflora-exe.jpeg',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/yellow-pokes.png',
        alt: 'Ramo de flores!!',
      },
      {
        src: '/spring/sunflora-plush.jpg',
        alt: 'Ramo de flores!!',
      },
    ],
  },

  // Mensaje final
  finalMessage: {
    title: '💕 Nuestro momento romántico',
    titleColor: 'text-green-dark',
    bgClass:
      'bg-gradient-to-r from-yellow-light/20 to-green-light/20',
    content: `A pesar que ayer estuve muy mal, hoy día lo puedo compensar, tal vez pensaste que
      estaría mucho tiempo distanciado debido a la salud y el trabajo, son cosas que pasan pero no por ello te dejo de amar.
      Hoy podremos tener un espacio para disfrutar de lo que hago por ti, feliz día de la primaver mi amor.
      Espero que te guste tu regalo, mi vida <3`,
    japaneseText: {
      text: '愛してる - I love you!',
      fontFamily: 'var(--font-gaming)',
      textColor: 'text-yellow-dark',
    },
  },

  // Navegación
  navigation: {
    backButton: {
      href: '/',
      text: '← Volver al inicio',
      className:
        'border border-green-neutral text-green-dark hover:bg-green-light/20 px-4 py-2',
    },
    shareButton: {
      text: '💕 Compartir amor',
      className:
        'bg-yellow-neutral hover:bg-yellow-dark text-gray-900 px-4 py-2',
    },
    nextButton: {
      href: '/valentine',
      text: 'San Valentín →',
      className:
        'border border-valentine-neutral text-valentine-dark hover:bg-valentine-light/20 px-4 py-2',
    },
  },

  // Colores del tema
  colors: {
    primary: 'text-green-dark',
    accent: 'yellow-neutral',
    light: 'yellow-light',
  },
}
