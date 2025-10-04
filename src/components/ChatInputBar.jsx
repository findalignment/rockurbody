import { useState } from 'react';
import Button from './Button';

function ChatInputBar({ onSend, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full bg-white border-t border-neutralDark/10">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What brings you here today?"
            disabled={isLoading}
            className="flex-1 px-6 py-4 border-2 border-neutralDark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:bg-neutralLight disabled:cursor-not-allowed text-base"
          />
          <Button 
            variant="accent" 
            size="large"
            type="submit"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </form>
        
        {/* Helper text */}
        <p className="text-sm text-neutralDark/60 mt-3 text-center">
          Ask about pricing, services, booking, or anything else
        </p>
      </div>
    </div>
  );
}

export default ChatInputBar;
