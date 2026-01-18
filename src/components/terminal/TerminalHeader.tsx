const TerminalHeader = () => {
  return (
    <div className="mb-6 border-b border-[hsl(var(--terminal-gray)/0.3)] pb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-red))]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-green))]" />
        </div>
        <span className="output-muted text-sm ml-4">Windows PowerShell</span>
      </div>
      <div className="text-xs output-muted">
        Microsoft Windows [Version 10.0.22631.4602]<br />
        (c) Microsoft Corporation. All rights reserved.<br />
        <span className="output-cyan">Portfolio v1.0.0</span> - Type 'help' for available commands
      </div>
    </div>
  );
};

export default TerminalHeader;
