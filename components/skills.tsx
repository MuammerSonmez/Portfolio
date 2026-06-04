const skills = {
  "Data Structures & Languages": [
    { name: "C / C++", level: "Expert" },
    { name: "Python", level: "Advanced" },
    { name: "Turkish", level: "Native" },
    { name: "English", level: "B2" },
  ],
  "Robotics & Autonomous Systems": [
    { name: "ROS2 Humble", level: "Expert" },
    { name: "Cartographer / SLAM", level: "Expert" },
    { name: "NAV2 / MPPI Controller", level: "Advanced" },
    { name: "Docker Container", level: "Advanced" },
  ],
  "Simulations": [
    { name: "Gazebo", level: "Expert" },
    { name: "NVIDIA Isaac Sim", level: "Advanced" },
    { name: "Webots", level: "Intermediate" },
    { name: "Carla", level: "Intermediate" },
  ],
  "Data Comms and Networks": [
    { name: "Servers", level: "Advanced" },
    { name: "Firewall", level: "Intermediate" },
    { name: "TCP/IP", level: "Advanced" },
    { name: "OSI Layers", level: "Advanced" },
  ],
};

function SkillBadge({ name, level }: { name: string; level: string }) {
  return (
    <div className="group flex items-center justify-between py-3 border-b border-border/50 hover:border-primary/50 transition-colors">
      <span className="text-foreground group-hover:text-primary transition-colors">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">{level}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider sticky top-24">
              Skills
            </h2>
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              A comprehensive toolkit for building advanced robotic systems, 
              from embedded firmware to high-level autonomy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-medium text-primary mb-4 font-mono">
                    {category}
                  </h3>
                  <div>
                    {items.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
