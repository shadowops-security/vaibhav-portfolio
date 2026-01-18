const certifications = [
  {
    name: "Certified Ethical Hacker (CEH)",
    provider: "EC-Council",
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=tuYNs23iSEGtHRZCkr0DRCpCDcvbOdgMKQWgfuCOf0E="
  },
  {
    name: "Licensed Penetration Tester (LPT Master)",
    provider: "EC-Council",
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=nAOL24JQsnP9dczsfnP/yjCe3lmDSplRmCo5yZFaJMw="
  },
  {
    name: "Practical Network Penetration Tester",
    provider: "TCM Security",
    link: "https://www.credential.net/df281f67-f389-47de-896e-cb0c91d413b9#acc.NxACoyDW"
  },
  {
    name: "Certified Penetration Testing Professional (CPENT)",
    provider: "EC-Council",
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=nAOL24JQsnP9dczsfnP/ym9HYu6j7VUVRDsoAQODS6M="
  }
];

const Certifications = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="p-4 border border-[hsl(var(--terminal-cyan)/0.3)] bg-[hsl(var(--terminal-cyan)/0.05)] hover:bg-[hsl(var(--terminal-cyan)/0.1)] transition-colors"
        >
          <div className="output-highlight font-bold mb-1">
            🏆 {cert.name}
          </div>
          <div className="output-muted text-sm">
            Provider: <span className="output-cyan">{cert.provider}</span>
          </div>
          {cert.link && (
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="output-link text-sm mt-2 inline-block"
            >
              View Certificate →
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
