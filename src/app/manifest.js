export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'BABA CAR WASHING & CLEANING L.L.C',
    short_name: 'BABA Car Wash',
    description: 'Premium Car Wash & Detailing Services in UAE',
    start_url: '/',
    display: 'standalone',
    background_color: '#312782',
    theme_color: '#312782',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png', // You should add these icons to public folder
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
