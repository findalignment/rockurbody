import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PrivatePersonalTrainingSantaCruz() {
  return (
    <>
      <SEO
        title="Private Personal Training Santa Cruz | One-on-One Coaching | RockUrBody"
        description="Private personal training in Santa Cruz. One-on-one movement coaching tailored to your body, goals, and needs. Structural integration and movement education."
        keywords="private personal training Santa Cruz, one on one training Santa Cruz, personal trainer Santa Cruz, movement coaching Santa Cruz, private training"
        url="/private-personal-training-santa-cruz"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary mb-6">
              Private Personal Training Santa Cruz
            </h1>
            <p className="text-xl md:text-2xl text-neutralDark/80 leading-relaxed max-w-3xl mx-auto mb-8">
              One-on-one movement coaching tailored to your body, goals, and needs. Personalized training that addresses your specific patterns.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Why Private Training?</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Private training isn't just about having a trainer to yourself. It's about personalized attention to your specific body, your specific patterns, your specific needs.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              In group classes or generic programs, you get generic solutions. In private training, you get solutions tailored to you. That's the difference.
            </p>
          </div>
        </section>

        <section className="bg-neutralLight py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">What You Get</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Personalized Assessment</h3>
                <p className="text-neutralDark/80">We assess your specific movement patterns, restrictions, and needs. Learn about <Link to="/movement-assessment-santa-cruz" className="text-accent hover:underline">movement assessment</Link>.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Customized Programming</h3>
                <p className="text-neutralDark/80">Every session is tailored to your body and goals. No generic programs, no one-size-fits-all.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Real-Time Feedback</h3>
                <p className="text-neutralDark/80">We watch you move, we correct in real-time, we teach you how to move better.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Integrated Approach</h3>
                <p className="text-neutralDark/80">We combine structural integration and movement education. Learn about <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline">movement coaching</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Who This Is For</h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Private training is for people who want personalized attention. You might have specific goals, specific limitations, or you might just want training that's tailored to you.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Learn about our <Link to="/movement-coaching-santa-cruz" className="text-accent hover:underline font-semibold">movement coaching</Link> approach.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">Ready for Private Training?</h2>
            <p className="text-xl text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Start with a <Link to="/body-systems-check" className="text-accent hover:underline font-semibold">Body Systems Check</Link> to assess your needs, then we'll design your personalized training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/body-systems-check" variant="primary" size="lg">Book a Systems Check</Button>
              <Button to="/book" variant="outline" size="lg">Book Private Training</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PrivatePersonalTrainingSantaCruz;

