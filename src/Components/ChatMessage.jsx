function ChatMessage({ text, sender }) {
  const isUser = sender === 'user';
  
  return (
    <div 
      className={`p-4 rounded-lg ${
        isUser 
          ? 'bg-blue-100 ml-12' 
          : 'bg-gray-100 mr-12'
      }`}
    >
      <p className="text-sm font-semibold mb-1 text-gray-600">
        {isUser ? 'You' : 'RockUrBody'}
      </p>
      {text}
    </div>
  );
}

export default ChatMessage;
