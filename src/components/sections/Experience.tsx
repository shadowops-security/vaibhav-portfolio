const experiences = [
  {
    role: "Red Team Operator",
    company: "SailPoint",
    location: "India",
    duration: "April 2025 – Present",
    responsibilities: [
      "Conduct application security assessments on SailPoint's identity governance platform, identifying vulnerabilities in web applications, APIs, and microservices",
      "Execute Red Team operations simulating real-world attack scenarios to test security controls and authentication mechanisms",
      "Perform secure code reviews and architecture assessments to identify security flaws in design and implementation",
      "Collaborate with development teams to integrate security testing into CI/CD pipelines",
      "Design and execute adversary simulation campaigns targeting application layer vulnerabilities",
      "Develop custom security testing tools and automation scripts",
      "Provide security training on OWASP Top 10 and secure development practices"
    ]
  },
  {
    role: "Offensive Security Analyst",
    company: "SecurityHQ",
    location: "India",
    duration: "December 2021 – March 2025",
    responsibilities: [
      "Delivered 30+ comprehensive security assessments including web app pentesting, API security, mobile security (SAST/DAST), and thick client assessments",
      "Identified critical vulnerabilities: SQL injection, XSS, CSRF, insecure authentication, broken access control, business logic flaws",
      "Conducted mobile application security assessments for iOS/Android with static/dynamic analysis and reverse engineering",
      "Led phishing simulation campaigns and social engineering assessments",
      "Performed Red Team assessments aligned with MITRE ATT&CK framework",
      "Designed malware simulations and EDR bypass techniques for endpoint security testing",
      "Managed vulnerability assessment programs using Qualys with risk prioritization",
      "Collaborated in purple team exercises bridging offensive findings with defensive improvements"
    ]
  }
];

const Experience = () => {
  return (
    <div className="space-y-2">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div>
              <span className="output-highlight text-lg font-bold">{exp.role}</span>
              <span className="output-muted"> @ </span>
              <span className="output-cyan">{exp.company}</span>
            </div>
            <div className="output-accent text-sm">
              {exp.duration}
            </div>
          </div>
          <div className="output-muted text-sm mb-2">📍 {exp.location}</div>
          <ul className="space-y-1 text-sm">
            {exp.responsibilities.map((resp, respIndex) => (
              <li key={respIndex} className="flex items-start gap-2">
                <span className="output-highlight">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
