// import { useState } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ScrollReveal } from "@/components/ui/scroll-reveal";
// import { GlassCard } from "@/components/ui/glass-card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { HeadphonesIcon } from "lucide-react";


// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Call Us",
//     details: ["+966 55 646 8481"],
//     action: "tel:+966556468481",
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     details: ["info@hbr-world.com"],
//     action: "mailto:info@hbr-world.com",
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     details: ["support@hbr-world.com"],
//     action: "mailto:info@hbr-world.com",
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     details: ["Sun - Thu: 8:00 AM - 6:00 PM", "Fri - Sat: Closed"],
//     action: null,
//   },
// ];

// const Contact = () => {
//   const { t } = useLanguage();
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast({
//       title: t("Message Sent!"),
//       description: t("Thank you for contacting us. We'll get back to you within 24 hours."),
//     });

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-3xl mx-auto">
//                 <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Contact Us")}</span>
//                 <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
//                   {t("Let's Connect")}
//                 </h1>
//                 <p className="text-muted-foreground text-lg">
//                   {t("Have a project in mind? Get in touch with us today for a free consultation")}
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Contact Info Cards */}
//         <section className="py-12 bg-background">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {contactInfo.map((info, index) => (
//                 <ScrollReveal key={info.title} delay={index * 100}>
//                   <GlassCard className="p-6 text-center h-full">
//                     <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sky-medium to-navy-light flex items-center justify-center mb-4">
//                       <info.icon className="w-7 h-7 text-primary-foreground" />
//                     </div>
//                     <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t(info.title)}</h3>
//                     <div className="space-y-1">
//                       {info.details.map((detail) => (
//                         <p key={detail} className="text-muted-foreground text-sm">
//                           {t(detail)}
//                         </p>
//                       ))}
//                     </div>
//                   </GlassCard>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Form & Quick Actions */}
//         <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Form */}
//               <ScrollReveal direction="left">
//                 <GlassCard className="p-8">
//                   <h2 className="font-display font-bold text-2xl text-foreground mb-6">{t("Send Us a Message")}</h2>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-foreground mb-2">{t("Full Name *")}</label>
//                         <Input
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder={t("Mohammed")}
//                           required
//                           className="bg-background/50"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-foreground mb-2">{t("Email Address *")}</label>
//                         <Input
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder={t("mohammed@example.com")}
//                           required
//                           className="bg-background/50"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-foreground mb-2">{t("Phone Number")}</label>
//                         <Input
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder={t("+966 50 123 4567")}
//                           className="bg-background/50"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-foreground mb-2">{t("Subject *")}</label>
//                         <Input
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           placeholder={t("Project Inquiry")}
//                           required
//                           className="bg-background/50"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">{t("Message *")}</label>
//                       <Textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder={t("Tell us about your project...")}
//                         rows={5}
//                         required
//                         className="bg-background/50"
//                       />
//                     </div>
//                     <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
//                       {isSubmitting ? t("Sending...") : t("Send Message")}
//                       <Send className="w-5 h-5 ml-2" />
//                     </Button>
//                   </form>
//                 </GlassCard>
//               </ScrollReveal>

//               {/* Quick Actions & Map */}
//               <ScrollReveal direction="right">
//                 <div className="space-y-6">
//                   {/* Quick Action Buttons */}
//                   <GlassCard className="p-6">
//                     <h3 className="font-display font-semibold text-lg text-foreground mb-4">{t("Quick Contact")}</h3>
//                     <div className="grid grid-cols-3 gap-4">
//                       <a
//                         href="https://wa.me/966556468481"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors group"
//                       >
//                         <MessageCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
//                         <span className="text-sm font-medium text-foreground">{t("WhatsApp")}</span>
//                       </a>
//                       <a
//                         href="tel:+966556468481"
//                         className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
//                       >
//                         <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
//                         <span className="text-sm font-medium text-foreground">{t("Call Now")}</span>
//                       </a>
//                       <a
//                         href="mailto:info@hbr-world.com"
//                         className="flex flex-col items-center gap-2 p-4 rounded-xl bg-sky-medium/10 hover:bg-sky-medium/20 transition-colors group"
//                       >
//                         <Mail className="w-8 h-8 text-sky-medium group-hover:scale-110 transition-transform" />
//                         <span className="text-sm font-medium text-foreground">{t("Email")}</span>
//                       </a>
//                     </div>
//                   </GlassCard>

//                   {/* Map Placeholder */}
//                   <GlassCard className="overflow-hidden" id="map">
//   <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-secondary/30 relative flex items-center justify-center p-6">
//     {/* Get Connected Design */}
//     <div className="text-center space-y-4">
//       {/* Icon */}
//       <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-light to-primary flex items-center justify-center mx-auto shadow-lg">
//         <HeadphonesIcon className="w-10 h-10 text-white animate-pulse" />
//       </div>

//       {/* Text */}
//       <h3 className="text-2xl font-display font-bold text-foreground">
//         {t("Get Connected")}
//       </h3>
//       <p className="text-muted-foreground max-w-xs mx-auto">
//         {t("Reach out to us via email or phone to collaborate or inquire about our services.")}
//       </p>

//       {/* Optional Buttons */}
//       <div className="flex justify-center gap-4 mt-4">
//         <a
//           href="mailto:info@hbr-world.com"
//           className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg transition"
//         >
//           Email Us
//         </a>
//         <a
//           href="tel:+966123456789"
//           className="px-4 py-2 bg-sky-light text-white rounded-lg shadow hover:shadow-lg transition"
//         >
//           Call Us
//         </a>
//       </div>
//     </div>

//     {/* Optional Grid Overlay for style */}
//     <div
//       className="absolute inset-0 opacity-5"
//       style={{
//         backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
//         backgroundSize: "40px 40px",
//       }}
//     />
//   </div>
// </GlassCard>

//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;





import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeadphonesIcon } from "lucide-react";
import { MapPin } from "lucide-react"; 

