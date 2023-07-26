import React, { useEffect, useState } from 'react';
import '../styles/TypingEffect.css';

const TypingEffect = ({ text, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let index = 0;

    const typeText = () => {
      if (isMounted) {
        if (index < text.length) {
          setCurrentText(prevText => prevText + text.charAt(index));
          index++;
          setTimeout(typeText, 300); // Adjust typing speed (milliseconds)
        } else {
          setIsTypingComplete(true); // Mark typing as complete
        }
      }
    };

    if (!isTypingComplete) {
      setTimeout(() => {
        typeText();
      }, 1000); // Add a delay of 1000ms (1 second) before the typing effect starts
    }

    return () => {
      isMounted = false;
    };
  }, [text, isTypingComplete]);

  return <h1 className={`typewriter ${className}`}>{currentText}</h1>;
};

export default TypingEffect;
