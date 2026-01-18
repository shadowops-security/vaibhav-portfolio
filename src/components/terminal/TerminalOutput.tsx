import { ReactNode, useEffect, useState } from 'react';

interface TerminalOutputProps {
  children: ReactNode;
  delay?: number;
}

const TerminalOutput = ({ children, delay = 0 }: TerminalOutputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <div className="output fade-in">
      {children}
    </div>
  );
};

export default TerminalOutput;
