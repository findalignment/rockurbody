import { useState } from 'react';
import { SessionService } from '../services/sessionService';

function PackageBooking({ packageType, packageId, sessionsRemaining }) {
  const [showSessionTypes, setShowSessionTypes] = useState(false);

  const availableSessionTypes = SessionService.getAvailableSessionTypes(packageType);

  const handleBookSession = (sessionType) => {
    const calLink = SessionService.generateCalLink(sessionType);
    window.open(calLink, '_blank');
  };

  if (sessionsRemaining <= 0) {
    return (
      <div className="text-center py-4">
        <p className="text-neutralDark/60 text-sm">All sessions used</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {!showSessionTypes ? (
        <button
          onClick={() => setShowSessionTypes(true)}
          className="w-full px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
        >
          Book Session ({sessionsRemaining} remaining)
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-neutralDark text-sm">Choose Session Type:</h4>
            <button
              onClick={() => setShowSessionTypes(false)}
              className="text-neutralDark/60 hover:text-neutralDark text-xs"
            >
              Cancel
            </button>
          </div>
          
          {availableSessionTypes.map((session) => {
            return (
              <button
                key={session.type}
                onClick={() => handleBookSession(session.type)}
                className="w-full px-3 py-2 bg-white border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition text-sm text-left"
              >
                {session.displayName}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PackageBooking;
