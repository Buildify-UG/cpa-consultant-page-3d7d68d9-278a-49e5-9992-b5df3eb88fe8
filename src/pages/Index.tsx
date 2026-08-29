import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, BarChart3, DollarSign, Users, Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function CPAConsultant() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CPA Consulting</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-sm hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button size="sm">Schedule Consultation</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Tax & Financial Consulting for Your Business
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert CPA services designed to minimize your tax burden, optimize finances, and accelerate growth. Trusted by 500+ businesses nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Tax Strategy & Planning',
                description: 'Proactive tax planning to minimize liability and maximize deductions throughout the year.'
              },
              {
                icon: DollarSign,
                title: 'Bookkeeping & Accounting',
                description: 'Accurate financial records and reporting to keep your business organized and compliant.'
              },
              {
                icon: Shield,
                title: 'Audit & Compliance',
                description: 'Professional audit services and regulatory compliance to protect your business.'
              },
              {
                icon: Users,
                title: 'Business Consulting',
                description: 'Strategic guidance on growth, efficiency, and financial optimization for your organization.'
              },
              {
                icon: DollarSign,
                title: 'Payroll Services',
                description: 'Complete payroll management, tax withholding, and employee reporting solutions.'
              },
              {
                icon: BarChart3,
                title: 'Financial Analysis',
                description: 'Deep insights into your business performance with actionable recommendations.'
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us</h2>
              <div className="space-y-4">
                {[
                  'CPA-certified with 20+ years of combined experience',
                  'Personalized strategies tailored to your industry',
                  'Proactive approach to tax optimization',
                  'Advanced technology for seamless collaboration',
                  'Transparent pricing with no hidden fees',
                  'Available for ongoing strategic partnership'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="rounded-lg overflow-hidden shadow-lg h-96"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Chen',
                company: 'Tech Startup CEO',
                quote: 'Their tax strategy saved us $180K last year. Absolutely invaluable.'
              },
              {
                name: 'Michael Rodriguez',
                company: 'Small Business Owner',
                quote: 'Finally have a CPA who explains things clearly and actually cares about our growth.'
              },
              {
                name: 'Jennifer Walsh',
                company: 'E-commerce Director',
                quote: 'Professional, responsive, and results-driven. Couldn\'t ask for better partners.'
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Finances?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Schedule a free 30-minute consultation to discuss your business needs.
          </p>
          <Button size="lg" variant="secondary">Book Your Consultation</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">hello@cpaconsult.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-semibold mb-1">Office</p>
              <p className="text-muted-foreground">New York, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/5">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 CPA Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
