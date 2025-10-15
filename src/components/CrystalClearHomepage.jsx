import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

function CrystalClearHomepage() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      step: "01",
      title: "Learn",
      subtitle: "Free Content",
      description: "Access our library of movement education videos, articles, and guides. Perfect for beginners who want to understand the fundamentals.",
      features: ["Free video lessons", "Movement guides", "Educational articles", "FAQ library"],
      cta: "Explore Free Content",
      link: "/smart-starts",
      icon: "📚"
    },
    {
      step: "02", 
      title: "Practice",
      subtitle: "Guided Programs",
      description: "Join structured programs with personalized guidance. From 30-minute sessions to complete transformation series.",
      features: ["Personal training", "Structural Integration", "Movement education", "Progress tracking"],
      cta: "Start Your Journey",
      link: "/packages",
      icon: "🎯"
    },
    {
      step: "03",
      title: "Grow", 
      subtitle: "Community & Advanced",
      description: "Connect with others on the same path. Get advanced training, community support, and ongoing guidance.",
      features: ["Community support", "Advanced techniques", "Regular check-ins", "Lifetime access"],
      cta: "Join the Community",
      link: "/contact",
      icon: "🌱"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Yoga Instructor",
      content: "Rock's approach completely transformed how I move and teach. The structural work is incredible.",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Office Worker",
      content: "After years of back pain, Rock's movement education gave me my life back. I can't recommend him enough.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Athlete",
      content: "The 12-Series was a game-changer. My performance improved dramatically and I feel stronger than ever.",
      rating: 5
    }
  ];

  const metrics = [
    { number: "500+", label: "Sessions Delivered" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutralDark via-neutralDark/95 to-neutralDark/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Move Better.<br />
            <span className="text-accent">Live Better.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Simple movement education & structural work you can use daily — 
            <span className="text-accent font-semibold"> for beginners through advanced.</span>
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              to="/book/consult" 
              variant="accent" 
              size="xl"
              className="text-lg px-8 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300"
            >
              Start with Your Free Session
            </Button>
            <Button 
              to="/smart-starts" 
              variant="outline" 
              size="xl"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutralDark"
            >
              Explore Free Content
            </Button>
          </div>
          
          {/* Social Proof Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {metric.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 3-Step Journey Section */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
              Your Journey to Better Movement
            </h2>
            <p className="text-xl text-neutralDark/80 max-w-3xl mx-auto">
              Whether you're just starting or looking to deepen your practice, 
              we have a path that's right for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  activeStep === index ? 'border-accent' : 'border-transparent'
                } cursor-pointer`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm font-semibold text-accent mb-2">
                    STEP {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-neutralDark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-accent font-semibold">
                    {step.subtitle}
                  </p>
                </div>
                
                <p className="text-neutralDark/80 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutralDark/70">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  to={step.link}
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  {step.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
              Trusted by Movement Enthusiasts
            </h2>
            <p className="text-xl text-neutralDark/80">
              Real results from real people
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-offWhite rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-neutralDark/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-neutralDark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutralDark/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Teaser */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
              What You Get Inside
            </h2>
            <p className="text-xl text-neutralDark/80">
              Everything you need to transform your movement and live better
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎥", title: "Video Lessons", desc: "Step-by-step movement education" },
              { icon: "👥", title: "Community", desc: "Connect with like-minded people" },
              { icon: "📊", title: "Progress Tracking", desc: "Monitor your improvement" },
              { icon: "🤝", title: "Coach Check-ins", desc: "Personalized guidance & support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-neutralDark mb-3">
                  {item.title}
                </h3>
                <p className="text-neutralDark/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-neutralDark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Move Better?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of people who've transformed their movement and their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/book/consult" 
              variant="accent" 
              size="xl"
              className="text-lg px-8 py-4"
            >
              Start Your Free Session
            </Button>
            <Button 
              to="/packages" 
              variant="outline" 
              size="xl"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutralDark"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CrystalClearHomepage;
