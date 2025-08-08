import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SkipLinks } from '@/components/SkipLinks';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ children }) => {
  useEffect(() => {
    // Add focus management for dynamic content
    const handleFocusManagement = () => {
      // Ensure proper focus order for dynamically added content
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element, index) => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex', '0');
        }
      });
    };

    // Run focus management on component mount and when DOM changes
    const observer = new MutationObserver(handleFocusManagement);
    observer.observe(document.body, { childList: true, subtree: true });
    handleFocusManagement();

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SkipLinks />
      {children}
    </>
  );
};

// High contrast theme toggle
export const HighContrastToggle: React.FC = () => {
  const [highContrast, setHighContrast] = React.useState(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setHighContrast(!highContrast)}
      aria-label="Toggle high contrast mode"
      className="fixed top-4 right-4 z-50 bg-background border-2"
    >
      {highContrast ? 'Normal Contrast' : 'High Contrast'}
    </Button>
  );
};

// Screen reader announcements
export const ScreenReaderAnnouncement: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};

// Focus trap for modals
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);
};