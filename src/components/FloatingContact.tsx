import { useState, useRef, useEffect } from 'react'
import './FloatingContact.css'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  time: string
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      text: 'Hello! Thanks for visiting Aedition Technology. How can we help you today?',
      sender: 'agent',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [messages, isTyping])

  function handleSend() {
    if (!message.trim()) return

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg: Message = {
      id: Math.random().toString(),
      text: message.trim(),
      sender: 'user',
      time: userTime
    }

    setMessages(prev => [...prev, userMsg])
    setMessage('')
    setIsTyping(true)

    // Simulate brand response
    setTimeout(() => {
      setIsTyping(false)
      const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      const agentMsg: Message = {
        id: Math.random().toString(),
        text: "Thank you for reaching out! We've received your request and will get back to you shortly. You can also contact us directly at sales@aedition.asia.",
        sender: 'agent',
        time: agentTime
      }
      setMessages(prev => [...prev, agentMsg])
    }, 1200)
  }

  return (
    <>
      {open && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-header-title">
              <span className="chat-status-dot"></span>
              <span>Aedition Chat</span>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chat-intro-banner">
            <div className="chat-avatar">AE</div>
            <div className="chat-intro-text">
              <h4>Aedition Support</h4>
              <p>Typically replies within a few minutes</p>
            </div>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            <div className="chat-messages-container">
              {messages.map(msg => (
                <div key={msg.id} className={`chat-bubble-row ${msg.sender === 'user' ? 'row-user' : 'row-agent'}`}>
                  {msg.sender === 'agent' && <div className="chat-msg-avatar">AE</div>}
                  <div className="chat-bubble">
                    <p>{msg.text}</p>
                    <span className="chat-time">{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble-row row-agent">
                  <div className="chat-msg-avatar">AE</div>
                  <div className="chat-bubble typing-bubble">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="chat-footer">
            <div className="chat-input-wrapper">
              <textarea
                className="chat-input"
                placeholder="How can we help?"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                rows={1}
              />
              <button className="chat-send-btn" onClick={handleSend} aria-label="Send message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        className={`floating-contact-btn ${open ? 'btn-active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle contact chat"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  )
}
