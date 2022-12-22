import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;

  if (req.method === "POST") {
    const blog = await prisma.blogs.upsert({
      where: {
        slug,
      },
      update: {
        view_count: { increment: 1 },
      },
      create: {
        slug,
        view_count: 1,
      },
    });

    return res.send(blog.view_count);
  }

  const blog = await prisma.blogs.findUnique({
    where: {
      slug,
    },
  });

  res.send(blog?.view_count || 0);
}
