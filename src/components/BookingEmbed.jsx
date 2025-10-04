import { useEffect, useState } from 'react';

function BookingEmbed({ calUsername = 'rockyourbody', eventType = '60min' }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsLoading(false);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      )}
      <div
        data-cal-link={`${calUsername}/${eventType}`}
        data-cal-config='{"layout":"month_view"}'
        className="min-h-[600px]"
      ></div>
    </div>
  );
}

export default BookingEmbed;
