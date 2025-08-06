
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Move } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const InteractiveImage = ({ src, alt, className }: InteractiveImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showInstructions, setShowInstructions] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Show instructions tooltip initially, then fade out
  useEffect(() => {
    if (showInstructions) {
      const timer = setTimeout(() => {
        setShowInstructions(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [showInstructions]);
  
  // Display instruction toast on mount
  useEffect(() => {
    const message = isMobile 
      ? "Tap to zoom and drag with your finger to explore"
      : "Click to zoom and drag to explore the image";
      
    toast(message, {
      duration: 4000,
      icon: isMobile ? "👆" : "🖱️",
    });
  }, [isMobile]);

  // Handle zoom in
  const zoomIn = () => {
    if (scale < 3) {
      setScale(prevScale => prevScale + 0.5);
    }
  };

  // Handle zoom out
  const zoomOut = () => {
    if (scale > 1) {
      setScale(prevScale => prevScale - 0.5);
      
      // Reset position if zooming back to original size
      if (scale <= 1.5) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  // Handle reset zoom/pan
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse events for dragging on desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Add boundaries to prevent dragging too far
      const maxX = (scale - 1) * (imageRef.current?.offsetWidth || 0) / 2;
      const maxY = (scale - 1) * (imageRef.current?.offsetHeight || 0) / 2;
      
      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 1 && e.touches.length === 1) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      
      // Add boundaries
      const maxX = (scale - 1) * (imageRef.current?.offsetWidth || 0) / 2;
      const maxY = (scale - 1) * (imageRef.current?.offsetHeight || 0) / 2;
      
      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY)
      });
      
      // Prevent page scrolling while dragging
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle double tap/click to zoom out
  const handleDoubleClick = () => {
    if (scale > 1) {
      resetView();
    } else {
      zoomIn();
    }
  };

  return (
    <div className="relative">
      {/* Interactive image container */}
      <div 
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-lg cursor-zoom-in",
          scale > 1 && "cursor-move",
          className
        )}
        style={{ 
          touchAction: scale > 1 ? "none" : "auto"
        }}
        onClick={() => scale === 1 && zoomIn()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={cn(
            "w-full transition-transform duration-200",
            isDragging && "transition-none"
          )}
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center',
          }}
          draggable="false"
        />
        
        {/* Instruction overlay - shows initially then fades */}
        {showInstructions && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                {isMobile ? (
                  <span className="text-2xl">👆</span>
                ) : (
                  <span className="text-2xl">🖱️</span>
                )}
                <Move className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">
                {isMobile 
                  ? "Tap to zoom, drag to explore"
                  : "Click to zoom, drag to explore"
                }
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Double-tap to reset
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Controls overlay */}
      <div className="absolute bottom-3 right-3 flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary" 
                size="sm" 
                className="bg-white/80 backdrop-blur-sm shadow-md h-8 w-8 p-0"
                onClick={zoomIn}
                disabled={scale >= 3}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Zoom In</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary" 
                size="sm" 
                className="bg-white/80 backdrop-blur-sm shadow-md h-8 w-8 p-0"
                onClick={zoomOut}
                disabled={scale <= 1}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Zoom Out</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Help tooltip */}
      <div className="absolute top-3 right-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost" 
              size="sm" 
              className="bg-white/60 backdrop-blur-sm h-8 w-8 p-0 rounded-full"
            >
              ?
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Image Controls</h4>
              <div className="text-xs space-y-1">
                <p className="flex items-center"><ZoomIn className="h-3 w-3 mr-2" /> Click image or zoom button to enlarge</p>
                <p className="flex items-center"><Move className="h-3 w-3 mr-2" /> Click and drag to pan when zoomed in</p>
                <p className="flex items-center"><ZoomOut className="h-3 w-3 mr-2" /> Double-click or use zoom out button to reset</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default InteractiveImage;
