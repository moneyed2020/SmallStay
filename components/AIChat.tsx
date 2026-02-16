import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your SmallStay Concierge. How can I help you plan your trip today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Create a placeholder for the model response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);
    const modelMessageIndex = messages.length + 1;

    try {
      const streamResult = await sendMessageStream(userMessage.text);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[modelMessageIndex] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      setMessages(prev => {
         const newMessages = [...prev];
         newMessages[modelMessageIndex] = { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later.", isError: true };
         return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary-900 text-white p-4 rounded-full shadow-2xl hover:bg-primary-800 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open AI Concierge"
      >
        <Sparkles className="w-6 h-6 mr-2 text-accent-500" />
        <span className="font-bold pr-1">AI Concierge</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 right-0 z-50 w-full sm:w-96 sm:bottom-6 sm:right-6 bg-white shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ height: 'min(600px, 80vh)', maxHeight: '100dvh' }}
      >
        {/* Header */}
        <div className="bg-primary-900 text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Sparkles className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Concierge</h3>
              <span className="text-xs text-primary-200 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                 <Loader2 className="w-4 h-4 text-primary-500 animate-spin" />
                 <span className="text-xs text-gray-400 font-medium">Thinking...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask for suggestions..."
              className="w-full bg-gray-100 text-gray-800 rounded-full pl-4 pr-12 py-3 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-primary-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
             <span className="text-[10px] text-gray-400">Powered by Google Gemini</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
