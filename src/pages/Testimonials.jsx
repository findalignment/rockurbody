import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { getReviewSchema, getAggregateRatingSchema } from '../utils/structuredData';

function Testimonials() {
  const testimonials = [
    {
      quote: "I asked my physical therapist to recommend a personal trainer, and she suggested Rock. From day one, I felt safe, respected, and appropriately challenged.",
      author: "Ellen M.",
      role: "Client since 2023",
      highlights: [
        "Improved strength, balance, and confidence",
        "Understanding why my body does what it does",
        "Appropriate challenge level with expert attention"
      ],
      fullReview: "He has a sharp eye for alignment and movement. His background in structural integration has helped me understand why my body does what it does, not just how to muscle through an exercise. Rock listens carefully, adjusts on the spot, and pays attention to details most people miss. He changes the workouts often enough to keep them interesting, but never just for the sake of novelty. Sessions are focused, efficient, and held in a clean, well-equipped, private space that feels a world away from a typical gym. If you're looking to invest in your health with someone who is truly at the top of their craft, I recommend Rock without hesitation."
    },
    {
      quote: "Rock is an encyclopedia of anatomy knowledge with deep intuition on how to help people address and move through their physical challenges.",
      author: "Tahlia D.",
      role: "Client since 2024",
      highlights: [
        "Exceeded expectations for strength and comfort",
        "Trust in expert guidance and safety",
        "Welcoming, private gym environment"
      ],
      fullReview: "I trust him to guide me into new skills and have never once worried about him leading me toward bad form or injury. Rock meets me where I am and offers challenges with genuine care. The level of strength and comfort in my body that I've developed in the past year working with him has exceeded all of my expectations. His gym is clean and private, and one of the only truly welcoming gym environments I've ever experienced."
    }
  ];

  // Generate review schemas for structured data
  const reviewSchemas = testimonials.map(testimonial => 
    getReviewSchema({
      authorName: testimonial.author,
      rating: 5,
      text: testimonial.quote + ' ' + testimonial.fullReview,
      date: '2024-01-01', // Update with actual dates if available
    })
  );

  // Combine aggregate rating with reviews
  const structuredData = [
    getAggregateRatingSchema(),
    ...reviewSchemas
  ];

  return (
    <PageLayout>
      <SEO
        title="Testimonials - Client Success Stories | RockUrBody"
        description="Read testimonials from clients who have worked with Rock Hudson. Learn how structural integration and movement education have transformed their strength, balance, and daily comfort."
        keywords="testimonials, client reviews, Santa Cruz personal trainer reviews, structural integration testimonials, movement education success stories"
        url="/testimonials"
        structuredData={structuredData}
      />
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="Testimonials"
        subtitle="Real stories from clients who have transformed their movement, strength, and daily comfort through our integrated approach."
        alt="Client testimonials and success stories at RockUrBody"
      />
      <div className="pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="text-center mb-16">
            <p className="text-lg md:text-xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto">
              Our clients come to us looking for lasting change. Here's what they have to say about their experience working with Rock and the results they've achieved.
            </p>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-neutralDark/70">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-sage/5 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-neutralDark/70">Hours SI Training</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sage/5 to-primary/5 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-sage mb-2">100%</div>
              <div className="text-sm text-neutralDark/70">Client Focused</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-sage/5 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1:1</div>
              <div className="text-sm text-neutralDark/70">Private Sessions</div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${
                  index % 2 === 0 
                    ? 'from-white to-primary/5' 
                    : 'from-white to-accent/5'
                } rounded-2xl p-8 md:p-10 shadow-lg border-2 border-neutralLight hover:shadow-xl transition-all duration-300`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Quote and Author */}
                  <div className="md:col-span-2">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Main Quote */}
                    <blockquote className="text-xl md:text-2xl text-neutralDark leading-relaxed mb-6 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Full Review */}
                    <p className="text-base text-neutralDark/80 leading-relaxed mb-6">
                      {testimonial.fullReview}
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-neutralLight/50">
                      <p className="text-lg font-bold text-primary">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-neutralDark/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Highlights */}
                  <div className="md:col-span-1">
                    <div className="bg-white/80 rounded-xl p-6 h-full">
                      <h3 className="text-lg font-semibold text-primary mb-4">Key Results</h3>
                      <ul className="space-y-3">
                        {testimonial.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-neutralDark/80">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                Ready to Experience These Results?
              </h2>
              <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
                Start with a Body Systems Check to see how we can help you achieve lasting change in your movement, strength, and daily comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  to="/body-systems-check"
                  variant="primary"
                  size="lg"
                >
                  Book a Systems Check
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export default Testimonials;

