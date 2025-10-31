import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

interface ScrollDirection {
  isScrollingDown: boolean;
  isScrollingUp: boolean;
}

interface UseScrollOptions {
  threshold?: number;
}

export const useScroll = (options: UseScrollOptions = {}) => {
  const { threshold = 10 } = options;
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>({
    isScrollingDown: false,
    isScrollingUp: false
  });
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      // Check if scrolled past threshold
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection({
        isScrollingDown: scrollY > lastScrollY,
        isScrollingUp: scrollY < lastScrollY
      });

      setIsAtTop(scrollY === 0);
      setIsAtBottom(
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10
      );

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }

      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return {
    scrollPosition,
    scrollDirection,
    isAtTop,
    isAtBottom,
    isScrolling: scrollPosition.y > 0
  };
};

export default useScroll;