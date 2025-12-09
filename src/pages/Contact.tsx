import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, Send, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeadphonesIcon } from "lucide-react";


const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+966 55 646 8481"],
    action: "tel:+966556468481",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@hbr-world.com"],
    action: "mailto:info@hbr-world.com",
  },
  {
    icon: MapPin,
    title: "HBR-World Office, Riyadh, Saudi Arabia",
    details: ["Al Olaya District, Riyadh"],
    action: "https://www.google.com/maps/place/Hara+Office/@24.6688132,46.7135023,17z",
  },
  
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Sun - Thu: 8:00 AM - 6:00 PM", "Fri - Sat: Closed"],
    action: null,
  },
];

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t("Message Sent!"),
      description: t("Thank you for contacting us. We'll get back to you within 24 hours."),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Contact Us")}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t("Let's Connect")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t("Have a project in mind? Get in touch with us today for a free consultation")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.title} delay={index * 100}>
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sky-medium to-navy-light flex items-center justify-center mb-4">
                      <info.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t(info.title)}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {t(detail)}
                        </p>
                      ))}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Actions */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <ScrollReveal direction="left">
                <GlassCard className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">{t("Send Us a Message")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{t("Full Name *")}</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("Mohammed")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{t("Email Address *")}</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("mohammed@example.com")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{t("Phone Number")}</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("+966 50 123 4567")}
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{t("Subject *")}</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t("Project Inquiry")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("Message *")}</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("Tell us about your project...")}
                        rows={5}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t("Sending...") : t("Send Message")}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </GlassCard>
              </ScrollReveal>

              {/* Quick Actions & Map */}
              <ScrollReveal direction="right">
                <div className="space-y-6">
                  {/* Quick Action Buttons */}
                  <GlassCard className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">{t("Quick Contact")}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <a
                        href="https://wa.me/966556468481"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors group"
                      >
                        <MessageCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{t("WhatsApp")}</span>
                      </a>
                      <a
                        href="tel:+966556468481"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
                      >
                        <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{t("Call Now")}</span>
                      </a>
                      <a
                        href="mailto:info@hbr-world.com"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-sky-medium/10 hover:bg-sky-medium/20 transition-colors group"
                      >
                        <Mail className="w-8 h-8 text-sky-medium group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{t("Email")}</span>
                      </a>
                    </div>
                  </GlassCard>

                  {/* Map Placeholder */}
                  {/* Map ONLY – Full size, no text */}
<GlassCard className="overflow-hidden" id="map">
  <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden relative">

  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.6895188641206!2d46.713502299999995!3d24.6688132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0572f462ef6b%3A0xd16e5a0b23a5cdc8!2sHara%20Office!5e0!3m2!1sen!2sin!4v1765288578242!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


    {/* Optional light grid overlay (keeps your theme) */}
    <div
      className="absolute inset-0 pointer-events-none opacity-5"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
</GlassCard>


                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
