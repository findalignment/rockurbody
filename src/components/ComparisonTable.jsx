function ComparisonTable() {
  const comparisons = [
    {
      category: "Training Environment",
      rock: "Private 1-on-1 studio with your full attention",
      bigBox: "Crowded gym floor, trainer splitting focus between clients"
    },
    {
      category: "Training Philosophy",
      rock: "Alignment-based, pain-aware, longevity-focused",
      bigBox: "Generic workout templates, one-size-fits-all"
    },
    {
      category: "Trainer Background",
      rock: "Certified Structural Integration Practitioner (500+ hours), 12+ years experience, multiple certifications",
      bigBox: "Weekend certification, often rotating staff"
    },
    {
      category: "Session Duration",
      rock: "60-75 minutes of focused, undivided attention",
      bigBox: "30-45 minutes, often interrupted or rushed"
    },
    {
      category: "Movement Assessment",
      rock: "Comprehensive body systems analysis before training begins",
      bigBox: "Basic fitness assessment, if any"
    },
    {
      category: "Exercise Selection",
      rock: "Customized based on YOUR structure, limitations, and goals",
      bigBox: "Standard exercises from a template"
    },
    {
      category: "Pain & Injury Management",
      rock: "Understand WHY pain happens, address root causes, work with limitations",
      bigBox: "Avoid exercises that hurt, refer out"
    },
    {
      category: "Progress Tracking",
      rock: "Quality of movement, reduction in compensation patterns, functional improvements",
      bigBox: "Weight lifted, reps completed"
    },
    {
      category: "Long-Term Value",
      rock: "Learn to move better for life, build movement education",
      bigBox: "Dependent on trainer, lose progress when you stop"
    },
    {
      category: "Price",
      rock: "Premium investment in your long-term health",
      bigBox: "Lower upfront cost, but limited results"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-4 text-left font-heading text-lg border-b-2 border-accent">What Matters</th>
            <th className="p-4 text-left font-heading text-lg border-b-2 border-accent bg-accent/20">Rock Urban @ RockUrBody</th>
            <th className="p-4 text-left font-heading text-lg border-b-2 border-white/20">Big Box Gym Trainers</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr 
              key={index} 
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-neutralLight'} hover:bg-accent/5 transition-colors`}
            >
              <td className="p-4 font-semibold text-primary border-b border-neutralLight">
                {item.category}
              </td>
              <td className="p-4 border-b border-neutralLight bg-accent/5">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutralDark">{item.rock}</span>
                </div>
              </td>
              <td className="p-4 text-neutralDark/70 border-b border-neutralLight">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-neutralDark/30 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{item.bigBox}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;

