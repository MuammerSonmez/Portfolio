import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider sticky top-24">
              Contact
            </h2>
          </div>
          
          <div>
            <p className="text-2xl md:text-3xl text-foreground mb-8 max-w-2xl text-balance">
              Interested in working together? Let&apos;s discuss your project.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              I&apos;m currently available for freelance robotics projects. 
              Whether you need consultation, development, or full system integration, 
              I&apos;d love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Email</h3>
                <Link 
                  href="mailto:muammersonmezofficial@gmail.com"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  muammersonmezofficial@gmail.com
                </Link>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Social</h3>
                <div className="flex gap-4">
                  <Link 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </Link>
                  <Link 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </Link>
                  <Link 
                    href="mailto:muammersonmezofficial@gmail.com"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
