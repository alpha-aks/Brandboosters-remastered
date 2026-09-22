import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransitionContext = createContext(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    const navigate = useNavigate();
    return {
      navigateWithTransition: (to) => navigate(to)
    };
  }
  return context;
}

export function PageTransitionProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  // status: 'entering' | 'holding' | 'exiting' | 'idle'
  const [status, setStatus] = useState('idle');
  const isNavigatingRef = useRef(false);
  const prevPathRef = useRef(location.pathname);

  // Initial mount transition (unveils from yellow)
  useEffect(() => {
    // If mounted on /contact, start with quick curtain lift
    if (location.pathname === '/contact' || location.pathname === '/contact-us') {
      setStatus('holding');
      const tHold = setTimeout(() => {
        setStatus('exiting');
      }, 240);

      const tEnd = setTimeout(() => {
        setStatus('idle');
      }, 700);

      return () => {
        clearTimeout(tHold);
        clearTimeout(tEnd);
      };
    }
  }, []);

  // Listen to external route changes (e.g. browser back/forward or direct links)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (!isNavigatingRef.current) {
        setStatus('entering');
        const t1 = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setStatus('exiting');
          const t2 = setTimeout(() => {
            setStatus('idle');
          }, 450);
          return () => clearTimeout(t2);
        }, 320);
        return () => clearTimeout(t1);
      }
    }
  }, [location.pathname]);

  // High-velocity programmatic transition function
  const navigateWithTransition = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    isNavigatingRef.current = true;
    setStatus('entering');

    // After yellow screen covers full viewport:
    setTimeout(() => {
      navigate(to);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setStatus('exiting');

      setTimeout(() => {
        setStatus('idle');
        isNavigatingRef.current = false;
      }, 450);
    }, 350);
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {/* Full-Screen Signature Yellow Page Transition Curtain */}
      <div 
        className={`yellow-screen-curtain ${status}`}
        aria-hidden={status === 'idle'}
      >
        <div className="yellow-curtain-centerpiece">
          <div className="yellow-curtain-pill">BrandBoosters</div>
          <h2 className="yellow-curtain-title">Building The Extraordinary</h2>
          <div className="yellow-curtain-bar-wrap">
            <div className="yellow-curtain-bar" />
          </div>
        </div>
      </div>

      {children}
    </TransitionContext.Provider>
  );
}

export default PageTransitionProvider;
