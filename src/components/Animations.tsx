
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

type AnimationProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  as?: React.ElementType;
  animation: 
    | "fade-in" 
    | "fade-up" 
    | "scale-up" 
    | "slide-in-right";
};

export const ScrollAnimation = ({
  children,
  className,
  animation = "fade-up",
  threshold = 0.1,
  delay = 0,
  as: Component = "div",
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        isVisible ? animationClass : "opacity-0",
        className
      )}
      style={delayStyle}
    >
      {children}
    </Component>
  );
};

export const staggeredDelay = (index: number, baseDelay = 100) => {
  return index * baseDelay;
};
