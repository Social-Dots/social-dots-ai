import React from 'react';
import { Button } from '@/components/ui/button';

export const SkipLinks: React.FC = () => {
  const skipTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="skip-links">
      <Button
        variant="outline"
        size="sm"
        onClick={() => skipTo('main-content')}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-background border-2"
        onFocus={(e) => e.target.classList.remove('sr-only')}
        onBlur={(e) => e.target.classList.add('sr-only')}
      >
        Skip to main content
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => skipTo('navigation')}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 z-50 bg-background border-2"
        onFocus={(e) => e.target.classList.remove('sr-only')}
        onBlur={(e) => e.target.classList.add('sr-only')}
      >
        Skip to navigation
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => skipTo('contact')}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-72 z-50 bg-background border-2"
        onFocus={(e) => e.target.classList.remove('sr-only')}
        onBlur={(e) => e.target.classList.add('sr-only')}
      >
        Skip to contact
      </Button>
    </div>
  );
};