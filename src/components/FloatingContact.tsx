import { useState } from 'react'
import './FloatingContact.css'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSend() {
    if (!message.trim()) return
    setSent(true)
    setMessage('')
  }

  return (
    <>
      {open && (
        <div className="chat-widget">
          <div className="chat-header">
            <span>Contact Us</span>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          <div className="chat-header-sub">
            <div className="chat-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <p>We'll respond as soon as we can.</p>
          </div>

          <div className="chat-body">
            <p className="chat-section-label">Recent Conversations</p>
            <div className="chat-conversation">
              <div className="chat-conv-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <div className="chat-conv-content">
                <div className="chat-conv-top">
                  <span className="chat-conv-name">Aedition Technology</span>
                  <span className="chat-conv-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <p className="chat-conv-msg">
                  {sent ? "Thanks! We'll get back to you shortly." : 'Let me know if you have any questions!'}
                </p>
              </div>
            </div>
          </div>

          <div className="chat-footer">
            <textarea
              className="chat-input"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
              rows={2}
            />
            <button className="chat-send" onClick={handleSend}>Send a Message</button>
          </div>
        </div>
      )}

      <button className="floating-contact" onClick={() => setOpen(o => !o)} aria-label="Contact us">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </>
  )
}
