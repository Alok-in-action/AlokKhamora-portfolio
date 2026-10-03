import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { FadeIn } from './components/FadeIn';
import { Magnet } from './components/Magnet';
import { HoverLinkPreview } from './components/ui/hover-link-preview';
import { CertificatesSection } from './components/sections/certificates-section';
import { RecruiterNotification } from './components/RecruiterNotification';
const restaurantClients = [
  {
    name: "Anjushree",
    href: "https://aroma-menu.netlify.app/",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Faroma-menu.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Restaurant interior preview for Anjushree",
  },
  {
    name: "Monto",
    href: "https://menu-monto.netlify.app/",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Fmenu-monto.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Restaurant dining preview for Monto",
  },
  {
    name: "Madhuban",
    href: "https://madhuban.netlify.app/",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Fmadhuban.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Indian restaurant preview for Madhuban",
  },
  {
    name: "Bombay Darbar Restaurant",
    href: "https://bombaydarbarhotel.netlify.app/",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Fbombaydarbarhotel.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Indian food preview for Bombay Darbar Restaurant",
  },
  {
    name: "Makes'D",
    href: "https://makesd.in",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Fmakesd.in&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Food and restaurant preview for Makes'D",
  },
  {
    name: "Cafe 950",
    href: "https://cafeninefifty.netlify.app/",
    previewImage: "https://api.microlink.io?url=https%3A%2F%2Fcafeninefifty.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageAlt: "Cafe interior preview for Cafe 950",
  },
];

const ContactButton = () => (
  <a
    href="mailto:itsalokkhamora@gmail.com"
    className="inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-transform hover:scale-105"
    style={{
      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      outline: '2px solid white',
      outlineOffset: '-3px',
      boxShadow: 'inset 4px 4px 12px #7721B1, 0px 4px 4px rgba(181, 1, 167, 0.25)',
    }}
  >
    Contact Me
  </a>
);

