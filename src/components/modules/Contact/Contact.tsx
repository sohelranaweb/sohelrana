"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Starry background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.006 + 0.002,
      offset: Math.random() * Math.PI * 2,
    }));

    const shootingStars: {
      x: number;
      y: number;
      len: number;
      speed: number;
      alpha: number;
      active: boolean;
    }[] = Array.from({ length: 4 }, () => ({
      x: 0,
      y: 0,
      len: 0,
      speed: 0,
      alpha: 0,
      active: false,
    }));

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.alpha = 0.3 + 0.7 * Math.abs(Math.sin(frame * s.speed + s.offset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });

      shootingStars.forEach((ss) => {
        if (!ss.active) {
          if (Math.random() < 0.003) {
            ss.x = Math.random() * canvas.width * 0.7;
            ss.y = Math.random() * canvas.height * 0.4;
            ss.len = Math.random() * 120 + 60;
            ss.speed = Math.random() * 8 + 5;
            ss.alpha = 1;
            ss.active = true;
          }
        } else {
          const angle = Math.PI / 5.5;
          ss.x += Math.cos(angle) * ss.speed;
          ss.y += Math.sin(angle) * ss.speed;
          ss.alpha -= 0.018;
          if (ss.alpha <= 0) ss.active = false;

          const grad = ctx.createLinearGradient(
            ss.x,
            ss.y,
            ss.x - Math.cos(angle) * ss.len,
            ss.y - Math.sin(angle) * ss.len,
          );
          grad.addColorStop(0, `rgba(255,255,255,${ss.alpha})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(
            ss.x - Math.cos(angle) * ss.len,
            ss.y - Math.sin(angle) * ss.len,
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const contactCards = [
    {
      icon: <Mail className="w-7 h-7" strokeWidth={1.5} />,
      label: "Email",
      value: "obidyhasan@gmail.com",
      href: "mailto:obidyhasan@gmail.com",
    },
    {
      icon: <Phone className="w-7 h-7" strokeWidth={1.5} />,
      label: "Number",
      value: "+8801625319213",
      href: "tel:+8801625319213",
    },
    {
      icon: <Linkedin className="w-7 h-7" strokeWidth={1.5} />,
      label: "Linked In",
      value: "obidyhasan",
      href: "https://linkedin.com/in/obidyhasan",
      underline: true,
    },
    {
      icon: <MapPin className="w-7 h-7" strokeWidth={1.5} />,
      label: "Address",
      value: "Khulna, Bangladesh",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Starry canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Subtle glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[250px] bg-blue-900/10 rounded-full blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - 2x2 contact cards grid */}
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-700/60 border border-gray-700/60 rounded-sm">
            {contactCards.map((card, i) => (
              <a
                key={card.label}
                href={card.href ?? undefined}
                className={`flex flex-col items-center justify-center gap-3 py-10 px-6 text-center transition-all duration-300 hover:bg-white/5 ${
                  card.href ? "cursor-pointer" : "cursor-default"
                } ${i === 0 ? "rounded-tl-sm" : ""} ${i === 1 ? "rounded-tr-sm" : ""} ${i === 2 ? "rounded-bl-sm" : ""} ${i === 3 ? "rounded-br-sm" : ""}`}
              >
                <span className="text-white">{card.icon}</span>
                <div>
                  <p className="text-white font-semibold text-base mb-1">
                    {card.label}
                  </p>
                  <p
                    className={`text-gray-400 text-sm ${card.underline ? "underline underline-offset-2" : ""}`}
                  >
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right - Form */}
          <div className="flex flex-col gap-4">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="w-full bg-[#111111] border border-gray-700/80 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-[#161616] transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="enter email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    className="w-full bg-[#111111] border border-gray-700/80 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-[#161616] transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="enter message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    className="w-full bg-[#111111] border border-gray-700/80 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-[#161616] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Send button */}
                <div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-8 py-3 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
