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
              I&apos;m a robotics engineer passionate about creating autonomous systems that solve real-world problems. 
              With deep expertise in ROS2 and extensive experience in C++ and C, I build robust, efficient, 
              and scalable robotic solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans the full robotics stack: from low-level sensor integration and motor control 
              to high-level planning and perception algorithms. I&apos;ve worked on autonomous mobile robots, 
              industrial automation systems, and research platforms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m available for freelance projects and collaborations. Whether you need help with 
              navigation systems, sensor fusion, SLAM implementation, or full robotic system development, 
              I&apos;m here to help bring your vision to reality.
            </p>

            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
