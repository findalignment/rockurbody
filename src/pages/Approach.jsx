import { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';

function Approach() {
  const [visiblePhrases, setVisiblePhrases] = useState([]);
  const phrasesRef = useRef([]);

  const phrases = [
    { text: "I work hands-on.", id: 'hands' },
    { text: "I teach movement.", id: 'movement' },
    { text: "I help your body remember.", id: 'remember' }
  ];

  useEffect(() => {
    const observers = phrasesRef.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePhrases((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        },
        { threshold: 0.8 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <PageLayout>
      <PageHero 
        imageSrc="/approach-hero.jpg"
        title="My Approach"
        subtitle="How I think about bodies, movement, and lasting change"
      />

      {/* SEO-optimized intro */}
      <div className="bg-offWhite pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
            Structural Integration & Movement Education in Santa Cruz
          </h2>
          <p className="text-lg text-neutralDark/80 leading-relaxed">
            My approach combines hands-on <strong>structural integration</strong>, intelligent <strong>movement education</strong>, and personalized <strong>exercise instruction in Santa Cruz</strong>. This isn't about following a generic program—it's about understanding your unique body and addressing what's actually holding you back.
          </p>
        </div>
      </div>

      {/* Scroll-based reveal: What I Do */}
      <div className="bg-white py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading text-primary/60 mb-20 text-center">
            What I do:
          </h2>
          
          <div className="space-y-32">
            {phrases.map((phrase, index) => (
              <div
                key={phrase.id}
                ref={(el) => (phrasesRef.current[index] = el)}
                className="min-h-[40vh] flex items-center justify-center"
              >
                <p
                  className={`
                    text-4xl md:text-6xl lg:text-7xl font-heading text-primary text-center
                    transition-all duration-1000 ease-out
                    ${visiblePhrases.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                    }
                  `}
                >
                  {phrase.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles - Rhythmic storytelling */}
      <div className="bg-gradient-to-b from-white to-offWhite py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-16 text-center">
            The Principles
          </h2>

          <div className="space-y-16">
            <div className="border-l-4 border-sage pl-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                The body is a system
              </h3>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                Pain in your knee might come from your hip. Shoulder issues might be about your ribcage. I look at the whole picture, not just where it hurts. Everything is connected through fascia—your body's connective tissue web.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Structure influences function
              </h3>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                How you're built affects how you move. If your structure is organized well, movement is easy. If it's not, you compensate. Structural integration reorganizes the structure so better movement becomes natural.
              </p>
            </div>

            <div className="border-l-4 border-highlight pl-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Movement is a skill
              </h3>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                You can't muscle your way to better movement. It's about learning patterns, not just getting stronger. I teach you how to move efficiently, so good movement becomes automatic.
              </p>
            </div>

            <div className="border-l-4 border-sage pl-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Fascia is key
              </h3>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                Your fascia holds patterns. It can get stuck, short, or restricted. Releasing fascial restrictions allows your body to reorganize and move better. This is where lasting change happens.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-heading text-primary mb-4">
                You have to move it
              </h3>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                I can release restrictions, but you have to integrate the change through movement. The goal isn't to make you dependent on bodywork—it's to teach you to move well on your own.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What makes this different */}
      <div className="bg-offWhite py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-12 text-center">
            What makes this different
          </h2>
          
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed">
              Most personal training focuses on exercises.
            </p>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed">
              Most bodywork focuses on relaxation.
            </p>
            <p className="text-2xl md:text-3xl font-heading text-primary leading-relaxed">
              I combine both: <span className="text-accent">structural work</span> to reorganize your body, plus <span className="text-sage">movement education</span> to make the changes last.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm">
            <p className="text-lg text-neutralDark/80 leading-relaxed text-center">
              This isn't about following a program. It's about understanding <em>your</em> body, <em>your</em> restrictions, and <em>your</em> movement patterns. Then addressing them systematically.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-primary mb-6">
            Ready to experience this approach?
          </h3>
          <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
            Book a free consultation and we'll discuss how this way of working can address what's going on in your body.
          </p>
          <a
            href="https://cal.com/rockyourbody/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

export default Approach;