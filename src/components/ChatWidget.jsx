import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const outcomes = [
    'Design a new mobile/web product',
    'Modernize an existing UX/UI',
    'Design system & brand identity',
    'Book a discovery session'
  ];

  const handleSelectOutcome = (outcome) => {
    setSelectedOutcome(outcome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() || selectedOutcome) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedOutcome(null);
        setInputVal('');
        setIsOpen(false);
      }, 2500);
    }
  };

  return (
    <div className="floating-chat-container">
      {/* Speech prompt bubble */}
      {!isOpen && (
        <div 
          className="chat-speech-bubble" 
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
        >
          What's the outcome you're looking for?
        </div>
      )}

      {/* Floating Toggle Icon */}
      <button 
        className="chat-button-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open inquiry assistant"
      >
        {isOpen ? (
          <X size={22} color="#ffffff" />
        ) : (
          <>
            <MessageSquare size={22} color="#ffd105" strokeWidth={2.2} />
            <span className="chat-online-dot" />
          </>
        )}
      </button>

      {/* Interactive Chat Popup */}
      {isOpen && (
        <div className="chat-drawer-card">
          <div className="chat-drawer-header">
            <div>
              <h3>Brandboosters</h3>
              <p>Typically responds within minutes</p>
            </div>
            <button 
              className="chat-drawer-close" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-drawer-body">
            {submitted ? (
              <div style={{ padding: '1.5rem 0', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
                <div style={{ fontWeight: '600', fontSize: '1rem', color: '#111' }}>Thank you!</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.35rem' }}>
                  Our design strategy team will be in touch shortly.
                </div>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.86rem', color: '#444', fontWeight: '500' }}>
                  What's the outcome you're looking for?
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {outcomes.map((item) => (
                    <button
                      key={item}
                      className="chat-option-btn"
                      style={{
                        background: selectedOutcome === item ? '#ffd105' : undefined,
                        color: selectedOutcome === item ? '#000' : undefined,
                        fontWeight: selectedOutcome === item ? 700 : 500
                      }}
                      onClick={() => handleSelectOutcome(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="email"
                    placeholder="Enter your email to connect..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '0.85rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      background: '#ffd105',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.65rem 0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    aria-label="Send inquiry"
                  >
                    <Send size={15} color="#000" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
