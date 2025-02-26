import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yigittilaver.dev/sitemap.xml',
    host: 'https://yigittilaver.dev',
  }
}
