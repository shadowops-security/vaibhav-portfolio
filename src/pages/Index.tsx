import { useState, useCallback } from 'react';
import TerminalHeader from '@/components/terminal/TerminalHeader';
import TerminalSection from '@/components/terminal/TerminalSection';
import WhoAmI from '@/components/sections/WhoAmI';
import Summary from '@/components/sections/Summary';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const sections = [
  { command: 'whoami', Component: WhoAmI },
  { command: 'Get-Summary', Component: Summary },
  { command: 'Get-Skills', Component: Skills },
  { command: 'Get-Experience', Component: Experience },
  { command: 'Get-Achievements', Component: Achievements },
  { command: 'Get-Certifications', Component: Certifications },
  { command: 'Get-Projects', Component: Projects },
  { command: 'Get-Contact', Component: Contact },
];

const Index = () => {
  const [visibleSections, setVisibleSections] = useState(1);

  const handleSectionComplete = useCallback(() => {
    setVisibleSections((prev) => Math.min(prev + 1, sections.length));
  }, []);

  return (
    <div className="terminal-window min-h-screen">
      <div className="max-w-5xl mx-auto">
        <TerminalHeader />
        
        {sections.slice(0, visibleSections).map((section, index) => (
          <TerminalSection
            key={section.command}
            command={section.command}
            delay={index === 0 ? 500 : 0}
            onComplete={index === visibleSections - 1 ? handleSectionComplete : undefined}
          >
            <section.Component />
          </TerminalSection>
        ))}

        {visibleSections >= sections.length && (
          <div className="mt-8 mb-4">
            <div className="prompt">
              <span className="prompt-path">PS C:\Users\Vaibhav&gt;</span>
              <span className="cursor" />
            </div>
          </div>
        )}

        <footer className="mt-16 pb-8 text-center output-muted text-sm border-t border-[hsl(var(--terminal-gray)/0.2)] pt-8">
          <p>© 2025 Vaibhav Patil. All rights reserved.</p>
          <p className="mt-1">Built with 💻 and ☕</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
