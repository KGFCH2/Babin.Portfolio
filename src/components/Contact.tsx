import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Copy, Check, Clipboard, CheckCircle, XCircle, Mail as MailIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import StudyBackground from "./StudyBackground";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      toast({
        title: "Copied!",
        description: `${fieldName} copied to clipboard`
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Network response was not ok");
        toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        toast({ title: "Send failed", description: "Could not send message. You can also email me directly." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto if no endpoint configured
      const mailto = `mailto:babinbid05@gmail.com?subject=${encodeURIComponent(
        `Portfolio contact from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      window.location.href = mailto;
      // optimistic toast and clear form fields since user was redirected to their mail client
      toast({ title: "Opening mail client", description: "Your mail client will open so you can send the message." });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "babin.bid@stu.adamasuniversity.ac.in",
      link: "mailto:babin.bid@stu.adamasuniversity.ac.in",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Personal Email",
      value: "babinbid05@gmail.com",
      link: "mailto:babinbid05@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9123777679",
      link: "tel:+919123777679",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Belur, Howrah, West Bengal, India",
      link: "https://maps.app.goo.gl/T1Z1B5ThAnNqgBVc6",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 relative section-divider-top scroll-mt-20" ref={ref}>
      <StudyBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-6xl mx-auto space-y-8 md:space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="text-center space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold max-w-[280px] mx-auto md:max-w-none">
              <SectionTitle
                segments={[
                  {
                    text: "Get",
                    className: "text-blue-700 dark:text-[#89D3BD]",
                  },
                  {
                    text: " In",
                    className: "text-blue-700 dark:text-[#89D3BD]",
                  },
                  {
                    text: " Touch",
                    className: "text-blue-700 dark:text-[#89D3BD]",
                  },
                ]}
              />
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div className="h-full flex flex-col gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card
                      className="p-4 md:p-6 bg-card shadow-card hover:shadow-[0_20px_40px_var(--shadow-color)] transition-all duration-300 border-border/50 group cursor-default"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 min-w-0 flex-1">
                          <div className="text-blue-700 dark:text-[#89D3BD] flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            {React.cloneElement(info.icon as React.ReactElement, { size: 28 })}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-foreground text-sm md:text-base">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                target={info.link.startsWith('http') ? "_blank" : undefined}
                                rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="text-muted-foreground hover:text-blue-700 dark:hover:text-[#89D3BD] transition-smooth break-all text-xs md:text-sm font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground break-all text-xs md:text-sm font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                        {/* Copy button for emails and phone */}
                        {info.link && (info.title.includes('Email') || info.title === 'Phone') && (
                          <button
                            onClick={() => copyToClipboard(info.value, info.title)}
                            className="p-2 md:p-3 rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-blue-700/10 dark:hover:bg-[#89D3BD]/10 transition-all focus-visible:opacity-100 min-w-[40px] md:min-w-[48px] min-h-[40px] md:min-h-[48px] flex items-center justify-center flex-shrink-0"
                            title={`Copy ${info.title}`}
                            aria-label={`Copy ${info.title}: ${info.value}`}
                          >
                            {copiedField === info.title ? (
                              <Check className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
                            ) : (
                              <Copy className="h-4 md:h-5 w-4 md:w-5 text-muted-foreground" />
                            )}
                          </button>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-4 md:p-6 bg-card shadow-card border-border/50">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs md:text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Babin Bid"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    aria-required="true"
                    aria-label="Full name"
                    className="border-border bg-background text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs md:text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="babin.bid@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    aria-required="true"
                    aria-label="Email address"
                    className="border-border bg-background text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs md:text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    aria-required="true"
                    aria-label="Message content"
                    rows={4}
                    className="border-border bg-background resize-none text-sm md:text-base"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px var(--shadow-color)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-blue-700 dark:bg-[#89D3BD] text-white dark:text-black font-black shadow-lg hover:opacity-90 hover:shadow-[0_20px_40px_var(--shadow-color)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95 text-sm md:text-base py-2 md:py-3 h-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
