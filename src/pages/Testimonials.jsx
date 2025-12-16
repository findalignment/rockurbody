import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Button from '../components/Button';

function Testimonials() {
  const testimonials = [
    {
      quote: "I asked my physical therapist to recommend a personal trainer, and she suggested Rock. From day one, I felt safe, respected, and appropriately challenged. He has a sharp eye for alignment and movement. His background in structural integration has helped me understand why my body does what it does, not just how to muscle through an exercise. My strength, balance, and confidence have all improved in ways I can feel in day-to-day life.",
      author: "Ellen M.",
      details: "Rock listens carefully, adjusts on the spot, and pays attention to details most people miss. He changes the workouts often enough to keep them interesting, but never just for the sake of novelty. Sessions are focused, efficient, and held in a clean, well-equipped, private space that feels a world away from a typical gym.",
      conclusion: "If you're looking to invest in your health with someone who is truly at the top of their craft, I recommend Rock without hesitation."
    },
    {
      quote: "Rock is an encyclopedia of anatomy knowledge with deep intuition on how to help people address and move through their physical challenges. I trust him to guide me into new skills and have never once worried about him leading me toward bad form or injury. Rock meets me where I am and offers challenges with genuine care.",
      author: "Tahlia D.",
      details: "The level of strength and comfort in my body that I've developed in the past year working with him has exceeded all of my expectations. His gym is clean and private, and one of the only truly welcoming gym environments I've ever experienced."
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="Testimonials - Client Success Stories | RockUrBody"
        description="Read testimonials from clients who have worked with Rock Hudson. Learn how structural integration and movement education have transformed their strength, balance, and daily comfort."
        keywords="testimonials, client reviews, Santa Cruz personal trainer reviews, structural integration testimonials, movement education success stories"
        url="/testimonials"
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

          {/* Testimonials */}
          <section className="space-y-12 md:space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-neutralLight hover:border-accent/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-12 h-12 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Main Quote */}
                <blockquote className="text-lg md:text-xl text-neutralDark leading-relaxed mb-6 font-medium">
                  {testimonial.quote}
                </blockquote>

                {/* Additional Details */}
                {testimonial.details && (
                  <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed mb-6">
                    {testimonial.details}
                  </p>
                )}

                {/* Conclusion */}
                {testimonial.conclusion && (
                  <p className="text-base md:text-lg text-neutralDark/80 leading-relaxed mb-6 font-medium">
                    {testimonial.conclusion}
                  </p>
                )}

                {/* Author */}
                <div className="pt-6 border-t border-neutralLight">
                  <p className="text-lg font-semibold text-primary">
                    {testimonial.author}
                  </p>
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

