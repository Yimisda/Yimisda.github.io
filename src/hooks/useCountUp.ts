import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < delay) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((elapsed - delay) / duration, 1);
      
      // Easing function: ease-out-cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(start + (end - start) * easeOut);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration, delay, enabled]);

  return count;
}

export function useCountUpFormatted(options: UseCountUpOptions & { suffix?: string }): string {
  const { suffix = '', ...countOptions } = options;
  const count = useCountUp(countOptions);
  
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k' + suffix;
  }
  
  return count.toString() + suffix;
}
