import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import SEO from '../components/SEO';

function CyclistsRunners() {
  return (
    <PageLayout>
      <SEO 
        title="Bodywork for Cyclists & Runners | Santa Cruz Performance Therapy"
        description="Overcome IT band issues, improve performance, and prevent injuries. Structural Integration for cyclists and runners in Santa Cruz."
        keywords="cyclist bodywork santa cruz, runner therapy, IT band treatment, cycling injuries, running injuries santa cruz, sports performance"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="For Cyclists & Runners"
        subtitle="Go longer, perform better, stay injury-free"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              You Love Riding/Running. Your Body is Fighting Back.
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Whether you're climbing Empire Grade, running West Cliff, or putting in miles for your next race.repetitive movement takes a toll. The same issues keep coming back:
            </p>
            <ul className="space-y-3 text-lg text-neutralDark/80">
              <li>• IT band tightness that won't release</li>
              <li>• Hip flexor pain from too much sitting + riding/running</li>
              <li>• Knee pain that gets worse with mileage</li>
              <li>• Lower back stiffness after long rides/runs</li>
              <li>• Plantar fasciitis that keeps you from training</li>
            </ul>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Issues for Cyclists
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-neutralDark block mb-1">Hip Flexor Tightness & Pain</strong>
                <p className="text-neutralDark/80">Hours in a flexed position shortens hip flexors, creating lower back pain and limiting power output.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">IT Band Syndrome</strong>
                <p className="text-neutralDark/80">Repetitive knee bending with tight hips causes friction and inflammation on the outside of the knee.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">Lower Back Strain</strong>
                <p className="text-neutralDark/80">Staying in flexion for hours while generating power stresses the lower back and creates chronic tension.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">Neck & Shoulder Issues</strong>
                <p className="text-neutralDark/80">Holding your head up while looking forward creates neck strain and shoulder tension.</p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-accent/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Common Issues for Runners
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-neutralDark block mb-1">Runner's Knee (Patellofemoral Pain)</strong>
                <p className="text-neutralDark/80">Poor hip and knee alignment causes tracking issues and pain around the kneecap.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">IT Band Syndrome</strong>
                <p className="text-neutralDark/80">Lateral knee pain from tight IT band, often due to weak glutes and hip imbalances.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">Plantar Fasciitis</strong>
                <p className="text-neutralDark/80">Heel and arch pain from tight calves, restricted ankle mobility, and poor foot mechanics.</p>
              </div>
              <div>
                <strong className="text-neutralDark block mb-1">Achilles Tendonitis</strong>
                <p className="text-neutralDark/80">Inflammation from overuse, tight calves, and poor running mechanics.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How I Help Cyclists & Runners
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Release the Restrictions
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Free up tight hip flexors, IT bands, and quads</li>
                  <li>• Release locked-up calves and plantar fascia</li>
                  <li>• Restore ankle and hip mobility</li>
                  <li>• Balance leg length discrepancies and rotation patterns</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Improve Biomechanics
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Optimize pedal stroke efficiency (cyclists)</li>
                  <li>• Improve running gait and foot strike (runners)</li>
                  <li>• Strengthen weak glutes and posterior chain</li>
                  <li>• Teach proper breathing for endurance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-3">
                  Prevent Future Issues
                </h3>
                <ul className="space-y-2 text-neutralDark/80 ml-6">
                  <li>• Pre/post-ride warm-ups and recovery practices</li>
                  <li>• Mobility work to counter repetitive positions</li>
                  <li>• Strength exercises that translate to performance</li>
                  <li>• Early warning signs to catch problems before they sideline you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Performance Benefits
            </h2>
            <p className="text-lg text-neutralDark/80 mb-4">
              Beyond pain relief, better biomechanics = better performance:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-neutralDark/80">
              <div>✓ More power with less effort</div>
              <div>✓ Better endurance</div>
              <div>✓ Faster recovery between sessions</div>
              <div>✓ Improved efficiency</div>
              <div>✓ Reduced injury risk</div>
              <div>✓ Longer athletic lifespan</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/consult" variant="primary" size="lg" fullWidth>
              Schedule Free Consultation
            </Button>
            <Button to="/packages" variant="outline" size="lg" fullWidth>
              View Programs
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default CyclistsRunners;

