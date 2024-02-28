import { useState } from 'react';

type Message = {
  id: number;
  text: string;
  sender: string;
};

const Chatroom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText.trim(),
        sender: 'User',
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const suggestedMessages = [
    "Hello! How can I help you today?",
    "What's your favorite book?",
    "Have you seen any good movies lately?",
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
     
      <div className="fixed bottom-0 right-24 h-96 flex justify-center items-center">
        <div className="chat-card w-300 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="chat-header p-2 bg-gray-200 flex items-center">
            <div className="h2 text-lg font-semibold text-gray-700">Customer Service</div>
          </div>
          <div className="chat-body p-4">
            <div className="message incoming bg-gray-400 rounded-lg p-2 mb-2">
              <p>Hello, I need Some Help !!</p>
            </div>
            <div className="message outgoing bg-gray-400 text-right rounded-lg p-2 mb-2">
              <p>I have a question about your services.</p>
            </div>
            {/* Add more messages as needed */}
          </div>
          <div className="chat-footer p-2 bg-gray-200 flex items-center">
            <input
              className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none text-black"
              type="text"
              placeholder="Type your message"
            />
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
