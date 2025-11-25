import PageLayout from '../../components/PageLayout';
import PageHero from '../../components/PageHero';
import Button from '../../components/Button';
import SEO from '../../components/SEO';

function PrecisionNutrition() {
  return (
    <PageLayout>
      <SEO 
        title="Precision Nutrition Coach Level 2 Santa Cruz | Nutrition Coaching"
        description="Precision Nutrition Level 2 certified coach. Evidence-based nutrition coaching for sustainable habit change in Santa Cruz."
        keywords="precision nutrition coach, nutrition coaching santa cruz, habit-based nutrition, sustainable eating, pn2 certification"
      />
      
      <PageHero 
        imageSrc="/training-hero.jpg"
        title="Precision Nutrition Coach Level 2"
        subtitle="Evidence-based nutrition coaching, not dieting"
        alt="Precision Nutrition Level 2 certification for evidence-based nutrition coaching and habit change in Santa Cruz"
      />

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Why Precision Nutrition Level 2
            </h2>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Everyone knows what they're "supposed" to eat. More vegetables. Less processed food. More protein. Less sugar. The problem isn't knowledge. The problem is doing it consistently. That's where nutrition coaching comes in.
            </p>
            <p className="text-xl text-neutralDark/80 leading-relaxed mb-6">
              Precision Nutrition Level 2 (PN2) is the most advanced nutrition coaching certification available. It's not about meal plans or macros (though we can discuss those if needed). It's about helping people actually change their eating habits in sustainable ways. Not 30-day cleanses. Real, lasting change.
            </p>
            <p className="text-xl text-accent font-semibold">
              Nutrition coaching addresses behavior, not just food.
            </p>
          </div>

          <div className="mb-16 bg-sage/5 rounded-2xl p-8">
            <h2 className="text-3xl font-heading text-primary mb-6">
              What PN2 Training Includes
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Habit-Based Coaching
                </h3>
                <p className="text-neutralDark/80">
                  Not restrictive diets. Small, progressive habits that build over time. "Eat slowly." "Eat until 80% full." "Add protein to every meal." Simple practices that create compound results. This approach works because it's sustainable.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Evidence-Based Nutrition Science
                </h3>
                <p className="text-neutralDark/80">
                  Understanding what actually works vs. what's trendy. Macronutrients, energy balance, nutrient timing, supplementation, and how different approaches work for different people. No dogma. Just what research and real-world experience show actually works.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Behavior Change Psychology
                </h3>
                <p className="text-neutralDark/80">
                  Why people struggle to change eating habits and how to help them succeed. Motivation, self-efficacy, identity shifts, environmental design, and addressing barriers. This is the part most nutrition certifications skip and the part that actually matters.
                </p>
              </div>

              <div className="border-l-4 border-highlight pl-6">
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Client-Centered Coaching
                </h3>
                <p className="text-neutralDark/80">
                  Meeting clients where they are. Understanding their values, challenges, and goals. Not prescribing one "perfect" diet but helping each person find what works for their life, preferences, and body.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              How Precision Nutrition Coaching Works
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Start Where You Are
                </h3>
                <p className="text-neutralDark/80">
                  No judgment about your current eating habits. We assess where you are, what's working, what isn't, and what you're ready to change. The starting point is reality, not some ideal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  One Habit at a Time
                </h3>
                <p className="text-neutralDark/80">
                  Not "change everything at once." We work on one practice until it's consistent, then add the next. This approach feels manageable and actually creates lasting change because you're building skills, not following rules.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Progressive Practices
                </h3>
                <p className="text-neutralDark/80">
                  Habits get progressively more challenging. Early habits (like eating slowly) create awareness. Later habits (like portion control or protein targets) require more attention. We build the foundation first.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Address the Whole System
                </h3>
                <p className="text-neutralDark/80">
                  Your eating is influenced by stress, sleep, emotions, environment, relationships, and habits. We look at the whole picture. Sometimes the "nutrition" issue is actually a stress or sleep issue.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutralDark mb-2">
                  Sustainable, Not Temporary
                </h3>
                <p className="text-neutralDark/80">
                  No 30-day challenges. No restrictive elimination diets (unless medically necessary). Changes you can maintain for years, not weeks. This is about lifestyle, not dieting.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-heading text-primary mb-4">
              Areas Nutrition Coaching Addresses
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Weight Management
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Not restrictive dieting. Sustainable approaches to losing fat, building muscle, or maintaining weight through habit change and behavior modification.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Athletic Performance
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Fueling training, recovery nutrition, nutrient timing, body composition for performance. Eating to support your activity level and goals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Health Optimization
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Blood sugar management, inflammation reduction, gut health, energy levels. Nutrition for feeling better and reducing chronic disease risk.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Relationship with Food
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Emotional eating, restrictive patterns, food guilt, binge-restrict cycles. Building a healthier, less stressful relationship with eating.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Habit Building
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Creating consistent eating habits that support your goals. Meal planning, grocery shopping, cooking, eating out. Making healthy eating easier.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutralDark mb-2">
                  Accountability & Support
                </h3>
                <p className="text-neutralDark/80 text-sm">
                  Regular check-ins, problem-solving challenges, adjusting approaches as needed. You're not on your own trying to figure it out.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading text-primary mb-6">
              Integrated with Training and Bodywork
            </h2>
            
            <p className="text-lg text-neutralDark/80 mb-6 leading-relaxed">
              Nutrition coaching isn't separate from your training. It's integrated:
            </p>

            <div className="space-y-4 text-neutralDark/80">
              <p>
                <strong className="text-neutralDark">In movement sessions:</strong> We discuss what's going on with your nutrition, energy levels, and habits. Adjust as needed based on how you're feeling and training.
              </p>
              <p>
                <strong className="text-neutralDark">With structural work:</strong> Nutrition affects inflammation, recovery, and tissue quality. Better nutrition supports better structural work results.
              </p>
              <p>
                <strong className="text-neutralDark">For your goals:</strong> Whether you're trying to lose fat, build muscle, improve performance, or just feel better, we align your nutrition with your training.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-accent pl-6 mb-16">
            <h2 className="text-2xl font-heading text-primary mb-4">
              My Approach
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-4">
              I'm not a meal-plan provider. I'm a nutrition coach. We work together to help you develop sustainable eating habits that work for your life. No restrictive rules. No food guilt. Just practical, evidence-based approaches to eating better.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              If you've struggled with dieting, yo-yo'd between restriction and overeating, or just want to finally develop a healthy relationship with food, this is the approach that works.
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

        </div>
      </div>
    </PageLayout>
  );
}

export default PrecisionNutrition;

