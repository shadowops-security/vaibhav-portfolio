const achievements = [
  {
    icon: "🛡️",
    text: "Successfully identified and remediated critical security vulnerabilities preventing potential data breaches across 30+ client applications"
  },
  {
    icon: "⚡",
    text: "Developed automated security testing frameworks reducing assessment time by 40% while improving coverage"
  },
  {
    icon: "🔄",
    text: "Contributed to security posture improvement through purple team collaboration resulting in enhanced detection capabilities"
  },
  {
    icon: "✅",
    text: "Maintained 100% client satisfaction through clear communication and actionable security recommendations"
  }
];

const Achievements = () => {
  return (
    <div className="space-y-3">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-start gap-3 p-3 bg-[hsl(var(--terminal-cyan)/0.05)] border-l-2 border-[hsl(var(--terminal-cyan))]">
          <span className="text-xl">{achievement.icon}</span>
          <span>{achievement.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
