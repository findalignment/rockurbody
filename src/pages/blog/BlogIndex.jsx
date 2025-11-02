import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

function BlogIndex() {
  const blogPosts = [
    {
      id: 'tech-changes-posture',
      title: 'When Tech Changes Our Posture: Understanding the Hidden Cost of Our Digital Lives',
      subtitle: 'The biomechanics, economics, and solutions for our screen-saturated world',
      date: 'November 2, 2025',
      excerpt: "We spend 6+ hours daily on screens. Dive deep into the biomechanics of forward head posture, upper crossed syndrome, the breath connection, and evidence-based interventions that actually work.",
      path: '/blog/tech-changes-posture'
    },
    {
      id: 'phone-reshaping-skeleton',
      title: 'Your Phone is Reshaping Your Skeleton (And We Can Do Better)',
      subtitle: 'How technology is literally changing our bodies and what we can do about it',
      date: 'November 2, 2025',
      excerpt: "Technology is literally changing people's bodies. Learn how your fascia adapts to screen time, why text neck is about more than just your neck, and how we can design technology that works with human bodies instead of breaking them.",
      path: '/blog/phone-reshaping-skeleton'
    },
    {
      id: 'integrating-structure-and-movement',
      title: 'Why Training with Rock is Different: The Power of Integrating Structure and Movement',
      subtitle: 'Breaking Free from Pain Patterns Through Whole-Body Transformation',
      date: 'October 4, 2025',
      excerpt: "If you've tried everything to resolve chronic pain, improve your posture, or enhance your physical performance, you might still feel like something is missing. Rock takes a fundamentally different approach that combines Structural Integration and Movement Education.",
      path: '/blog/integrating-structure-and-movement'
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/blog-hero.jpg"
        title="Blog"
        subtitle="Insights on movement, structure, and wellness"
      />
      <div className="pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={post.path}
                className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-heading text-neutralDark hover:text-accent transition flex-1">
                    {post.title}
                  </h2>
                </div>
                {post.subtitle && (
                  <h3 className="text-xl text-neutralDark/70 mb-4 font-semibold">
                    {post.subtitle}
                  </h3>
                )}
                <p className="text-sm text-neutralDark/60 mb-4">{post.date}</p>
                <p className="text-neutralDark/80 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-accent font-semibold flex items-center gap-2">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogIndex;
