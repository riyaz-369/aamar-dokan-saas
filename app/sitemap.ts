import prisma from '@/prisma'
import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = 'https://aamardokan.online'

  const allBlogPosts = await prisma.blog.findMany({
    where: {
      status: "Active",
    },
  });

  const blogs = allBlogPosts.map((post) => {
    return {
        url: `${URL}/blogs/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'yearly' as const,
        priority: 1,

    }
  })


  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...blogs,
  ]
}