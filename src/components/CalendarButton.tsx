import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { company } from '@/config/company';

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: Record<string, unknown>) => void;
      };
    };
  }
}

type CalendarButtonProps = {
  label?: string;
  color?: string;
  className?: string;
};

const CalendarButton = ({ label, color, className }: CalendarButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tryInit = () => {
      if (window.calendar?.schedulingButton?.load && containerRef.current) {
        try {
          window.calendar.schedulingButton.load({
            url: company.calendar.url,
            color: color ?? company.calendar.color,
            label: label ?? company.calendar.label,
            target: containerRef.current,
          });
          return true;
        } catch (err) {
          // ignore and fallback
        }
      }
      return false;
    };

    if (!tryInit()) {
      const timer = setTimeout(tryInit, 500);
      return () => clearTimeout(timer);
    }
  }, [label, color]);

  // Fallback button if script not ready
  return (
    <div ref={containerRef} className={className}>
      <a href={company.calendar.url} target="_blank" rel="noopener noreferrer">
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          {label ?? company.calendar.label}
        </Button>
      </a>
    </div>
  );
};

export default CalendarButton;

