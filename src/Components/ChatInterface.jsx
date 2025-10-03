import { useState } from 'react';
import ChatMessage from './ChatMessage';
import { sendMessageToAI } from '../utils/openai';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (message.trim()) {
      // Add user message
      const userMessage = message;
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      setMessage('');
      setIsLoading(true);
      
      // Get AI response
      const aiResponse = await sendMessageToAI(userMessage);
      
      setMessages(prev => [...prev, { 
        text: aiResponse, 
        sender: 'ai' 
      }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 min-h-[400px]">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">
            Ask me anything about movement, structural integration, or booking a session...
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <ChatMessage 
                key={index}
                text={msg.text}
                sender={msg.sender}
              />
            ))}
            {isLoading && (
              <div className="text-center text-gray-400">
                Thinking...
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
          placeholder="Type your question..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;
