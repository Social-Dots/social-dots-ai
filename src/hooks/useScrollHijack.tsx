
import { useEffect, useState, useCallback } from 'react';

export const useScrollHijack = (sectionRef: React.RefObject<HTMLElement>, itemCount: number) => {
  const [isHijacked, setIsHijacked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback((e: Event) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if we're in the section
    const isInSection = rect.top <= 0 && rect.bottom > windowHeight;
    
    if (isInSection && !isHijacked) {
      setIsHijacked(true);
      document.body.style.overflow = 'hidden';
    }
    
    if (isHijacked) {
      e.preventDefault();
      
      const deltaY = (e as WheelEvent).deltaY;
      
      if (deltaY > 0) {
        // Scrolling down
        if (currentIndex < itemCount - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          // Last item, resume normal scrolling
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
          window.scrollBy(0, 100); // Continue scrolling down
        }
      } else {
        // Scrolling up
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        } else {
          // First item, resume normal scrolling upward
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
          window.scrollBy(0, -100); // Continue scrolling up
        }
      }
    }
  }, [isHijacked, currentIndex, itemCount, sectionRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHijacked) return;
      
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < itemCount - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
        }
      } else if (e.key === 'Escape') {
        setIsHijacked(false);
        setCurrentIndex(0);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleScroll]);

  // Handle touch events for mobile
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isHijacked) return;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isHijacked) return;
      e.preventDefault();
      touchEndY = e.changedTouches[0].screenY;
      
      const deltaY = touchStartY - touchEndY;
      const threshold = 50;
      
      if (deltaY > threshold) {
        // Swiping up (scrolling down)
        if (currentIndex < itemCount - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
        }
      } else if (deltaY < -threshold) {
        // Swiping down (scrolling up)
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsHijacked(false);
          setCurrentIndex(0);
          document.body.style.overflow = 'auto';
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isHijacked, currentIndex, itemCount]);

  return {
    isHijacked,
    currentIndex,
    scrollProgress
  };
};
