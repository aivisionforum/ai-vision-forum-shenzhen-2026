"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

/**
 * Typewriter effect for animated text
 * Characters appear one by one with configurable delay
 */
export function TypewriterText({
  text,
  delay = 50,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes (e.g. language switch)
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
}
