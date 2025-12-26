export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://www.babacarwash.com';

  // Static routes for car wash services
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/dust-removal', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/services/body-wash', priority: 0.8, changeFrequency: 'weekly' },
    {
      url: '/services/glass-cleaning',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: '/services/wheel-cleaning',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: '/services/tire-polishing',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    { url: '/gallery', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/faqs', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/terms', priority: 0.4, changeFrequency: 'yearly' },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...routes];
}
