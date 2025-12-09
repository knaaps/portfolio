import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'vinayak4x@gmail.com', 
      href: 'mailto:vinayak4x@gmail.com' 
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '(+91) 96334 29269', 
      href: 'tel:+919633429269' 
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Kottayam, Kerala',
      href: null
    },
  ];

  return (
    <div className="space-y-12 max-w-xl mx-auto animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
        <p className="text-muted">
          Open to discussing new projects, opportunities, and collaborations.
        </p>
      </div>
      
      <div className="space-y-3">
        {contacts.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors group">
            <item.icon size={20} className="text-muted group-hover:text-primary transition-colors" />
            <div className="flex-1">
              <div className="text-xs text-muted uppercase tracking-wide mb-1">
                {item.label}
              </div>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <a 
        href="mailto:vinayak4x@gmail.com"
        className="block w-full text-center py-3 bg-primary text-background rounded-lg hover:bg-green-dark transition-colors font-medium"
      >
        Send Message
      </a>
    </div>
  );
}