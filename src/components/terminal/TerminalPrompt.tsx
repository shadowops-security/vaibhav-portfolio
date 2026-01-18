import { useEffect, useState } from 'react';

interface TerminalPromptProps {
  command: string;
  onComplete?: () => void;
  showCursor?: boolean;
  delay?: number;
}

const TerminalPrompt = ({ 
  command, 
  onComplete, 
  showCursor = false,
  delay = 0 
}: TerminalPromptProps) => {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < command.length) {
        setDisplayedCommand(command.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [command, hasStarted, onComplete]);

  if (!hasStarted) return null;

  return (
    <div className="prompt">
      <span className="prompt-path">PS C:\Users\Vaibhav&gt;</span>
      <span className="command">{displayedCommand}</span>
      {(isTyping || showCursor) && <span className="cursor" />}
    </div>
  );
};

export default TerminalPrompt;
