'use client';

import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import { IoChatbubblesSharp, IoChatbubbleEllipses } from 'react-icons/io5';
import './WhatsAppChat.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hello! 👋 Welcome to Webxkey! How can I help you unlock your digital potential today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Intelligent response system for Webxkey
    const getAutoReply = (userMessage: string): string => {
        const msg = userMessage.toLowerCase();

        // Greetings
        if (msg.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
            return "Hello! 👋 Welcome to Webxkey! I'm here to help you unlock your digital potential. We specialize in web development, app development, UI/UX design, and much more. What would you like to know about our services?";
        }

        // Services - General
        if (msg.match(/\b(service|services|what do you|what can you|offer|provide|do)\b/) && !msg.match(/\b(price|cost|pricing)\b/)) {
            return "Great question! Webxkey offers a comprehensive range of digital services:\n\n🌐 **Website Development** - Custom websites, E-commerce, WordPress\n📱 **App Development** - iOS, Android, Cross-platform apps\n🎨 **UI/UX Design** - User interface design, Branding, Prototyping\n📈 **Digital Marketing** - Social media, Content marketing, Campaigns\n🔍 **SEO Services** - Search optimization, Keyword research, SEO audits\n🔗 **Blockchain Solutions** - Smart contracts, DApps, Crypto solutions\n🤖 **AI Services** - AI integration, Machine learning, Chatbots\n📊 **Web Data Scraping** - Data extraction, Price monitoring, Custom APIs\n\nWhich service interests you the most?";
        }

        // Website Development
        if (msg.match(/\b(website|web development|web design|site|webpage)\b/)) {
            return "Excellent choice! 🌐 Our website development services include:\n\n✅ **Custom Website Design** - Tailored to your brand\n✅ **E-commerce Solutions** - Online stores with payment integration\n✅ **WordPress Development** - Easy-to-manage CMS websites\n✅ **Responsive Design** - Perfect on all devices\n✅ **Web Maintenance** - Ongoing support and updates\n\nWe build fast, secure, and SEO-friendly websites that convert visitors into customers. Would you like to discuss your project? Contact us at +94 755 299721 or info@webxkey.com";
        }

        // App Development
        if (msg.match(/\b(app|mobile|application|ios|android)\b/)) {
            return "📱 Our app development expertise covers:\n\n✨ **iOS & Android Apps** - Native development for both platforms\n✨ **Cross-Platform Apps** - React Native, Flutter solutions\n✨ **Progressive Web Apps (PWA)** - Web apps that work like native apps\n✨ **App Maintenance** - Updates, bug fixes, and improvements\n\nWe create user-friendly, high-performance mobile applications that engage your audience. Ready to bring your app idea to life? Let's talk! 📞 +94 755 299721";
        }

        // UI/UX Design
        if (msg.match(/\b(ui|ux|design|interface|user experience|branding)\b/)) {
            return "🎨 Our UI/UX design services help create amazing user experiences:\n\n🖌️ **User Interface Design** - Beautiful, intuitive interfaces\n🖌️ **User Experience Optimization** - Smooth user journeys\n🖌️ **Wireframing & Prototyping** - Visual planning before development\n🖌️ **Brand Identity Design** - Logos, color schemes, brand guidelines\n🖌️ **Design Systems** - Consistent design across all platforms\n\nGreat design = Happy users = Business growth! Want to elevate your brand? Contact us: info@webxkey.com";
        }

        // Digital Marketing & SEO
        if (msg.match(/\b(marketing|seo|social media|digital marketing|optimization|google)\b/)) {
            return "📈 Boost your online presence with our digital marketing services:\n\n🎯 **SEO Services** - Get found on Google, keyword research, on-page & off-page SEO\n🎯 **Social Media Marketing** - Engage your audience on Facebook, Instagram, LinkedIn\n🎯 **Content Marketing** - Quality content that attracts and converts\n🎯 **Email Marketing** - Targeted campaigns that drive results\n🎯 **Digital Advertising** - PPC, Google Ads, social media ads\n\nLet's grow your business online! Ready to get started? 📞 +94 755 299721";
        }

        // Blockchain
        if (msg.match(/\b(blockchain|crypto|cryptocurrency|smart contract|dapp|decentralized)\b/)) {
            return "🔗 Our blockchain development services include:\n\n⛓️ **Blockchain Development** - Custom blockchain solutions\n⛓️ **Smart Contracts** - Secure, automated contracts\n⛓️ **Cryptocurrency Solutions** - Token creation, wallet integration\n⛓️ **DApps** - Decentralized applications\n\nWe help you leverage blockchain technology for your business. Interested in blockchain? Let's discuss: info@webxkey.com";
        }

        // AI Services
        if (msg.match(/\b(ai|artificial intelligence|machine learning|chatbot|automation)\b/)) {
            return "🤖 Transform your business with AI:\n\n🧠 **AI Integration** - Implement AI in your existing systems\n🧠 **Machine Learning** - Predictive analytics, data insights\n🧠 **AI-Powered Automation** - Streamline your processes\n🧠 **Chatbot Development** - 24/7 customer support automation\n\nAI is the future, and we're here to help you embrace it! Contact: +94 755 299721";
        }

        // Web Scraping
        if (msg.match(/\b(scraping|data extraction|web scraping|price monitoring)\b/)) {
            return "📊 Our web data scraping services:\n\n🔍 **Web Scraping & Data Extraction** - Automated data collection\n🔍 **E-commerce Data Scraping** - Product info, competitor analysis\n🔍 **Price Monitoring** - Track competitor pricing\n🔍 **Web Scraping API** - Custom APIs for your data needs\n\nGet the data you need to make informed decisions! Reach out: info@webxkey.com";
        }

        // Pricing
        if (msg.match(/\b(price|pricing|cost|fee|charge|rate|expensive|cheap|budget|quote)\b/)) {
            return "💰 Great question about pricing!\n\nOur pricing is customized based on:\n✓ Project scope and complexity\n✓ Timeline requirements\n✓ Specific features needed\n✓ Ongoing support requirements\n\nWe offer:\n• **Competitive rates** tailored to your budget\n• **Flexible packages** for different needs\n• **FREE consultation** to discuss your project\n• **Custom quotes** after understanding your requirements\n\nLet's discuss your project and provide you with a detailed quote! 📞 +94 755 299721 or 📧 info@webxkey.com";
        }

        // Contact & Hours
        if (msg.match(/\b(contact|phone|email|address|location|reach|call|hours|time|open|available)\b/)) {
            return "📞 **Contact Webxkey:**\n\n📧 Email: info@webxkey.com\n📱 Phone: +94 755 299721\n🌐 Website: https://webxkey.com\n\n⏰ **Business Hours:**\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n(Sri Lanka Time)\n\nFeel free to reach out anytime! We're here to help. 😊";
        }

        // Process/How it works
        if (msg.match(/\b(process|how|work|steps|procedure|timeline)\b/)) {
            return "🚀 **Our Process:**\n\n1️⃣ **Free Consultation** - We discuss your needs and goals\n2️⃣ **Requirement Analysis** - We understand your project in detail\n3️⃣ **Proposal & Quote** - Transparent pricing and timeline\n4️⃣ **Development** - We bring your vision to life\n5️⃣ **Testing & QA** - Ensuring everything works perfectly\n6️⃣ **Launch** - Going live with your project\n7️⃣ **Support** - Ongoing maintenance and updates\n\nReady to start? Let's schedule a free consultation! 📞 +94 755 299721";
        }

        // Portfolio/Projects/Examples
        if (msg.match(/\b(portfolio|project|example|work|previous|past|sample)\b/)) {
            return "🎯 We've successfully delivered projects across various industries:\n\n✅ E-commerce platforms\n✅ Corporate websites\n✅ Mobile applications\n✅ Custom web applications\n✅ Digital marketing campaigns\n✅ Blockchain solutions\n\nWe'd love to show you our portfolio and discuss how we can help with your project! Contact us for case studies and examples: info@webxkey.com or +94 755 299721";
        }

        // Thank you
        if (msg.match(/\b(thank|thanks|appreciate)\b/)) {
            return "You're very welcome! 😊 I'm here to help anytime. Is there anything else you'd like to know about Webxkey's services? Feel free to ask!";
        }

        // Goodbye
        if (msg.match(/\b(bye|goodbye|see you|later|exit)\b/)) {
            return "Thank you for chatting with us! 👋 Feel free to reach out anytime:\n📞 +94 755 299721\n📧 info@webxkey.com\n\nHave a great day! We look forward to helping you unlock your digital potential! 🚀";
        }

        // Default intelligent response
        return "That's a great question! 🤔\n\nI'd be happy to help you with information about:\n\n🌐 Website Development\n📱 App Development\n🎨 UI/UX Design\n📈 Digital Marketing & SEO\n🔗 Blockchain Solutions\n🤖 AI Services\n📊 Web Data Scraping\n\nOr if you'd like to discuss your specific needs, our team is ready to help!\n\n📞 Call us: +94 755 299721\n📧 Email: info@webxkey.com\n\nWhat would you like to know more about?";
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate typing delay and send auto-reply
        setTimeout(() => {
            const botReply: Message = {
                id: (Date.now() + 1).toString(),
                text: getAutoReply(inputMessage),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botReply]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <div
                className={`whatsapp-float-button ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
            >
                <IoChatbubblesSharp className="whatsapp-icon" />
                <div className="pulse-ring"></div>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="whatsapp-chat-container">
                    {/* Header */}
                    <div className="whatsapp-chat-header">
                        <div className="header-content">
                            <div className="header-avatar">
                                <IoChatbubbleEllipses />
                            </div>
                            <div className="header-info">
                                <h3>Chat Agent</h3>
                                <p>Online - We reply instantly</p>
                            </div>
                        </div>
                        <button
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="whatsapp-messages-area">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                            >
                                <div className="message-bubble">
                                    <p
                                        className="message-text"
                                        style={{
                                            color: message.sender === 'user' ? '#000000' : '#303030',
                                            display: 'block',
                                            margin: 0,
                                            fontSize: '14px',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        {message.text}
                                    </p>
                                    <span className="message-time">{formatTime(message.timestamp)}</span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot-message">
                                <div className="message-bubble typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="whatsapp-input-area">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="message-input"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="send-button"
                            aria-label="Send message"
                            disabled={inputMessage.trim() === ''}
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChat;
