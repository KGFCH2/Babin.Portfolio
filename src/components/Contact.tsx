import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (endpoint) {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error(err);
          toast({ title: "Send failed", description: "Could not send message. You can also email me directly." });
        });
    } else {
      // Fallback to mailto if no endpoint configured
      const mailto = `mailto:babinbid05@gmail.com?subject=${encodeURIComponent(
        `Portfolio contact from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      window.location.href = mailto;
      // optimistic toast and clear form fields since user was redirected to their mail client
      toast({ title: "Opening mail client", description: "Your mail client will open so you can send the message." });
      setFormData({ name: "", email: "", message: "" });
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
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Howrah, West Bengal, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative section-divider-top" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <SectionTitle
                segments={[
                  {
                    text: "Get",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                  },
                  {
                    text: " In ",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                  },
                  {
                    text: "Touch",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                  },
                ]}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="h-full flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card shadow-card hover:shadow-glow transition-smooth border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-card shadow-card border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
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
                    className="border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
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
                    className="border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
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
                    rows={5}
                    className="border-border bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
