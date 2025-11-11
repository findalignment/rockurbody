import { useState, useEffect } from 'react';
import { getChatbotStatus, getChatbotHealth } from '../utils/chatbotReliability';

function ChatbotStatus({ className = '' }) {
  const [status, setStatus] = useState(null);
  const [health, setHealth] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Update status every 30 seconds
    const updateStatus = () => {
      setStatus(getChatbotStatus());
      setHealth(getChatbotHealth());
    };

    updateStatus();
    const interval = setInterval(updateStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const getStatusIcon = () => {
    switch (status.status) {
      case 'online':
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'offline':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const getStatusColor = () => {
    switch (status.color) {
      case 'green':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'yellow':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'red':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Status Indicator */}
      <div 
        className={`flex items-center gap-2 text-sm cursor-pointer hover:opacity-90 transition-all px-3 py-2 rounded-lg border ${getStatusColor()}`}
        onClick={() => setShowDetails(!showDetails)}
        title="Click for details"
      >
        <span className="text-lg">{getStatusIcon()}</span>
        <span className="font-semibold">Rock Bot</span>
        <span className="text-xs font-medium">({status.status})</span>
      </div>

      {/* Detailed Status Panel */}
      {showDetails && (
        <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 min-w-80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Rock Bot Status</h3>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close status details"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getStatusIcon()}</span>
                <span className={`font-medium ${getStatusColor()}`}>
                  {status.status.toUpperCase()}
                </span>
              </div>
              
              <p className="text-sm text-gray-600">{status.message}</p>
              
              {health && (
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Success Rate:</span>
                      <span className="ml-1 font-medium">{health.successRate}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Total Requests:</span>
                      <span className="ml-1 font-medium">{health.totalRequests}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Failures:</span>
                      <span className="ml-1 font-medium">{health.consecutiveFailures}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Last Success:</span>
                      <span className="ml-1 font-medium">
                        {health.lastSuccess ? new Date(health.lastSuccess).toLocaleTimeString() : 'Never'}
                      </span>
                    </div>
                  </div>
                  
                  {health.lastError && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">Last Error:</span>
                      <p className="text-xs text-red-600 mt-1 break-words">
                        {health.lastError}
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {status.status === 'offline' && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-600 mb-2">
                    While Rock Bot is offline, you can:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Email: rock@rockurbody.com</li>
                    <li>• Schedule a consultation</li>
                    <li>• Visit our FAQ page</li>
                    <li>• Check back in a few minutes</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotStatus;
