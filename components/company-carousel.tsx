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
}

const companies: Company[] = [
  {
    id: 1,
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    description:
      "Dünya genelinde arama motoru, bulut hizmetleri ve yapay zeka çözümleri sunan teknoloji devi.",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
    description:
      "Windows işletim sistemi, Azure bulut platformu ve Office ürünleri ile tanınan yazılım şirketi.",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    description:
      "iPhone, Mac ve diğer premium tüketici elektroniği ürünleri ile bilinen inovasyon lideri.",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
    description:
      "E-ticaret, AWS bulut hizmetleri ve yapay zeka alanlarında dünya lideri teknoloji şirketi.",
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg",
    description:
      "Facebook, Instagram ve WhatsApp ile sosyal medya dünyasının öncü şirketi.",
  },
  {
    id: 6,
    name: "Tesla",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tesla.svg",
    description:
      "Elektrikli araçlar, enerji depolama ve güneş enerjisi sistemleri üreten yenilikçi şirket.",
  },
  {
    id: 7,
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
    description:
      "Dünya çapında streaming hizmeti sunan, orijinal içerik üretimiyle öne çıkan eğlence şirketi.",
  },
  {
    id: 8,
    name: "Spotify",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg",
    description:
      "Milyonlarca şarkı ve podcast içeren dijital müzik ve medya streaming platformu.",
  },
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
        {/* Ön Yüz */}
        <div className="flip-card-front">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-secondary/50 p-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-16 h-16 object-contain filter invert brightness-0 invert opacity-90"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {company.name}
            </h3>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-xs text-muted-foreground">
              Detaylar için üzerine gelin
            </span>
          </div>
        </div>

        {/* Arka Yüz */}
        <div className="flip-card-back">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 p-2">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-8 h-8 object-contain filter invert brightness-0 invert opacity-70"
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

  // Auto-scroll every 5 seconds
  useEffect(() => {
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
  }, []);

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
            Birlikte Çalıştığım Şirketler
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kariyerim boyunca birlikte çalışma fırsatı bulduğum önde gelen
            teknoloji şirketleri
          </p>
        </div>

        <div className="relative">
          {/* Sol Ok */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-secondary transition-all duration-300",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            onClick={() => scroll("left")}
            aria-label="Önceki"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Sağ Ok */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-secondary transition-all duration-300",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            onClick={() => scroll("right")}
            aria-label="Sonraki"
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
