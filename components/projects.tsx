import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Autonomous Mobile Robot",
    description: "Full autonomous navigation system using ROS2 Humble, Nav2, and Cartographer for indoor warehouse automation. Features dynamic obstacle avoidance and multi-robot coordination.",
    tags: ["ROS2 Humble", "Nav2", "Cartographer", "C++"],
    year: "2024",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Perception Pipeline",
    description: "Real-time 3D perception system combining LiDAR and camera data for object detection and tracking. Implemented custom sensor fusion algorithms for robust environmental understanding.",
    tags: ["Perception", "Sensor Fusion", "C++", "Python"],
    year: "2024",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Agricultural Robot Platform",
    description: "Designed and implemented the navigation stack for an outdoor agricultural robot. GPS-RTK integration with visual odometry fallback for all-weather operation.",
    tags: ["ROS2", "Nav2", "GPS-RTK", "SLAM"],
    year: "2023",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Robot Arm Control System",
    description: "MoveIt2-based manipulation system for a 6-DOF industrial robot arm. Implemented collision-aware motion planning and precise position control for pick-and-place operations.",
    tags: ["MoveIt2", "C++", "Motion Planning"],
    year: "2023",
    links: {
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider sticky top-24">
              Projects
            </h2>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="group relative grid md:grid-cols-[100px_1fr] gap-6 pb-12 border-b border-border/50 last:border-0"
              >
                <div className="text-sm text-muted-foreground font-mono">
                  {project.year}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Link 
                        href={project.links.github}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link 
                        href={project.links.demo}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
