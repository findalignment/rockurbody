import { useState } from 'react';

/**
 * Reusable FAQ Section component with accordion functionality
 * Used on service pages to display FAQs with schema markup support
 */
function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
        {title}
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
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px]"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                aria-labelledby={`faq-question-${index}`}
              >
                <h3 id={`faq-question-${index}`} className="text-xl font-semibold text-primary pr-8">
                  {faq.question}
                </h3>
                <span className={`text-accent text-2xl font-bold transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
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
  );
}

export default FAQSection;

