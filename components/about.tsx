export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider sticky top-24">
              About
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m a Robotic Software Engineer and Computer Engineering student at Selcuk University, passionate about creating autonomous systems that solve real-world problems. 
              With deep expertise in ROS2, the navigation stack (Nav2), and extensive experience in C++ and Python, I build robust, efficient, 
              and scalable robotic solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans the full robotics stack: from low-level sensor integration and motor control 
              to high-level planning, perception algorithms, and SLAM implementations like Cartographer. I&apos;ve worked on autonomous mobile robots, 
              multi-robot architectures, and simulation environments including Gazebo and NVIDIA Isaac Sim.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as an Autonomous Systems Engineering Intern at MilSOFT Yazılım Teknolojileri A.Ş., I am focused on bridging the gap between perception modules and dynamic control architectures for defense industry applications. 
              I am always eager to help bring complex robotic visions to reality.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
