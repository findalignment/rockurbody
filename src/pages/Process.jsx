import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef([]);

  useEffect(() => {
    const observers = stepsRef.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.6 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Assess',
      subtitle: 'Where are you now?',
      description: 'We begin by understanding your body\'s current story. Not just symptoms, but patterns—how you move, where you hold tension, what your structure is asking for.',
      details: [
        'Comprehensive movement assessment',
        'Postural and structural analysis',
        'Discussion of your goals and challenges',
        'Understanding your body\'s unique history'
      ],
      icon: '👁️',
      color: 'sage'
    },
    {
      number: '02',
      title: 'Work',
      subtitle: 'Meeting your body where it is',
      description: 'Through hands-on structural work and movement education, we address the root patterns—not just the pain. This is where change happens: slowly, intelligently, and with your body\'s full participation.',
      details: [
        'Hands-on Structural Integration sessions',
        'Personalized movement training',
        'Progressive, adaptable approach',
        'Building new neuromuscular patterns'
      ],
      icon: '🙌',
      color: 'accent'
    },
    {
      number: '03',
      title: 'Reinforce',
      subtitle: 'Making it stick',
      description: 'Real change isn\'t a one-time solution. We integrate new patterns into your daily life, so your body remembers and maintains what we\'ve built together.',
      details: [
        'Movement practices you can do at home',
        'Ongoing support and refinement',
        'Strategies for maintaining progress',
        'Empowering long-term independence'
      ],
      icon: '🔄',
      color: 'highlight'
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="The Process"
        subtitle="How we work together"
        alt="The structural integration and movement education process showing assessment, hands-on work, and integration in Santa Cruz"
      />

      {/* SEO-optimized intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Movement Education & Structural Integration in Santa Cruz
          </h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
            Whether you're seeking <strong>structural integration in Santa Cruz</strong>, <strong>personalized movement education</strong>, or <strong>exercise instruction in Santa Cruz</strong>, my approach follows a clear, time-tested process. This isn't about quick solutions-it's about understanding your body's story and rewriting it together.
          </p>
        </div>
      </div>

      {/* Visual Process Steps */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutralLight transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`relative mb-20 last:mb-0 transition-all duration-700 ${
                activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-4'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}>
                {/* Content Side */}
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <div className="inline-block">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-6xl md:text-7xl font-heading font-bold text-${step.color}/20`}>
                        {step.number}
                      </span>
                      <div className="text-5xl">{step.icon}</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xl text-accent font-light italic mb-6">
                      {step.subtitle}
                    </p>
                    <p className="text-lg text-neutralDark/80 leading-relaxed mb-8">
                      {step.description}
                    </p>
                    <ul className="space-y-3 text-neutralDark/70">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                  <div className={`
                    relative h-80 rounded-2xl overflow-hidden
                    bg-gradient-to-br from-${step.color}/10 to-${step.color}/5
                    border-2 border-${step.color}/20
                    transform transition-all duration-500
                    ${activeStep === index ? 'scale-100 shadow-xl' : 'scale-95 shadow-sm'}
                  `}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-8xl mb-4 opacity-50">{step.icon}</div>
                        <div className={`text-6xl font-heading font-bold text-${step.color}/40`}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className={`
                hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-6 h-6 rounded-full border-4 border-white transition-all duration-500
                ${activeStep === index ? `bg-${step.color} scale-125 shadow-lg` : 'bg-neutralLight'}
              `} />
            </div>
          ))}
        </div>
      </div>

      {/* Rhythmic Transition */}
      <div className="bg-gradient-to-b from-white to-offWhite py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-heading text-primary leading-relaxed">
            It's not about perfection.<br />
            It's about <em className="text-accent">progress</em>.<br />
            One session, one movement, one breath at a time.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Ready to start?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Book a free consultation to explore how this process can work for you. We'll assess where you are, discuss your goals, and create a path forward that makes sense for your body and your life.
          </p>
          <Button
            href="/consult"
            variant="accent"
            size="lg"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>

      {/* Related Topics */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pt-8 border-t border-neutralDark/20 text-center">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                My Approach
              </Link>
              <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Services
              </Link>
              <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
              <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Movement Education
              </Link>
              <Link to="/smart-starts" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Smart Starts
              </Link>
              <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Programs & Packages
              </Link>
              <Link to="/combo-programs" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Combination Programs
              </Link>
              <Link to="/about" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Process;
