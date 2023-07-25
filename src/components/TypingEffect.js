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
          setTimeout(typeText, 700); // Adjust typing speed (milliseconds)
        } else {
          setIsTypingComplete(true);
        }
      }
    };

    if (!isTypingComplete) {
      setTimeout(() => {
        typeText();
      }, 500);
    }

    return () => {
      isMounted = false;
    };
  }, [text, isTypingComplete]);

  return <h1 className={`typewriter ${className}`}>{currentText}</h1>;
};

export default TypingEffect;
