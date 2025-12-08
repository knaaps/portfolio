import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/knaaps', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vinayak-s-937b9126a', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vinayak4x@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-accent mb-2">VS</div>
            <p className="text-sm text-muted">
              Building secure, scalable solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-muted hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted flex items-center gap-1.5">
              <span>© 2025 Vinayak Santhosh</span>
            </p>
            <p className="text-xs text-muted mt-1 flex items-center gap-1">
              Built with <Heart size={12} className="text-accent fill-accent" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}