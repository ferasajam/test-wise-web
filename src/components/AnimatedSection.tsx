import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

const AnimatedSection = ({ className, children, delay = 0, style, ...props }: AnimatedSectionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn("motion-section", isVisible && "motion-section--visible", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;