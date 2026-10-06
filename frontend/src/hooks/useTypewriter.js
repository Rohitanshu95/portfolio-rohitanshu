import { useState, useEffect } from 'react';

export function useTypewriter({ text = '', speed = 75, delay = 500, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let timeoutId;
    let charIndex = 0;

    // Initial delay before typing starts
    timeoutId = setTimeout(() => {
      setIsTyping(true);

      const intervalId = setInterval(() => {
        if (charIndex < text.length) {
          charIndex++;
          setDisplayedText(text.slice(0, charIndex));
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsCompleted(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, onComplete]);

  return { displayedText, isTyping, isCompleted };
}