const LiveProjectButton = ({ href, label = "View Project" }: { href: string; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest px-6 py-2 hover:bg-[rgba(215,226,234,0.1)] transition-colors text-sm"
  >
    {label}
    <ExternalLink size={16} />
  </a>
);

function App() {
  const aboutSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start start", "end end"]
  });

  const aboutText = "I am Alok Khamora, an Electrical Engineering student, IIT Madras data science learner, researcher, builder, and entrepreneur. I enjoy turning ideas into useful products by combining engineering fundamentals, artificial intelligence, software, hardware, data, and rapid prototyping.";

  const capabilities = [
    {
      title: "AI & Data",
      description: "Exploring machine learning, generative AI, computer vision, data science, business analytics, and AI-assisted product development.",
    },
    {
      title: "Software & Web",
      description: "Building responsive web applications, SaaS products, dashboards, digital menus, APIs, and production-ready client websites.",
    },
    {
      title: "Embedded Systems & IoT",
      description: "Working with Arduino, ESP32, Raspberry Pi, sensors, motors, relays, automation workflows, and hardware-software integration.",
    },
    {
      title: "Digital Manufacturing",
      description: "Hands-on experience with CNC routers, data acquisition, 3D scanning, CAD, computer vision, resin 3D printing, and rapid prototyping.",
    },
    {
      title: "Product & Entrepreneurship",
      description: "Turning technical ideas into practical products, leading teams, coordinating stakeholders, and building ventures such as ZaayKaTech.",
    }
  ];

  const experiences = [
    {
      role: "Summer Research Intern",
      org: "NIT Kurukshetra",
      date: "20 May 2026 — 21 July 2026",
      desc: "Worked on data acquisition and process monitoring for CNC machines using Arduino, ESP32, and Raspberry Pi. Also worked on CNC control, 3D scanning, CAD, computer vision, structural analysis, digital manufacturing, and 3D printing."
    },
    {
      role: "Founder",
      org: "ZaayKaTech",
      date: "2026 — Present",
      desc: "Founded a digital solutions venture helping restaurants and local businesses build digital menus, websites, and online presence. ZaayKaTech has onboarded 10+ restaurants and generated ₹50,000+ in annual revenue.",
      link: "https://zaaykatech.com"
    },
    {
      role: "Core Team Member",
      org: "IIT Madras Entrepreneurship Cell",
      date: "2025 — Present",
      desc: "Contributing to event planning, hackathon management, judge outreach, academic event organization, student engagement, and entrepreneurship ecosystem activities."
    },
    {
      role: "Event Head",
      org: "RopeWalker, IIT Madras Paradox'26",
      date: "2026",
      desc: "Led complete event planning and execution, including permissions, rules, guest coordination, participant management, logistics, stakeholder communication, and on-ground operations. The event received 500 registrations and had 200+ participants."
    }
  ];

  const { scrollY } = useScroll();
  const marqueeY1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const marqueeY2 = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="bg-background text-primaryText min-h-screen overflow-x-clip">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col relative px-6 md:px-10">
        <nav className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-8 w-full z-10 gap-4 sm:gap-0">
          <div className="font-bold text-xl uppercase tracking-wider">AK</div>
          <div className="flex gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider">
            {['About', 'Work', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition duration-200">
                {item}
              </a>
            ))}
          </div>
        </nav>
        
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="hero-heading font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] whitespace-nowrap"
            >
              Engineer. Builder.
              <br />
              Entrepreneur.
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 font-light uppercase tracking-wide leading-snug max-w-[420px] text-primaryText text-[clamp(0.9rem,1.5vw,1.1rem)]"
          >
            An Electrical Engineering student and IIT Madras data science learner building real-world products across AI, software, embedded systems, digital manufacturing, and entrepreneurship.
          </motion.p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
            {[
              { val: "10+", label: "Restaurants onboarded" },
              { val: "₹50K+", label: "Annual venture revenue" },
              { val: "500+", label: "Event registrations" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.5 + (i * 0.1)} className="border-l border-borderColor pl-4 hover:border-accentPurple transition-colors">
                <div className="font-bold text-2xl">{stat.val}</div>
                <div className="text-sm text-mutedText uppercase tracking-wider">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap gap-6 items-center">
            <Magnet>
              <ContactButton />
            </Magnet>
            <a href="#work" className="uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
              Explore My Work →
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 overflow-hidden bg-background border-y border-borderColor">
        <div className="flex flex-col gap-4">
          <motion.div style={{ x: marqueeY1 }} className="flex whitespace-nowrap will-change-transform">
            {Array.from({ length: 4 }).map((_, i) => (
              <h2 key={i} className="text-[clamp(4rem,10vw,8rem)] font-black uppercase tracking-tight mr-8 text-transparent" style={{ WebkitTextStroke: '2px #D7E2EA' }}>
                ENGINEERING • AI & DATA • SOFTWARE •
              </h2>
            ))}
          </motion.div>
          <motion.div style={{ x: marqueeY2 }} className="flex whitespace-nowrap will-change-transform ml-[-50vw]">
            {Array.from({ length: 4 }).map((_, i) => (
              <h2 key={i} className="text-[clamp(4rem,10vw,8rem)] font-black uppercase tracking-tight mr-8">
                HARDWARE • DIGITAL MANUFACTURING • ENTREPRENEURSHIP • RESEARCH •
              </h2>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSectionRef} className="h-[250vh] relative">
        <div className="sticky top-0 h-screen w-full px-5 sm:px-8 md:px-10 flex flex-col justify-center items-center overflow-hidden">
          {/* Abstract decor */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at center, #D7E2EA 1px, transparent 1px)', backgroundSize: '50px 50px' }}
          />
          
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
              About Me
            </h2>
          </FadeIn>
          
          <div className="mt-16 sm:mt-24 max-w-[720px]">
            <p className="text-center font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]">
              {aboutText.split('').map((char, i) => {
                // Map the opacity animation to happen mostly in the middle of the scroll (e.g. 0.2 to 0.8)
                const start = 0.2 + (i / aboutText.length) * 0.6;
                const end = start + (0.6 / aboutText.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                return (
                  <motion.span key={i} style={{ opacity }}>
                    {char}
                  </motion.span>
                );
              })}
            </p>
          </div>
          
          <div className="mt-16 sm:mt-20 md:mt-24">
            <Magnet>
              <ContactButton />
            </Magnet>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-whiteBg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-background">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Capabilities
        </h2>
        
        <div className="max-w-5xl mx-auto flex flex-col">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row border-b border-background/20 py-8 sm:py-10 md:py-12 items-start md:items-center gap-6 md:gap-12">
                <div className="text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] font-black leading-none">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase mb-4">{cap.title}</h3>
                  <p className="text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 max-w-[42rem]">
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-background rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-10">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
          {experiences.map((exp, i) => (
            <FadeIn key={i}>
              <div className="flex flex-col gap-4 border border-borderColor p-6 sm:p-10 rounded-[30px] hover:border-accentPurple transition-colors bg-[#0C0C0C]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                    <div className="text-accentPurple font-medium text-lg">{exp.org}</div>
                  </div>
                  <div className="text-sm uppercase tracking-wider text-mutedText border border-borderColor rounded-full px-4 py-1 w-fit">
                    {exp.date}
                  </div>
                </div>
                <p className="text-mutedText leading-relaxed mt-2">{exp.desc}</p>
                {exp.link && (
                  <div className="mt-4">
                    <LiveProjectButton href={exp.link} label="Visit Website" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Projects Section */}
      <section id="work" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 relative z-20 border-t border-borderColor/50">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-20 sm:mb-32">
          Selected Work
        </h2>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-32">
          {/* Card 1 */}
          <div className="sticky top-24 md:top-32 h-[85vh] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 flex flex-col shadow-2xl" style={{ transformOrigin: 'top center' }}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2">ZaayKaTech</h3>
                <div className="text-mutedText uppercase tracking-wider">Entrepreneurship / SaaS</div>
              </div>
              <LiveProjectButton href="https://zaaykatech.com" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                A digital solutions venture helping restaurants and local businesses launch digital menus, websites, and online experiences.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {["10+ restaurants onboarded", "₹50,000+ annual revenue", "Production client websites"].map(t => (
                  <span key={t} className="px-4 py-2 border border-borderColor rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky top-[112px] md:top-[160px] h-[85vh] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 flex flex-col shadow-2xl" style={{ transformOrigin: 'top center' }}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2">Restaurant Menus</h3>
                <div className="text-mutedText uppercase tracking-wider">Web Development / Client Work</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-8">
                A collection of deployed restaurant websites and digital menu experiences developed through ZaayKaTech.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurantClients.map((client) => (
                  <li
                    key={client.name}
                    className="rounded-2xl border border-[#D7E2EA]/15 p-5 transition-colors hover:border-[#D7E2EA]/35"
                  >
                    <HoverLinkPreview
                      href={client.href}
                      previewImage={client.previewImage}
                      imageAlt={client.imageAlt}
                    >
                      <span className="inline-flex items-center gap-2 font-medium uppercase tracking-wide">
                        {client.name}
                        <ExternalLink className="h-4 w-4 shrink-0" />
                      </span>
                    </HoverLinkPreview>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky top-[140px] md:top-[188px] h-[85vh] w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 flex flex-col shadow-2xl" style={{ transformOrigin: 'top center' }}>
             <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2 leading-tight">CNC Data Acquisition</h3>
                <div className="text-mutedText uppercase tracking-wider">Research / Embedded Systems</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                A research project focused on collecting and analyzing CNC machine data using embedded hardware, process monitoring workflows, and hardware-software integration.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {["Arduino", "ESP32", "Raspberry Pi", "CNC", "Data Acquisition", "Embedded Systems"].map(t => (
                  <span key={t} className="px-4 py-2 border border-borderColor rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-whiteBg text-[#0C0C0C] py-20 px-5 sm:px-10 rounded-t-[40px] sm:rounded-t-[60px] relative z-30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black uppercase text-[clamp(2.5rem,8vw,100px)] mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Top 600 out of 25,000 registrations — IIT Bombay Eureka! 2024",
              "Junior Child Scientist — 28th National Children’s Science Congress, Madhya Pradesh State Level, 2020",
              "Selected for National Challenge — IYIIC Regional Challenge 2021",
              "Certificate of Excellence — Hackeclipse 2025",
              "Campus Ambassador — IIT Indore FLUXUS 2025",
              "Startup Expo Participant — IIT Guwahati UDGAM 2026",
              "Event Head — RopeWalker, IIT Madras Paradox'26",
              "500 registrations and 200+ participants managed at RopeWalker"
            ].map((ach, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 border border-black/10 rounded-2xl hover:shadow-lg transition-shadow bg-black/5">
                  <p className="font-medium text-lg leading-snug">{ach}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0C0C0C] min-h-[80vh] flex flex-col items-center justify-center py-20 px-5 sm:px-10 text-center relative z-40 rounded-t-[40px] sm:rounded-t-[60px]">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,10vw,120px)] leading-none tracking-tight mb-8">
          Let’s Build<br/>Something Useful.
        </h2>
        <p className="text-xl md:text-2xl text-mutedText max-w-2xl mb-12 font-light">
          Have an idea, project, collaboration, or problem worth solving? Let’s connect.
        </p>
        
        <Magnet>
          <a
            href="mailto:itsalokkhamora@gmail.com"
            className="inline-flex items-center justify-center rounded-full text-white font-bold uppercase tracking-widest px-10 py-5 text-xl hover:scale-105 transition-transform"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              outline: '2px solid white',
              outlineOffset: '-3px',
              boxShadow: 'inset 4px 4px 12px #7721B1, 0px 4px 4px rgba(181, 1, 167, 0.25)',
            }}
          >
            Email Me
          </a>
        </Magnet>

        <div className="flex gap-6 mt-16 text-mutedText">
          <a href="https://www.linkedin.com/in/alok-khamora" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-4 rounded-full border border-borderColor hover:border-white">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Alok-in-action" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-4 rounded-full border border-borderColor hover:border-white">
            <Github size={24} />
          </a>
          <a href="https://wa.me/917000703701" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-4 rounded-full border border-borderColor hover:border-white">
            <Mail size={24} /> {/* Assuming Mail as fallback if WA icon isn't standard in lucide */}
          </a>
          <a href="https://instagram.com/alokkhamora" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-4 rounded-full border border-borderColor hover:border-white">
            <Instagram size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-10 w-full text-center text-sm text-mutedText uppercase tracking-widest">
          Alok Khamora — Engineer - Builder - Entrepreneur
        </div>
      </section>
      
      <RecruiterNotification />
    </div>
  );
}

export default App;
