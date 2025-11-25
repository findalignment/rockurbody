import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

function IntegratingStructureAndMovement() {
  return (
    <PageLayout>
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-12">
              <h1 className="text-5xl font-heading text-primary mb-4">
                Why Training with Rock is Different: The Power of Integrating Structure and Movement
              </h1>
              <h2 className="text-2xl text-neutralDark/70 mb-6 font-semibold">
                Breaking Free from Pain Patterns Through Whole-Body Transformation
              </h2>
              <p className="text-sm text-neutralDark/60">October 4, 2025</p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 text-neutralDark/80">
              <p className="text-lg leading-relaxed">
                If you've tried everything to resolve chronic pain, improve your posture, or enhance your physical performance (massage, chiropractic adjustments, physical therapy), you might still feel like something is missing. That's because most approaches treat symptoms in isolation rather than addressing the root cause: how your entire body is organized in space and how you've learned to move through the world.
              </p>

              <p className="leading-relaxed">
                Rock takes a fundamentally different approach, one that combines two powerful modalities that amplify each other's effectiveness: <strong>Structural Integration</strong> and <strong>Movement Education</strong>. This integrated methodology doesn't just provide temporary relief, it creates lasting transformation by addressing both the structure of your body and the patterns that shape how you use it.
              </p>

              <section className="my-10">
                <h3 className="text-3xl font-heading text-neutralDark mb-6">
                  What Makes Rock Different
                </h3>

                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <h4 className="text-2xl font-heading text-neutralDark mb-4">
                    A Progressive, Systematic Approach
                  </h4>
                  <p className="leading-relaxed mb-4">
                    Unlike one-off massage sessions or generic personal training, Rock offers a <strong>comprehensive 12-session protocol</strong> that systematically works through your entire body. Based on Anatomy Trains Structural Integration and Tom Myers' myofascial maps, each session builds upon the last, progressively releasing tension, restoring natural alignment, and unlocking freedom in layers, from the superficial fascia to the deep core structures.
                  </p>
                  <p className="leading-relaxed">
                    This isn't about chasing pain from one area to another. It's about understanding your body as an interconnected whole and addressing the entire system.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-2xl font-heading text-neutralDark mb-4">
                    The Missing Link: Movement Education
                  </h4>
                  <p className="leading-relaxed mb-4">
                    Here's where Rock truly differentiates himself: structural integration alone can create profound changes, but without teaching you <em>how to inhabit</em> that new structure, old movement patterns inevitably return.
                  </p>
                  <p className="leading-relaxed">
                    This is why Rock's sessions aren't just about hands-on work.they're about education. It's not just changing <em>what</em> you feel in your body, it's changing <em>how</em> you perceive it (interoception) and <em>how</em> you move through space (proprioception). Movement education isn't an add-on; it's woven into the process. While structural integration reorganizes your body's architecture, movement education and proprioception allows you how to inhabit that new structure. It changes how you move, breathe, and carry yourself.making the work sustainable rather than reverting to old dysfunction.
                  </p>
                </div>
              </section>

              <section className="my-10 bg-accent/10 border border-accent/20 rounded-2xl p-8">
                <h3 className="text-3xl font-heading text-neutralDark mb-6">
                  Real Results: What Clients Experience
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span><strong>Pain Relief That Lasts:</strong> Not just symptom management, but resolution of the underlying patterns causing discomfort.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span><strong>Better Posture Without Effort:</strong> Your body naturally finds better alignment because the restrictions have been released and you've learned new movement patterns.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span><strong>Enhanced Athletic Performance:</strong> Greater range of motion, improved coordination, and more efficient movement.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span><strong>Increased Body Awareness:</strong> You develop a refined sense of how your body moves and how to self-correct when old patterns try to creep back in.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span><strong>Freedom in Daily Life:</strong> Simple activities.walking, sitting, lifting.become easier and more enjoyable.</span>
                  </li>
                </ul>
              </section>

              <section className="my-10">
                <h3 className="text-3xl font-heading text-neutralDark mb-6">
                  Who Benefits Most?
                </h3>
                <p className="leading-relaxed mb-4">
                  Rock's integrated approach is ideal for:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="leading-relaxed">
                    <strong>People dealing with chronic pain</strong> who haven't found lasting relief through traditional methods
                  </li>
                  <li className="leading-relaxed">
                    <strong>Athletes and active individuals</strong> looking to optimize performance and prevent injury
                  </li>
                  <li className="leading-relaxed">
                    <strong>Anyone recovering from injury</strong> who wants to rebuild strength and mobility correctly
                  </li>
                  <li className="leading-relaxed">
                    <strong>Individuals with postural issues</strong> (forward head, rounded shoulders, pelvic imbalances)
                  </li>
                  <li className="leading-relaxed">
                    <strong>Those seeking greater body awareness</strong> and a deeper connection to how they move
                  </li>
                </ul>
              </section>

              <section className="my-10 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8">
                <h3 className="text-3xl font-heading text-neutralDark mb-6">
                  The Bottom Line
                </h3>
                <p className="leading-relaxed mb-4">
                  Most practitioners specialize in either hands-on bodywork <em>or</em> movement training. Rock's unique integration of both creates a synergy that produces results neither modality can achieve alone. You're not just getting temporary relief or learning isolated exercises.you're undergoing a comprehensive transformation in how your body is organized and how you move through the world.
                </p>
                <p className="leading-relaxed">
                  If you're tired of chasing symptoms and ready to address the root cause of your pain, tension, or movement limitations, Rock's integrated approach offers a path to lasting change.
                </p>
              </section>

              {/* Call to Action */}
              <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-heading text-neutralDark mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-neutralDark/80 mb-6">
                  Book a free consultation to discuss how this integrated approach can help you achieve your goals.
                </p>
                <Link
                  to="/consult"
                  className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
                >
                  Book Free Consultation
                </Link>
              </div>

              {/* Related Topics */}
              <div className="mt-12 pt-8 border-t border-neutralDark/20 text-center">
                <p className="text-sm text-neutralDark/70 mb-4">Related Topics:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/what-is-structural-integration" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Structural Integration
                  </Link>
                  <Link to="/what-is-movement-education" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Movement Education
                  </Link>
                  <Link to="/combo-programs" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Combination Programs
                  </Link>
                  <Link to="/approach" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    My Approach
                  </Link>
                  <Link to="/process" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    The Process
                  </Link>
                  <Link to="/services" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Services
                  </Link>
                  <Link to="/packages" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Programs & Packages
                  </Link>
                  <Link to="/blog" className="text-sm px-4 py-2 bg-sage/10 text-primary rounded-lg hover:bg-sage/20 transition">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}

export default IntegratingStructureAndMovement;
