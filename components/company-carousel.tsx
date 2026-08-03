"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  noInvert?: boolean;
}

const companies: Company[] = [
  {
    id: 1,
    name: "MilSOFT",
    logo: "/milsoft.svg",
    description:
      "Autonomous Systems Engineering Intern. Developing core logic for Dynamic Object Following and integrating DLIO with Cartographer.",
  },
  {
    id: 2,
    name: "RACLAB",
    logo: "/raclab.svg",
    description:
      "Undergraduate Researcher at Robotics Lab. Conducting research on multi-robot architectures and autonomous service robots.",
  },
  {
    id: 3,
    name: "OTOBOT",
    logo: "/otobot.png",
    description:
      "Autonomous robotics platform. Contributed to the development of autonomous mobile robot software and hardware integration.",
    noInvert: true,
  },
  {
    id: 4,
    name: "Selcuk University",
    logo: "/su.svg",
    description:
      "Computer Engineering Student (CGPA: 3.20/4.00). Actively developing skills in autonomous systems and software engineering.",
  },
  {
    id: 5,
    name: "T.C. Ministry of Industry",
    logo: "/tc.svg",
    description:
      "Autonomous Driving Technologies Basic Training by the National Technology Academy.",
  },
  {
    id: 6,
    name: "Univ. of Michigan",
    logo: "/uom.svg",
    description:
      "Certificate in AI for Autonomous Vehicles and Robotics (Sensor Fusion, Reinforcement Learning, SLAM).",
  },
  {
    id: 7,
    name: "Univ. of Toronto",
    logo: "/uot.svg",
    description:
      "Certificate in Introduction to Self-Driving Cars (Kinematic Bicycle Model, PID Control).",
  }
];

function FlipCard({ company }: { company: Company }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={cn("flip-card-inner", isFlipped && "flipped")}>
        {/* Front Face */}
        <div className="flip-card-front">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-secondary/50 p-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={cn(
                  "w-16 h-16 object-contain opacity-90",
                  !company.noInvert && "filter invert brightness-0 invert"
                )}
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {company.name}
            </h3>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-xs text-muted-foreground">
              Hover for details
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 p-2">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={cn(
                  "w-8 h-8 object-contain opacity-70",
                  !company.noInvert && "filter invert brightness-0 invert"
                )}
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {company.name}
            </h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              {company.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompanyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  // Auto-scroll every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;

        if (isAtEnd) {
          // Reset to beginning
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Scroll right
          scrollRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Organizations I&apos;ve Worked With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leading organizations and institutions I&apos;ve had the opportunity to collaborate with throughout my career
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-secondary transition-all duration-300",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            onClick={() => scroll("left")}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-secondary transition-all duration-300",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            onClick={() => scroll("right")}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {companies.map((company) => (
              <div key={company.id} className="snap-center flex-shrink-0">
                <FlipCard company={company} />
              </div>
            ))}
          </div>

          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
