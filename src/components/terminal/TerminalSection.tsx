import { ReactNode, useState } from 'react';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';

interface TerminalSectionProps {
  command: string;
  children: ReactNode;
  delay?: number;
  onComplete?: () => void;
}

const TerminalSection = ({ 
  command, 
  children, 
  delay = 0,
  onComplete 
}: TerminalSectionProps) => {
  const [showOutput, setShowOutput] = useState(false);

  const handleCommandComplete = () => {
    setShowOutput(true);
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <section className="mb-8">
      <TerminalPrompt 
        command={command} 
        delay={delay}
        onComplete={handleCommandComplete}
      />
      {showOutput && (
        <TerminalOutput delay={100}>
          {children}
        </TerminalOutput>
      )}
    </section>
  );
};

export default TerminalSection;
