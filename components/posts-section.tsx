import Link from "next/link"

interface Post {
  date: string
  title: string
  slug: string
}

const posts: Post[] = [
  {
    date: "Mar 15, 2026",
    title: "Building scalable React applications with TypeScript",
    slug: "scalable-react-typescript",
  },
  {
    date: "Feb 28, 2026",
    title: "Why I switched from Redux to React Query",
    slug: "redux-to-react-query",
  },
]

export function PostsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Posts</h2>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/posts/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-sm text-muted-foreground font-mono shrink-0">
                {post.date}
              </span>
              <span className="text-sm text-foreground group-hover:text-foreground/80 transition-colors">
                {post.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link 
        href="/posts" 
        className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        See all posts
      </Link>
    </section>
  )
}
