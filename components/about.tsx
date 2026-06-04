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
              I am a Computer Engineering student at Selçuk University and I am graduating this year.
              I am passionate about creating autonomous systems that solve real-world problems. 
              With my deep expertise in ROS2 navigation stack (Nav2) and extensive experience in C++ and Python, 
              I develop robust, efficient, and scalable robotics solutions..
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans the full robotics stack: from low-level sensor integration and motor control 
              to high-level planning, perception algorithms, and SLAM implementations like Cartographer. I&apos;ve worked on autonomous mobile robots, 
              multi-robot architectures, and simulation environments including Gazebo and NVIDIA Isaac Sim.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
                I recently completed my Autonomous Systems Engineering internship at MilSOFT Software Technologies Inc.
                and am currently working on a competition project within RACLAB. My main area of ​​work is ensuring the integration of
                perception modules and dynamic control architectures for defense industry applications. I am highly motivated to 
                transform complex robotic visions into tangible, field-ready systems.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
