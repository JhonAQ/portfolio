import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[], typingSpeed = 100, deletingSpeed = 40, pauseTime = 2000) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime); 
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed); 

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
};
