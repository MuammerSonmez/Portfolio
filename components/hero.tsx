import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 -translate-y-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-3xl order-2 md:order-1">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              ROBOTICS ENGINEER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              Muammer
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4">
              Building intelligent robotic systems with precision and purpose.
            </p>

            <p className="text-lg text-foreground/60 leading-relaxed mb-8 max-w-2xl">
              I specialize in autonomous navigation, perception systems, and ROS2 development.
              From concept to deployment, I bring robotic solutions to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/me1.jpeg"
                alt="Muammer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Bottom Center */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-sm text-foreground/50 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">4+</p>
            <p className="text-sm text-foreground/50 mt-1">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-foreground/50 mt-1">Certificates</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-foreground/50 mt-1">Dedication</p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest"></span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div> */}
    </section>
  );
}
