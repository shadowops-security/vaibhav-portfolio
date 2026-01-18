const skillCategories = [
  {
    category: "Application Security",
    skills: ["OWASP Top 10", "Secure SDLC", "Threat Modeling", "Security Code Review", "SAST/DAST", "API Security Testing", "Mobile App Security", "Vulnerability Management"]
  },
  {
    category: "Red Team & Offensive Security",
    skills: ["MITRE ATT&CK", "Phishing Simulations", "Social Engineering", "EDR Bypass", "Malware Analysis", "Purple Teaming", "Adversary Emulation"]
  },
  {
    category: "Tools",
    skills: ["Burp Suite Pro", "OWASP ZAP", "Metasploit", "Nmap", "Nessus", "Qualys", "Acunetix", "Checkmarx", "SonarQube", "MobSF", "Frida", "Postman"]
  },
  {
    category: "Programming & Scripting",
    skills: ["Python", "Bash", "PowerShell", "JavaScript", "SQL"]
  },
  {
    category: "Cloud & Frameworks",
    skills: ["AWS Security", "Azure Security", "Container Security", "OWASP ASVS", "OWASP MASVS", "PCI-DSS", "NIST", "ISO 27001"]
  }
];

const Skills = () => {
  return (
    <div className="space-y-4">
      {skillCategories.map((cat, index) => (
        <div key={index} className="mb-4">
          <div className="section-header">
            [{cat.category}]
          </div>
          <div className="flex flex-wrap gap-1">
            {cat.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
