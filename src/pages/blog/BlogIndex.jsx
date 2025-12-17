import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';

function BlogIndex() {
  const blogPosts = [
    {
      id: 'santa-cruz-personal-training-prices-2025',
      title: 'Santa Cruz Personal Training Prices 2025: What to Expect',
      subtitle: 'Understanding the real cost and value of personal training in Santa Cruz',
      date: 'December 16, 2025',
      excerpt: "Complete guide to personal training costs in Santa Cruz. Compare rates, understand pricing factors, and learn how to get the best value for your fitness investment.",
      path: '/blog/santa-cruz-personal-training-prices-2025'
    },
    {
      id: 'best-outdoor-training-spots-santa-cruz',
      title: 'Best Outdoor Training Spots in Santa Cruz: A Personal Trainer\'s Guide',
      subtitle: 'Why train indoors when you have ocean views and redwood forests?',
      date: 'December 16, 2025',
      excerpt: "Discover the best outdoor workout locations in Santa Cruz. From West Cliff Drive to DeLaveaga Park, find perfect spots for training with ocean views and redwood trails.",
      path: '/blog/best-outdoor-training-spots-santa-cruz'
    },
    {
      id: 'how-to-choose-personal-trainer-santa-cruz',
      title: 'How to Choose a Personal Trainer in Santa Cruz: Complete Guide 2025',
      subtitle: 'Making the right choice for your health, goals, and budget',
      date: 'December 16, 2025',
      excerpt: "Expert guide to finding the right personal trainer in Santa Cruz. Learn what certifications matter, red flags to avoid, and questions to ask before hiring.",
      path: '/blog/how-to-choose-personal-trainer-santa-cruz'
    },
    {
      id: 'personal-training-vs-group-classes-santa-cruz',
      title: 'Personal Training vs. Group Classes in Santa Cruz: Which Is Right for You?',
      subtitle: 'Making an informed choice between private training and group fitness',
      date: 'December 16, 2025',
      excerpt: "Comparing personal training and group fitness classes in Santa Cruz. Learn the pros, cons, and costs of each to make the best choice for your fitness goals.",
      path: '/blog/personal-training-vs-group-classes-santa-cruz'
    },
    {
      id: 'discomfort-becomes-normal',
      title: 'When Discomfort Becomes Normal: The Hidden Tension We Carry',
      subtitle: 'How We Learn to Live with Misalignment Without Even Noticing',
      date: 'November 20, 2025',
      excerpt: "Your body adapts to misalignment so gradually that you stop noticing the tension. Learn how subtle compensations become your normal, and what it feels like to let them go.",
      path: '/blog/discomfort-becomes-normal'
    },
    {
      id: 'tech-changes-posture',
      title: 'When Tech Changes Our Posture: Understanding the Hidden Cost of Our Digital Lives',
      subtitle: 'The biomechanics, economics, and solutions for our screen-saturated world',
      date: 'November 11, 2025',
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
        alt="Blog featuring articles about movement, structural integration, and wellness in Santa Cruz"
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
