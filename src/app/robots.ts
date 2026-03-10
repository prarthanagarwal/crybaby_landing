import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/delete-account'],
    },
    sitemap: 'https://crybaby.app/sitemap.xml',
  }
}
