"use client";

import React from "react";
import {
  Cpu,
  Orbit,
  Activity,
  Eye,
  Zap,
  Sprout,
  Sliders,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

/**
 * =========================================================================
 * 🛠️ KULLANICI AÇIKLAMASI & ÖZELLEŞTİRME REHBERİ (HOW TO CUSTOMIZE)
 * =========================================================================
 * 
 * Sevgili Muammer, sitene yeni şirketler eklemek, var olanların adını değiştirmek
 * veya linklerini güncellemek çok kolay! Aşağıdaki "experiences" listesini düzenleyerek
 * istediğin her şeyi güncelleyebilirsin.
 * 
 * 1. ŞİRKET/PROJE EKLEMEK VEYA DEĞİŞTİRMEK:
 *    Aşağıdaki "experiences" dizisindeki (array) süslü parantezli {...} blokları
 *    kopyalayıp yapıştırarak yeni şirketler ekleyebilir veya mevcut olanları düzenleyebilirsin.
 * 
 * 2. RESİM/GÖRSEL NASIL EKLENİR?
 *    Şu anda görsel olarak modern, parlayan robotik ikonlar (Lucide Icons) kullandık. 
 *    Eğer gerçek şirket logosu (PNG, JPG) eklemek istersen:
 *    a) Görsel dosyanı (Örn: "sirket-logo.png") "public/" klasörünün içine at.
 *    b) İlgili nesneye `logoUrl: "/sirket-logo.png"` şeklinde yeni bir alan ekle.
 *    c) Kartın render edildiği yerde (aşağıdaki kodda) `<IconComponent className="..." />` satırını
 *       bulup onun yerine Next.js'in `<img src={exp.logoUrl} alt={exp.name} className="w-10 h-10 object-contain" />`
 *       etiketini ekleyebilirsin.
 * 
 * 3. SİTE LİNKLERİNİ DEĞİŞTİRMEK:
 *    `websiteUrl: "https://..."` kısmına gitmek istediğin sitenin tam adresini yazman yeterlidir.
 *    Tıklandığında otomatik olarak yeni sekmede açılacaktır.
 * 
 * =========================================================================
 */

interface ExperienceItem {
  name: string;
  type: string;
  role: string;
  description: string;
  websiteUrl: string;
  image?: string;
  icon?: any;
  colorClass: string;
  iconColor?: string;
}

const experiences: ExperienceItem[] = [
  {
    name: "MilSOFT A.Ş.",
    type: "Company", // "Company" | "Lab" | "Project"
    role: "Autonomous Software Engineer Intern",
    description: "Developed autonomous navigation stacks and integrated robotics solutions for defense industry projects.",
    websiteUrl: "https://www.milsoft.com.tr/",
    image: "/milsoft.jpeg", // MilSOFT logosu için eklenen görsel yolu
    colorClass: "from-teal-500/10 to-emerald-500/10 border-teal-500/30 hover:border-teal-400/60 shadow-teal-500/5",
    iconColor: "text-teal-400",
  },
  {
    name: "Autonomous Systems Lab",
    type: "Research Lab",
    role: "Graduate Researcher",
    description: "Conducted cutting-edge research on multi-agent SLAM and real-time sensor fusion algorithms.",
    websiteUrl: "https://example.com/asl",
    icon: Orbit,
    colorClass: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-400/60 shadow-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    name: "Cybernetics Corp",
    type: "Company",
    role: "Embedded Systems Engineer",
    description: "Designed high-precision brushless motor drives and firmware for multi-axis robotic arms.",
    websiteUrl: "https://example.com/cybernetics",
    icon: Activity,
    colorClass: "from-purple-500/10 to-indigo-500/10 border-purple-500/30 hover:border-purple-400/60 shadow-purple-500/5",
    iconColor: "text-purple-400",
  },
  {
    name: "Perception AI",
    type: "Project",
    role: "Lead Perception Architect",
    description: "Built an open-source 3D camera-LiDAR fusion pipeline for off-road mapping.",
    websiteUrl: "https://example.com/perception",
    icon: Eye,
    colorClass: "from-pink-500/10 to-rose-500/10 border-pink-500/30 hover:border-pink-400/60 shadow-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    name: "Bionic Tech Industries",
    type: "Company",
    role: "Robotics Consultant",
    description: "Advised on system architecture, mechanical-electrical integration, and Gazebo simulations.",
    websiteUrl: "https://example.com/bionic",
    icon: Zap,
    colorClass: "from-amber-500/10 to-orange-500/10 border-amber-500/30 hover:border-amber-400/60 shadow-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    name: "Smart Agriculture Lab",
    type: "Research Lab",
    role: "Hardware & Navigation Lead",
    description: "Engineered robust autonomous weeding robot systems with high-precision RTK-GPS guidance.",
    websiteUrl: "https://example.com/agrilab",
    icon: Sprout,
    colorClass: "from-green-500/10 to-lime-500/10 border-green-500/30 hover:border-green-400/60 shadow-green-500/5",
    iconColor: "text-green-400",
  },
  {
    name: "Future Dynamics",
    type: "Company",
    role: "Motion Planning Intern",
    description: "Implemented MoveIt2 custom trajectory planners for picking operations in structured environments.",
    websiteUrl: "https://example.com/futuredynamics",
    icon: Sliders,
    colorClass: "from-violet-500/10 to-fuchsia-500/10 border-violet-500/30 hover:border-violet-400/60 shadow-violet-500/5",
    iconColor: "text-violet-400",
  },
];

// Kesintisiz manuel ve otomatik sonsuz döngü için listeyi üç kez çoğaltıyoruz.
// Bu sayede kullanıcı butonlarla çok hızlı kaydırsa bile asla sınır çizgisine çarpmaz.
const duplicatedExperiences = [...experiences, ...experiences, ...experiences];

export function Experience() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const speedRef = React.useRef(1.8); // Otomatik kayma hızı (1.8 piksel/kare). Bunu artırıp azaltabilirsin!

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Sayfa yüklendiğinde tam ortadaki (ikinci) setin başlangıcına odaklanıyoruz
    const handleInitialScroll = () => {
      const W = container.scrollWidth;
      container.scrollLeft = W / 3;
    };

    // scrollWidth hemen yüklenmeyebilir, kısa bir gecikmeyle garanti altına alıyoruz
    const timer = setTimeout(handleInitialScroll, 100);

    let animationFrameId: number;

    const animate = () => {
      if (!isPaused && container) {
        // Sağa doğru pürüzsüz kayması için scrollLeft değerini azaltıyoruz (İçerik sağa kayar)
        container.scrollLeft -= speedRef.current;

        const currentW = container.scrollWidth;
        const oneThird = currentW / 3;

        // Sol sınıra (en başa) ulaştığında, ortadaki sete (Set B) zıplat
        if (container.scrollLeft <= 5) {
          container.scrollLeft = oneThird + container.scrollLeft;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  // Manuel Butonlarla Hızlı Kaydırma Fonksiyonu (Oklar)
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 384; // Kart genişliği (360px) + Boşluk (24px)
    const currentW = container.scrollWidth;
    const oneThird = currentW / 3;

    // Kullanıcı butona bastığında otomatik kaymayı geçici olarak durduruyoruz
    setIsPaused(true);

    const scrollTarget = direction === "left"
      ? container.scrollLeft - cardWidth
      : container.scrollLeft + cardWidth;

    // Pürüzsüz kaydırma yapıyoruz
    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth"
    });

    // Kaydırma işlemi tamamlandıktan sonra (300ms) sonsuz döngü konumunu eşitliyoruz
    setTimeout(() => {
      if (container.scrollLeft < oneThird) {
        // Çok fazla sola gittiyse, ortadaki sete kaydır
        container.scrollLeft = container.scrollLeft + oneThird;
      } else if (container.scrollLeft > oneThird * 2) {
        // Çok fazla sağa gittiyse, ortadaki sete kaydır
        container.scrollLeft = container.scrollLeft - oneThird;
      }
      setIsPaused(false); // Otomatik kaymayı tekrar başlat
    }, 320);
  };

  return (
    <section id="experience" className="py-24 border-t border-border bg-card/10 overflow-hidden" >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider sticky top-24">
              Experience & Labs
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Here are the companies I have worked with, research laboratories I have contributed to,
              and the engineering solutions I have deployed in the field.
              <span className="text-primary font-medium block mt-1 text-sm font-mono">
                ← Hover to pause, click arrows to slide, click cards to visit website →
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Slider Container */}
      <div className="relative w-full py-4 group/slider">
        {/* Sol Ok Butonu (Mouse üzerine gelince görünür) */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 border border-border backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl opacity-0 group-hover/slider:opacity-100 cursor-pointer hidden md:flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Sağ Ok Butonu (Mouse üzerine gelince görünür) */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 border border-border backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl opacity-0 group-hover/slider:opacity-100 cursor-pointer hidden md:flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Sol ve Sağ Sönümleme Efekti (Fade Effect) */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Kayan Bant */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto py-2 px-8 select-none scrollbar-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedExperiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <a
                key={index}
                href={exp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 w-[320px] md:w-[360px] group relative block p-6 rounded-xl border bg-gradient-to-br ${exp.colorClass} backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer`}
              >
                {/* Dışarı Gitme İkonu (Sağ üst köşe) */}
                <div className="absolute top-4 right-4 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
                  <ExternalLink size={14} />
                </div>

                <div className="flex items-start gap-4">
                  {/* Sol Görsel/İkon Bölümü */}
                  <div className="p-2.5 rounded-lg bg-background/90 border border-border group-hover:border-primary/30 transition-all duration-300 flex items-center justify-center w-12 h-12 flex-shrink-0 overflow-hidden">
                    {exp.image ? (
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : IconComponent ? (
                      <IconComponent className={`w-6 h-6 ${exp.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    ) : null}
                  </div>

                  {/* Detaylar */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-semibold tracking-wider uppercase opacity-60 text-muted-foreground group-hover:text-primary transition-colors">
                      {exp.type}
                    </span>

                    <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors truncate">
                      {exp.name}
                    </h3>

                    <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
                      {exp.role}
                    </p>

                    <p className="text-xs text-muted-foreground/80 mt-3 leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div >
    </section >
  );
}
