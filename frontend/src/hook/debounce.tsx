import React from 'react';

export default function useDebounce(value: string, delay: number, fn: Function) {
  React.useEffect(() => {
    const handler: any = setTimeout(() => fn(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, fn]);
}