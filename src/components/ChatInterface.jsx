import { useState } from 'react';
import ChatMessage from './ChatMessage';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Store the message before clearing input
    const userMessageText = input;
    
    // Add user message to UI
    const userMessage = { role: 'user', content: userMessageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Call your backend API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessageText,
          history: conversationHistory
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant response to UI
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages(prev => [...prev, assistantMessage]);
      
      // Update conversation history
      setConversationHistory(data.updatedHistory || conversationHistory);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, something went wrong. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container max-w-2xl mx-auto p-6">
      <div className="messages bg-white rounded-lg shadow-lg p-6 mb-4 min-h-[400px]">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">
            Ask me anything about movement, structural integration, or booking a session...
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <ChatMessage 
                key={idx}
                text={msg.content}
                sender={msg.role === 'user' ? 'user' : 'ai'}
              />
            ))}
            {loading && (
              <div className="message assistant text-center text-gray-400">
                Thinking...
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="input-area flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
          placeholder="Ask about booking a session..."
          disabled={loading}
          aria-label="Chat message input"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 min-h-[44px]"
          style={{ fontSize: '16px' }} // Prevent iOS zoom on focus
        />
        <button 
          onClick={sendMessage} 
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
