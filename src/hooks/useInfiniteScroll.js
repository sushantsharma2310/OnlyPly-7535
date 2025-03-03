import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (callback, options = {}) => {
  const [isFetching, setIsFetching] = useState(false);
  const { threshold = 100 } = options;

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      !isFetching &&
      scrollHeight - scrollTop - clientHeight < threshold
    ) {
      setIsFetching(true);
    }
  }, [isFetching, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;

    const fetchMore = async () => {
      await callback();
      setIsFetching(false);
    };

    fetchMore();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;