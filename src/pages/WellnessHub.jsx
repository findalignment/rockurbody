import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/structuredData';

function WellnessHub() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Wellness & Prevention', url: '/wellness' }
  ];

  const faqs = [
    {
      question: "Do I need to have pain or problems to benefit from wellness work?",
      answer: "Not at all. Preventive wellness work is most effective when started before problems develop. Many clients begin when they notice minor issues—creeping tension, slight limitations, or just wanting to feel better. Addressing these early prevents them from becoming bigger problems. Think of it like dental care: you brush and floss preventively, not just when you have a cavity. Similarly, maintaining your body's structure proactively keeps you functioning optimally."
    },
    {
      question: "How often should I do wellness sessions?",
      answer: "Frequency depends on your needs, activities, and goals. Many clients do an initial series to address accumulated issues and optimize their structure, then maintain with periodic tune-ups—anywhere from monthly to quarterly. Some people do intensive periods of regular sessions, then maintain with less frequent visits. We'll discuss what makes sense for your situation. The key is consistency—regular maintenance prevents problems from accumulating."
    },
    {
      question: "Is wellness work covered by insurance?",
      answer: "No, we don't bill insurance. Sessions are out-of-pocket. However, some HSA/FSA accounts may reimburse for bodywork or training—check with your provider. We can provide receipts for your records. Many clients find that preventive wellness work actually saves money long-term by preventing problems that would require more expensive treatments later."
    },
    {
      question: "Can wellness work help with stress and anxiety?",
      answer: "Yes. Chronic stress and anxiety create physical patterns—tension stored in your body, restricted breathing, nervous system dysregulation. Structural Integration releases stored tension and improves breathing mechanics. Movement Education helps regulate your nervous system through movement and breath. Many clients find that addressing the physical aspects of stress significantly reduces their experience of stress and anxiety. The work supports both physical and emotional wellness."
    },
    {
      question: "What's the difference between wellness work and treatment?",
      answer: "Wellness work is proactive—maintaining optimal function and addressing issues before they become problems. Treatment is reactive—addressing problems that have already developed. Both use the same techniques (Structural Integration and Movement Education), but the context and goals differ. Wellness work focuses on maintaining and optimizing, while treatment focuses on resolving specific issues. Many clients transition from treatment to wellness work once their immediate problems are resolved."
    },
    {
      question: "Is wellness work appropriate for older adults?",
      answer: "Absolutely. In fact, preventive wellness work becomes even more valuable as you age. Maintaining structure and movement quality helps you stay independent, active, and pain-free. We adapt the work to meet your body where it is, respecting any limitations while supporting optimal function. Many older adults find that regular structural and movement work helps them maintain capabilities they might otherwise lose, supporting active aging and quality of life."
    }
  ];

  const wellnessServices = [
    {
      title: 'Active Aging',
      url: '/services/active-aging',
      description: 'Stay strong, mobile, and independent throughout your later years.'
    },
    {
      title: 'Desk Worker Wellness',
      url: '/services/desk-worker-wellness',
      description: 'Counter the effects of prolonged sitting and screen time on your body.'
    },
    {
      title: 'Pregnancy & Postpartum',
      url: '/services/pregnancy-postpartum',
      description: 'Support your body through pregnancy and recover your strength postpartum.'
    },
    {
      title: 'Stress & Anxiety Relief',
      url: '/services/stress-anxiety-relief',
      description: 'Release stored tension and restore nervous system balance.'
    },
    {
      title: 'Posture Correction',
      url: '/services/posture-correction',
      description: 'Develop natural, effortless posture that supports long-term health.'
    },
    {
      title: 'Balance Training',
      url: '/services/balance-training',
      description: 'Improve stability and reduce fall risk at any age.'
    },
    {
      title: 'Mobility Training',
      url: '/services/mobility-training',
      description: 'Maintain and improve range of motion for lifelong movement capacity.'
    },
    {
      title: 'Core Strengthening',
      url: '/services/core-strengthening',
      description: 'Build functional core strength that protects your spine and supports daily activities.'
    },
    {
      title: 'Breathing & Core Training',
      url: '/services/breathing-core',
      description: 'Master breath mechanics for stress management and optimal function.'
    },
    {
      title: 'Headache & Migraine Relief',
      url: '/services/headache-migraine-relief',
      description: 'Address structural contributions to chronic headaches and migraines.'
    },
    {
      title: 'Movement Screening',
      url: '/services/movement-screening',
      description: 'Proactive assessment to identify and address issues before they become problems.'
    },
    {
      title: 'Sports Injury Prevention',
      url: '/services/sports-injury-prevention',
      description: 'Stay healthy and active in your sport with preventive structural work.'
    }
  ];

  const structuredData = [
    getBreadcrumbSchema(breadcrumbs),
    getFAQSchema(faqs)
  ];

  return (
    <PageLayout>
      <SEO
        title="Wellness & Prevention Santa Cruz | Proactive Health & Body Maintenance"
        description="Preventive wellness services in Santa Cruz. Active aging, desk worker solutions, stress relief, posture correction, and more. Invest in long-term health and vitality."
        keywords="wellness, preventive health, active aging, desk worker wellness, stress relief, posture correction, pregnancy support, Santa Cruz wellness"
        structuredData={structuredData}
      />

      <PageHero
        imageSrc="/approach-hero.jpg"
        title="Wellness & Prevention"
        subtitle="Invest in lifelong vitality and resilience"
      />

      <Breadcrumbs items={breadcrumbs} />

      <div className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Prevention is the Best Medicine
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Most people seek help only after pain and dysfunction have become unbearable. They wait until their back "goes out," their shoulder freezes, or their chronic headaches become debilitating. But what if you could address these issues before they became problems? What if you invested in maintaining your body's structure and function, rather than waiting to fix what breaks?
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Wellness and prevention work at Rock Your Body takes a proactive approach to your body's health. We help you maintain optimal structure and movement quality throughout your life, addressing small issues before they become big problems. Whether you're navigating the physical demands of desk work, managing stress, staying active as you age, or supporting your body through life transitions like pregnancy, our work helps you stay resilient, capable, and comfortable in your body.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This isn't about treating disease or managing symptoms—it's about cultivating lasting health and vitality. Through regular Structural Integration sessions and Movement Education, you maintain your body like you maintain your car: addressing wear and tear before it leads to breakdowns, keeping everything functioning smoothly, and extending your years of active, pain-free living.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              The Cost of Reactive vs. Proactive Care
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Reactive healthcare means waiting for problems, then spending time, money, and effort trying to fix them. You endure months or years of discomfort. You miss activities you love. You accumulate medical bills, try various treatments, perhaps undergo surgery. And even then, you might not fully recover to where you were before the problem began.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Proactive wellness means investing modest time and resources in maintaining your body's structure and function. You catch and address minor issues before they become major problems. You maintain optimal movement quality and structural balance. You stay active and pain-free in your body. The investment is smaller, the results better, and the quality of life significantly higher.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              People who engage in preventive structural and movement work tend to have fewer injuries, less chronic pain, better posture, more energy, and greater resilience to the stresses of modern life. They age better, maintaining independence and capability well into their later years. This is healthcare as it should be—supporting your body's natural capacity for health rather than waiting to manage disease.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Wellness Across the Lifespan
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Your body's needs change throughout life, but the principle remains constant: maintain good structure and movement quality, and your body will serve you well. For young professionals battling desk work and stress, we address postural strain and nervous system regulation before chronic pain develops. For active adults juggling work, family, and fitness, we help you stay resilient and injury-free.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              During pregnancy and postpartum, structural work supports your body through profound changes and helps you recover your function afterward. As you age, preventive work maintains the mobility, strength, and balance that keep you independent and active. At every life stage, addressing your structure proactively makes everything else easier.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              We tailor our approach to your current life circumstances and future goals. A desk worker needs different support than an aging athlete. A new mother has different needs than someone preparing for retirement. But everyone benefits from maintaining optimal structural alignment and movement capacity—it's the foundation of lifelong wellness.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Modern Life Demands Modern Solutions
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Human bodies evolved for varied, whole-body movement throughout the day. Instead, modern life gives us prolonged sitting, repetitive movements, chronic stress, and minimal physical challenge. Your body adapts to what you do—and what you don't do. Structures that aren't used lose capacity. Patterns that repeat constantly create imbalances. Stress accumulates in your tissues.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This mismatch between our bodies' design and modern demands creates predictable problems: forward head posture from screen time, hip tightness from sitting, shoulder dysfunction from keyboard work, stress stored in jaw and breathing patterns. These aren't inevitable consequences of modern life—they're addressable through structural work and movement education.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Our wellness work helps your body adapt to modern demands while maintaining optimal function. You'll develop awareness of how your daily habits affect your structure. You'll learn strategies to counter the effects of sitting, stress, and repetitive activities. You'll build the resilience to thrive in the modern world rather than just survive it.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Building a Sustainable Wellness Practice
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Wellness isn't a destination—it's an ongoing practice. Many clients begin with a series of sessions to address accumulated issues and optimize their structure. Then they maintain those improvements with periodic tune-up sessions, anywhere from monthly to quarterly depending on their needs and activities.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Between sessions, you'll have practices and principles to support your body independently. Simple movement routines, postural awareness, breathing exercises, and self-care strategies become part of your daily life. We're not creating dependency—we're giving you tools to maintain your own wellness while providing expert support and course corrections when needed.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Think of it like dental care: you brush and floss daily, but you still see your dentist regularly for professional cleaning and to catch small problems before they become serious. Similarly, you can do much for your body's structure and movement independently, but periodic professional work keeps you functioning optimally and addresses issues in their early stages.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Stress, Nervous System, and Structural Health
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Chronic stress doesn't just affect your mind—it creates physical patterns in your body. Stress hormones create muscle tension. Emotional stress gets stored in your tissues. Your nervous system stays in fight-or-flight mode, affecting breathing, posture, and movement. These physical patterns can persist long after the stressful situation passes, creating ongoing tension and dysfunction.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Structural Integration releases stored tension and helps your nervous system return to a more regulated state. Movement Education teaches breathing and movement patterns that support calm rather than stress. Together, they address the physical aspects of stress, which often reduces your overall experience of stress and anxiety. Many clients find they feel more grounded, calm, and resilient after structural and movement work.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              This mind-body connection is powerful. When your body feels more at ease, your mind follows. When your breathing is deeper and more natural, your nervous system calms. When your structure is balanced, you feel more stable and grounded. Wellness work supports both physical and emotional health by addressing the structural patterns that affect both.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Life Transitions and Structural Support
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Life brings transitions that affect your body: pregnancy, postpartum recovery, aging, career changes, lifestyle shifts. Each transition creates new demands and patterns. Structural and movement work can support you through these transitions, helping your body adapt to change while maintaining optimal function.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              During pregnancy, structural work supports your changing body and prepares you for birth. Postpartum, it helps you recover your function and strength. As you age, it maintains mobility, balance, and independence. During career transitions or lifestyle changes, it helps your body adapt to new demands. Wellness work isn't just about maintaining—it's about supporting your body through life's changes.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              These transitions are opportunities to optimize your structure and movement. Pregnancy might reveal patterns that needed addressing anyway. Aging might prompt you to invest in maintaining function. Career changes might create new postural demands. Wellness work helps you navigate these transitions with greater ease and resilience.
            </p>

            <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
              Who Wellness Work Serves
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              Preventive wellness work is for anyone who wants to feel good in their body and maintain that feeling throughout their life. You don't need to be in pain or have specific problems to benefit. In fact, the best time to start is before issues develop—though it's never too late to begin caring for your structure proactively.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              If you're a desk worker noticing creeping tension and postural strain, preventive work can reverse these patterns before chronic pain develops. If you're aging and want to maintain your independence and activity level, structural work keeps you mobile and capable. If you're managing stress and want to feel more grounded and resilient, this work supports nervous system regulation and embodied calm.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The common thread? A commitment to taking care of your body proactively, investing in long-term health rather than waiting to manage problems. If you value feeling good, moving well, and aging gracefully, wellness work is for you. It's an investment in your future self—maintaining the structure and movement quality that support an active, pain-free, vibrant life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Wellness & Prevention Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wellnessServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block bg-white rounded-xl p-6 shadow-sm border-2 border-neutralLight hover:border-accent transition-all duration-200 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutralDark/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 text-accent font-semibold flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Frequently Asked Questions About Wellness & Prevention
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden border-2 border-neutralLight hover:border-accent/30 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <h3 className="text-xl font-semibold text-primary pr-8">
                        {faq.question}
                      </h3>
                      <span className={`text-accent text-2xl font-bold transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-6 text-lg text-neutralDark/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-sage/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Invest in Your Long-Term Wellness
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to explore how preventive structural work can support your lifelong health and vitality.
            </p>
            <Link
              to="/consult"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default WellnessHub;
