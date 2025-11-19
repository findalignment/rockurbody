import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';

function StressAnxietyRelief() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Stress & Anxiety Relief', url: '/stress-anxiety-relief' }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Stress and Anxiety Relief Santa Cruz | Bodywork for Mental Health"
        description="Natural stress and anxiety relief through Structural Integration and bodywork. Address the physical manifestations of chronic stress and improve nervous system regulation in Santa Cruz."
        keywords="stress relief santa cruz, anxiety treatment, bodywork for anxiety, natural stress relief, nervous system regulation, somatic therapy"
        structuredData={getBreadcrumbSchema(breadcrumbs)}
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Stress & Anxiety Relief"
        subtitle="Your body holds your stress. Let's release it."
      />


      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Stress Isn't Just in Your Head. It's in Your Body.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Constant muscle tension. Tight jaw. Shallow breathing. Shoulders hiked up around your ears. That knot in your stomach. Restless sleep. Feeling wound up, unable to relax even when you try.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              You know you're stressed. You've tried meditation, breathing exercises, maybe therapy or medication. These help, but your body still feels locked in fight-or-flight mode. You can't seem to fully let go of the physical tension.
            </p>
            <p className="text-xl text-accent font-semibold">
              Chronic stress creates real, physical changes in your fascia, muscles, and nervous system. Bodywork can address these directly.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Stress Lives in Your Body
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Chronic Muscle Tension
                </h3>
                <p className="text-neutralDark/80">
                  When you're stressed, your muscles contract. This is normal. But chronic stress means your muscles never fully release. Your shoulders, neck, jaw, and back stay tight 24/7. Over time, this becomes your new baseline. You forget what relaxed feels like.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Restricted Breathing
                </h3>
                <p className="text-neutralDark/80">
                  Stress shifts you into shallow, chest breathing. Your diaphragm doesn't descend properly. Your ribcage becomes restricted. This chest breathing keeps you in sympathetic (fight or flight) mode, creating a vicious cycle. You're stressed because you can't breathe properly, and you can't breathe properly because you're stressed.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Fascial Armoring
                </h3>
                <p className="text-neutralDark/80">
                  Your fascia responds to chronic stress by becoming denser and less pliable. This is called "fascial armoring." It's your body's attempt to protect you, but it leaves you feeling rigid, disconnected, and unable to relax. The fascia literally holds your stress.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Stuck in Sympathetic
                </h3>
                <p className="text-neutralDark/80">
                  Your autonomic nervous system has two modes: sympathetic (fight or flight) and parasympathetic (rest and digest). Chronic stress keeps you stuck in sympathetic. Your body never fully shifts into rest mode, even when you're trying to relax. This affects sleep, digestion, immune function, everything.
                </p>
              </div>

              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Digestive Issues
                </h3>
                <p className="text-neutralDark/80">
                  Stress creates tension in your diaphragm, abdominal wall, and pelvic floor. This physically restricts your digestive organs and impairs function. IBS, constipation, stomach pain, these often have a significant stress/tension component.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Emotional Holding
                </h3>
                <p className="text-neutralDark/80">
                  Your body stores emotional experiences. Trauma, chronic stress, anxiety get encoded in your tissues. This isn't woo-woo, it's well-documented. Deep bodywork can release not just physical tension, but emotional holding patterns. Don't be surprised if you feel emotional during or after sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Physical Manifestations of Chronic Stress
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-neutralDark/80">
              <div>• Tension headaches and migraines</div>
              <div>• Jaw clenching and TMJ pain</div>
              <div>• Chronic neck and shoulder tension</div>
              <div>• Upper back pain between shoulder blades</div>
              <div>• Tight chest and restricted breathing</div>
              <div>• Digestive issues (IBS, constipation)</div>
              <div>• Pelvic floor tension</div>
              <div>• Difficulty sleeping</div>
              <div>• Feeling disconnected from your body</div>
              <div>• Chronic fatigue</div>
              <div>• Shallow, rapid breathing</div>
              <div>• Feeling "wound up" all the time</div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              How Bodywork Helps with Stress and Anxiety
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  1. Release Physical Tension
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Through Structural Integration:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Deep work on chronically tight areas (neck, shoulders, jaw, chest)</li>
                  <li>• Release fascial armoring</li>
                  <li>• Free up restricted ribcage for better breathing</li>
                  <li>• Address diaphragm and abdominal tension</li>
                  <li>• Restore tissue pliability and responsiveness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  2. Shift Nervous System State
                </h3>
                <p className="text-lg text-neutralDark/80 mb-3">
                  Bodywork directly affects your nervous system:
                </p>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Slow, deep work activates parasympathetic (rest mode)</li>
                  <li>• Releases endorphins and oxytocin (feel-good hormones)</li>
                  <li>• Reduces cortisol (stress hormone)</li>
                  <li>• Gives your nervous system permission to let go</li>
                  <li>• Creates a felt sense of safety in your body</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  3. Restore Proper Breathing
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Release restrictions preventing diaphragmatic breathing</li>
                  <li>• Teach proper breathing mechanics</li>
                  <li>• Use breathing to regulate nervous system</li>
                  <li>• Create sustainable stress management practices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  4. Build Body Awareness
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Learn to recognize tension before it becomes chronic</li>
                  <li>• Develop interoception (awareness of internal state)</li>
                  <li>• Understand your stress patterns</li>
                  <li>• Tools for self-regulation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What Changes When Your Body Can Finally Relax
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-lg text-neutralDark/80">
              <div>✓ Deeper, more restful sleep</div>
              <div>✓ Reduced muscle tension</div>
              <div>✓ Easier, fuller breathing</div>
              <div>✓ Less anxiety and worry</div>
              <div>✓ Better stress resilience</div>
              <div>✓ Improved digestion</div>
              <div>✓ More energy (not drained by tension)</div>
              <div>✓ Feeling more present and grounded</div>
              <div>✓ Better emotional regulation</div>
              <div>✓ Reduced pain (tension-related)</div>
              <div>✓ Feeling connected to your body</div>
              <div>✓ Improved overall well-being</div>
            </div>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Bodywork as Part of Mental Health Care
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              <strong className="text-neutralDark">Important:</strong> Bodywork is not a replacement for mental health treatment. If you have severe anxiety, depression, PTSD, or other mental health conditions, please work with a qualified therapist or psychiatrist.
            </p>

            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              That said, bodywork is an excellent complement to therapy and medication. Many therapists now recognize the importance of addressing trauma and stress held in the body (this is called somatic therapy). Structural Integration can be a powerful part of a comprehensive mental health strategy.
            </p>

            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you're working with a therapist, I'm happy to coordinate care to support your overall healing.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What to Expect During Sessions
            </h2>
            
            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">The work is slow and deep:</strong> This isn't relaxation massage. I work slowly to communicate with your fascia and nervous system, giving them time to release.
              </p>
              <p>
                <strong className="text-neutralDark">You might feel emotional:</strong> As physical tension releases, emotional holding can surface. This is normal and often cathartic. You're safe to feel whatever comes up.
              </p>
              <p>
                <strong className="text-neutralDark">Your nervous system might react:</strong> Shaking, deep breathing, yawning, temperature changes, these are all signs your nervous system is releasing and rebalancing.
              </p>
              <p>
                <strong className="text-neutralDark">After-effects:</strong> You might feel deeply relaxed, tired, or energized. Your sleep will likely improve. Some people feel emotional for a day or two as processing continues.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              For Santa Cruz Stress Sufferers
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you're carrying stress in your body, if you can't seem to fully relax even when you try, if chronic tension is affecting your quality of life, bodywork might be the missing piece. Let's help your body remember what it feels like to truly let go.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>
          {/* Related Pages */}
          <div className="mt-12 pt-8 border-t border-neutralDark/20">
            <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Wellness Hub
              </Link>
              <Link to="/headache-migraine-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Headache & Migraine Relief
              </Link>
              <Link to="/tmj-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                TMJ Relief
              </Link>
              <Link to="/neck-pain-relief" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Neck Pain Relief
              </Link>
              <Link to="/posture-correction" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Posture Correction
              </Link>
              <Link to="/breathing-and-core" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Breathing & Core
              </Link>
              <Link to="/desk-worker-wellness" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Desk Worker Wellness
              </Link>
              <Link to="/structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                Structural Integration
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default StressAnxietyRelief;
