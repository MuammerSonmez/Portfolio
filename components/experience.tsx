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
  iconColor?: string;
}

const experiences: ExperienceItem[] = [
  {
    name: "MilSOFT A.Ş.",
    type: "Company",
    role: "Autonomous Software Engineer Intern",
    description: "Developed autonomous navigation stacks and integrated robotics solutions for defense industry projects.",
    websiteUrl: "https://www.milsoft.com.tr/",
    image: "/milsoft.jpeg",
    iconColor: "text-teal-400",
  },
  {
    name: "Autonomous Systems Lab",
    type: "Research Lab",
    role: "Graduate Researcher",
    description: "Conducted cutting-edge research on multi-agent SLAM and real-time sensor fusion algorithms.",
    websiteUrl: "https://example.com/asl",
    icon: Orbit,
    iconColor: "text-blue-400",
  },
  {
    name: "Cybernetics Corp",
    type: "Company",
    role: "Embedded Systems Engineer",
    description: "Designed high-precision brushless motor drives and firmware for multi-axis robotic arms.",
    websiteUrl: "https://example.com/cybernetics",
    icon: Activity,
    iconColor: "text-purple-400",
  },
  {
    name: "Perception AI",
    type: "Project",
    role: "Lead Perception Architect",
    description: "Built an open-source 3D camera-LiDAR fusion pipeline for off-road mapping.",
    websiteUrl: "https://example.com/perception",
    icon: Eye,
    iconColor: "text-pink-400",
  },
  {
    name: "Bionic Tech Industries",
    type: "Company",
    role: "Robotics Consultant",
    description: "Advised on system architecture, mechanical-electrical integration, and Gazebo simulations.",
    websiteUrl: "https://example.com/bionic",
    icon: Zap,
    iconColor: "text-amber-400",
  },
  {
    name: "Smart Agriculture Lab",
    type: "Research Lab",
    role: "Hardware & Navigation Lead",
    description: "Engineered robust autonomous weeding robot systems with high-precision RTK-GPS guidance.",
    websiteUrl: "https://example.com/agrilab",
    icon: Sprout,
    iconColor: "text-green-400",
  },
  {
    name: "Future Dynamics",
    type: "Company",
    role: "Motion Planning Intern",
    description: "Implemented MoveIt2 custom trajectory planners for picking operations in structured environments.",
    websiteUrl: "https://example.com/futuredynamics",
    icon: Sliders,
    iconColor: "text-violet-400",
  },
];

// CSS marquee için listeyi iki kez çoğaltıyoruz (kesintisiz sonsuz döngü)
const duplicatedExperiences = [...experiences, ...experiences];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border bg-card/10 overflow-hidden">
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
              <span className="text-primary/60 block mt-1 text-sm font-mono">
                ← Hover to pause, click cards to visit website →
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="max-w-7xl mx-auto px-10">
        <div className="marquee-container relative w-full py-8">
          {/* Sol Sönümleme + Bulanıklaşma Efekti */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-48 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, var(--background) 0%, var(--background) 15%, oklch(0.12 0.02 240 / 0.85) 60%, oklch(0.12 0.02 240 / 0.4) 70%, transparent 100%)',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(3px)',
          }} />4
          {/* Sağ Sönümleme + Bulanıklaşma Efekti */}
          <div className="absolute inset-y-0 right-0 w-32 md:w-48 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, var(--background) 0%, var(--background) 15%, oklch(0.12 0.02 240 / 0.85) 60%, oklch(0.12 0.02 240 / 0.4) 70%, transparent 100%)',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(3px)',
          }} />

          {/* CSS Marquee Track */}
          <div className="marquee-track">
            {duplicatedExperiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <a
                  key={index}
                  href={exp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marquee-card group"
                >
                  {/* Dışarı Gitme İkonu (Sağ üst köşe) */}
                  <div className="absolute top-4 right-4 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300">
                    <ExternalLink size={14} />
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Sol Görsel/İkon Bölümü */}
                    <div className="p-2.5 rounded-lg bg-background/60 border border-border/50 group-hover:border-primary/30 transition-all duration-300 flex items-center justify-center w-12 h-12 flex-shrink-0 overflow-hidden">
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
                      <span className="text-[10px] font-mono font-semibold tracking-wider uppercase opacity-50 text-muted-foreground">
                        {exp.type}
                      </span>

                      <h3 className="text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors truncate">
                        {exp.name}
                      </h3>

                      <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
                        {exp.role}
                      </p>

                      <p className="text-xs text-muted-foreground/70 mt-2.5 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
