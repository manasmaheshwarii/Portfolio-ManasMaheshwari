
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    const onLinkHoverStart = () => {
      setLinkHovered(true);
    };
    
    const onLinkHoverEnd = () => {
      setLinkHovered(false);
    };
    
    const handleLinkHovers = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onLinkHoverStart);
        el.addEventListener('mouseleave', onLinkHoverEnd);
      });
    };
    
    const removeLinkHovers = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onLinkHoverStart);
        el.removeEventListener('mouseleave', onLinkHoverEnd);
      });
    };
    
    addEventListeners();
    handleLinkHovers();
    
    return () => {
      removeEventListeners();
      removeLinkHovers();
    };
  }, []);
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[999] transition-transform ease-out duration-100",
          "mix-blend-difference",
          hidden && "opacity-0",
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transitionDuration: '150ms',
        }}
      >
        {/* Main cursor */}
        <div 
          className={cn(
            "h-3 w-3 rounded-full bg-white -ml-1.5 -mt-1.5 transition-all duration-300 ease-out",
            clicked && "scale-[0.4] bg-neon-pink",
            linkHovered && "scale-[2] mix-blend-difference bg-neon-cyan"
          )}
        />
        
        {/* Trailing cursor */}
        <div 
          className={cn(
            "fixed top-0 left-0 h-8 w-8 rounded-full border border-white/30 -ml-4 -mt-4 transition-all duration-300 ease-out",
            clicked && "scale-[0.6] border-neon-pink",
            linkHovered && "scale-150 border-neon-cyan"
          )}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transitionDuration: '250ms',
          }}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
