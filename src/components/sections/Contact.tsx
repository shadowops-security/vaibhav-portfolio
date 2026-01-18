const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "vaibhavrpatil.1520@gmail.com",
    link: "mailto:vaibhavrpatil.1520@gmail.com"
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/vaibhav-pb1b064164",
    link: "https://www.linkedin.com/in/vaibhav-p-b1b064164/"
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/vaibhavpatil",
    link: ""
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91-9420015215",
    link: ""
  }
];

const Contact = () => {
  return (
    <div className="space-y-4">
      <div className="output-accent mb-4">
        Ready to collaborate? Let's connect!
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link || "#"}
            className="flex items-center gap-3 p-4 border border-[hsl(var(--terminal-gray)/0.3)] hover:border-[hsl(var(--terminal-cyan))] hover:bg-[hsl(var(--terminal-cyan)/0.05)] transition-all group"
          >
            <span className="text-2xl">{contact.icon}</span>
            <div>
              <div className="output-muted text-sm">{contact.label}</div>
              <div className="output-cyan group-hover:underline">{contact.value}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6 p-4 border border-[hsl(var(--output-highlight)/0.3)] bg-[hsl(var(--output-highlight)/0.05)]">
        <div className="output-highlight">
          ⚡ Feel free to connect if you’d like to have a brief conversation about Application Security, Red Team, or Security Architecture opportunities.
        </div>
      </div>
    </div>
  );
};

export default Contact;
