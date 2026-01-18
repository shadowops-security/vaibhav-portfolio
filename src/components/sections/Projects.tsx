const projects = [
  {
    name: "Automated Security Assessment Framework",
    description: "Custom security testing automation framework that reduced assessment time by 40% while improving vulnerability coverage across web applications and APIs.",
    tech: ["Python", "Burp Suite API", "REST APIs", "Automation"],
    github: "",
    demo: ""
  },
  {
    name: "Adversary Emulation Toolkit",
    description: "Internal toolkit for Red Team operations simulating advanced persistent threats aligned with MITRE ATT&CK framework.",
    tech: ["Python", "PowerShell", "MITRE ATT&CK", "Cobalt Strike"],
    github: "",
    demo: ""
  },
  {
    name: "CI/CD Security Integration",
    description: "Integrated security testing into development pipelines, enabling automated SAST/DAST scans on every code commit.",
    tech: ["Jenkins", "GitLab CI", "Checkmarx", "OWASP ZAP"],
    github: "",
    demo: ""
  },
  {
    name: "Phishing Simulation Platform",
    description: "Designed and executed phishing simulation campaigns to evaluate organizational security awareness and human factor vulnerabilities.",
    tech: ["GoPhish", "Python", "Email Security", "Social Engineering"],
    github: "",
    demo: ""
  }
];

const Projects = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="p-4 border border-[hsl(var(--terminal-gray)/0.3)] hover:border-[hsl(var(--terminal-cyan)/0.5)] transition-colors"
        >
          <div className="output-cyan font-bold mb-2 text-lg">
            📁 {project.name}
          </div>
          <p className="text-sm mb-3 output-muted">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="text-xs px-2 py-0.5 bg-[hsl(var(--terminal-green)/0.1)] text-[hsl(var(--terminal-green))] border border-[hsl(var(--terminal-green)/0.3)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm">
            {project.github !== undefined && (
              <a href={project.github || "#"} className="output-link">
                [GitHub]
              </a>
            )}
            {project.demo !== undefined && (
              <a href={project.demo || "#"} className="output-link">
                [Demo]
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
