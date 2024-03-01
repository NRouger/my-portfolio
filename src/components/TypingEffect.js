import React, { useEffect, useState } from 'react';
import '../styles/TypingEffect.css';

const TypingEffect = ({ text, subtitle, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let index = 0;

    const typeText = () => {
      if (isMounted) {
        if (index < text.length) {
          setCurrentText(text.substring(0, index + 1)); // Update text directly without appending
          index++;
          setTimeout(typeText, 170); // Adjust typing speed (milliseconds)
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

  useEffect(() => {
    if (isTypingComplete) {
      setTimeout(() => {
        setShowSubtitle(true); // Show subtitle after typing effect with a delay
      }, 1000); // Add a delay after typing effect completes
    }
  }, [isTypingComplete]);


  useEffect(() => {
    const animatedElement = document.querySelector('.typing-effect')

    if (animatedElement) {
      console.log(animatedElement);
      animatedElement.classList.add('animation-triggered');

      setTimeout(() => {
        animatedElement.classList.remove('animation-triggered')
      }, 1000);
    } else {
      console.log('Subtitle element not found');
    }


  }, []);

  return (
    <div className="typing-effect">
      <h1 className={`typewriter ${className}`} style={{ wordWrap: 'break-word' }}>
        {currentText}
      {showSubtitle && <span className="subtitle-90">{subtitle}</span>}
      </h1>
    </div>
  );
};

export default TypingEffect;
