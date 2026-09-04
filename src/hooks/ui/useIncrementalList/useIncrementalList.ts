'use client';

import { useEffect, useRef, useState } from 'react';

export function useIncrementalList<T>(items: T[], step = 40) {
  const [count, setCount] = useState(step);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = count < items.length;

  useEffect(() => {
    const node = sentinelRef.current;

    if (!hasMore || !node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCount((current) => current + step);
      },
      { rootMargin: '400px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasMore, step, count]);

  return { visible: items.slice(0, count), hasMore, sentinelRef };
}
