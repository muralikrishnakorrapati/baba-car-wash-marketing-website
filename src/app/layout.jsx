import { Geist, Geist_Mono, Abel } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const abel = Abel({
  variable: '--font-abel',
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://www.babacarwash.com'),
  title: {
    default:
      'BABA CAR WASHING & CLEANING L.L.C - Premium Car Wash & Detailing Services',
    template: '%s | BABA Car Wash',
  },
  description:
    'Professional car washing and detailing services in UAE. Dust removal, body wash, glass cleaning, wheel cleaning, and tire polishing. Quality service you can trust.',
  keywords: [
    'car wash',
    'car cleaning',
    'car detailing',
    'auto detailing',
    'vehicle wash',
    'car wash UAE',
    'car wash Dubai',
    'professional car wash',
    'mobile car wash',
    'dust removal',
    'body wash',
    'glass cleaning',
    'wheel cleaning',
    'tire polishing',
    'exterior car wash',
    'interior car cleaning',
    'car care services',
    'automotive cleaning',
    'BABA car wash',
  ],
  authors: [{ name: 'BABA CAR WASHING & CLEANING L.L.C' }],
  creator: 'BABA CAR WASHING & CLEANING L.L.C',
  publisher: 'BABA CAR WASHING & CLEANING L.L.C',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BABA CAR WASHING & CLEANING L.L.C - Premium Car Wash Services',
    description:
      'Professional car washing and detailing services in UAE. Expert dust removal, body wash, glass cleaning, wheel cleaning, and tire polishing. Quality service you can trust.',
    url: 'https://www.babacarwash.com',
    siteName: 'BABA Car Wash',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BABA Car Wash - Professional Car Cleaning Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BABA CAR WASHING & CLEANING L.L.C - Premium Car Wash',
    description:
      'Professional car washing and detailing services. Dust removal, body wash, glass cleaning, wheel cleaning, and tire polishing.',
    images: ['/og-image.jpg'],
    creator: '@babacarwash',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#312782" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  if (!localTheme) localTheme = 'dark';
                  document.documentElement.setAttribute('data-theme', localTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abel.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
