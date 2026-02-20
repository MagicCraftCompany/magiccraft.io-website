import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchBlogPostBySlug } from '@/lib/sanity/client';
import { sanityConfig } from '@/lib/sanity/config';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface SanityTextChild {
  _type: string;
  text: string;
  marks?: string[];
}

interface SanityBlock {
  _type: string;
  children?: SanityTextChild[];
  style?: string;
  alt?: string;
  asset?: {
    _ref: string;
  };
}

interface BlogPostDetail {
  _id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  image: string;
  body: SanityBlock[]; // Sanity block content
  publishedAt: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect to news page if no slug
  if (!slug || slug === 'null') {
    return <Navigate to="/news" replace />;
  }

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      
      try {
        const data = await fetchBlogPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setError(`Blog post with slug "${slug}" not found`);
        }
      } catch (err) {
        setError(`Failed to load blog post: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-dvh w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] text-white">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-12">
          <div className="flex h-[50vh] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-dvh w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] text-white">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-12">
          <div className="flex h-[50vh] flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-3xl font-bold">Blog Post Not Found</h1>
            <p className="mb-8 text-gray-400">
              {error || "The blog post you're looking for doesn't exist or has been removed."}
            </p>
            <Link to="/news" className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-2 text-[#070725] transition-colors hover:bg-teal-300">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format the date
  const publishDate = new Date(post.publishedAt);
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const canonicalUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#070725] to-[#0a0a2e] text-white">
      <Helmet>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300">
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-sm text-teal-400">{post.category}</span>
            <span className="text-sm text-gray-400">{formattedDate}</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <p className="text-xl text-gray-300">{post.description}</p>
        </div>

        {post.image && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img src={post.image} alt={post.title} className="h-auto w-full object-cover" />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <div className="text-lg leading-relaxed">
            {post.body && Array.isArray(post.body) ? (
              post.body.map((block, i) => {
                // Handle different block types
                if (block._type === 'block') {
                  return <p key={i}>{block.children?.map((child: SanityTextChild) => child.text).join('')}</p>;
                } else if (block._type === 'image' && block.asset?._ref) {
                  // Render image blocks
                  const imageUrl = `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${block.asset._ref
                    .replace('image-', '')
                    .replace('-jpg', '.jpg')
                    .replace('-png', '.png')
                    .replace('-jpeg', '.jpeg')
                    .replace('-webp', '.webp')}`;
                  
                  return (
                    <div key={i} className="my-8">
                      <img 
                        src={imageUrl} 
                        alt={block.alt || `Blog post image ${i + 1}`} 
                        className="rounded-lg w-full h-auto max-h-[600px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 