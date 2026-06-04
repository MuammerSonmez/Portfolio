import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Multi-Robot Fleet Management System",
    description: "Developed a master-slave fleet management architecture for multiple service robots. Integrated Nav2 stack and decision support algorithms for autonomous path planning and built a PyQt5-based GUI for real-time task management.",
    tags: ["ROS2 Humble", "Nav2", "PyQt5", "Python"],
    year: "2026",
    links: {
      github: "#",
    },
  },
  {
    title: "Autonomous Cafe Service Robot",
    description: "Engineered a ROS-based autonomous service robot featuring SLAM for mapping, AMCL for localization, and Nav2 for dynamic obstacle avoidance. Designed a desktop GUI for interactive ordering.",
    tags: ["ROS", "SLAM", "AMCL", "Nav2", "Docker"],
    year: "2025",
    links: {
      github: "#",
    },
  },
  {
    title: "Autonomous Line Following System",
    description: "Built a ROS 2-based autonomous system in Gazebo utilizing OpenCV for line tracking, SLAM for mapping, and Nav2 for multi-goal navigation with a TurtleBot3.",
    tags: ["ROS2", "Gazebo", "OpenCV", "SLAM", "Nav2"],
    year: "2025",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Wi-Fi Controlled Robotic Vehicle",
    description: "Designed and fabricated a custom vehicle chassis, integrating an ESP32 microcontroller. Utilized a WebSocket architecture over Wi-Fi for real-time remote control from a custom mobile app.",
    tags: ["ESP32", "WebSocket", "C++", "Hardware Design"],
    year: "2025",
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

                  {/* 
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
                  */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