const contactInfo = [
  {
    icon: Phone,
    title: "contact.contactInfo.call",
    details: ["+966 55 646 8481"],
    action: "tel:+966556468481",
  },
  {
    icon: Mail,
    title: "contact.contactInfo.email1",
    details: ["info@hbr-world.com"],
    action: "mailto:info@hbr-world.com",
  },
  {
    icon: MapPin,
    title: "contact.contactInfo.location",
    details: [
      "contact.contactInfo.locationDetails.line1"
    ],
    action: "https://maps.google.com/?q=Riyadh, Saudi Arabia",
  },
  {
    icon: Clock,
    title: "contact.contactInfo.hours",
    details: [
      "contact.contactInfo.hoursDetails.weekdays",
      "contact.contactInfo.hoursDetails.weekend",
    ],
    action: null,
  },
];
const whatsappMessage = encodeURIComponent(
  "Hello Dear Abu Hamdan,\n\nI hope this message finds you well. I am interested in your services and would like to connect with you for further discussion.\n\nPlease let me know a convenient time to talk.\n\nKind regards."
);



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
      title: t("contact.toast.successTitle"),
      description: t("contact.toast.successDesc"),
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {t("contact.hero.badge")}
                </span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t("contact.hero.title")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t("contact.hero.description")}
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
                <ScrollReveal key={index} delay={index * 100}>
                  <GlassCard className="p-6 text-center h-full">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sky-medium to-navy-light flex items-center justify-center mb-4">
                      <info.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {t(info.title)}
                    </h3>
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
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    {t("contact.form.sendMessage")}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.form.name")}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.namePlaceholder")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.form.email")}
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.form.emailPlaceholder")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.form.phone")}
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("contact.form.phonePlaceholder")}
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("contact.form.subject")}
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t("contact.form.subjectPlaceholder")}
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.messagePlaceholder")}
                        rows={5}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("contact.form.sending")
                        : t("contact.form.sendMessage")}
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
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                      {t("contact.quickActions.title")}
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                    <a
  href={`https://wa.me/966556468481?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors group"
>
  <MessageCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
  <span className="text-sm font-medium text-foreground">
    {t("contact.quickActions.whatsapp")}
  </span>
</a>

                      <a
                        href="tel:+966556468481"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
                      >
                        <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">
                          {t("contact.quickActions.call")}
                        </span>
                      </a>
                      <a
                        href="mailto:info@hbr-world.com"
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-sky-medium/10 hover:bg-sky-medium/20 transition-colors group"
                      >
                        <Mail className="w-8 h-8 text-sky-medium group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">
                          {t("contact.quickActions.email")}
                        </span>
                      </a>
                    </div>
                  </GlassCard>

                  {/* Map Placeholder */}
                  {/* Google Map */}
{/* Google Map */}
<GlassCard className="overflow-hidden" id="map">
  <div className="w-full h-[400px]">
    <iframe
      title="Hara Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.6895188641206!2d46.713502299999995!3d24.6688132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0572f462ef6b%3A0xd16e5a0b23a5cdc8!2sHara%20Office!5e0!3m2!1sen!2sin!4v1765728965941!5m2!1sen!2sin"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
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
