import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown, ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronDown, Code2,
  Database, ExternalLink, Github, GraduationCap, Layers3, Linkedin, Mail,
  Menu, MessageCircle, Moon, Send, Server, Sparkles, Terminal, X, Zap
} from "lucide-react";
import { profile, skills, experiences, projects, certifications, services } from "./data/portfolioData";

const ease = [0.16, 1, 0.3, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href = "#", variant = "primary", onClick }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.12, y: (e.clientY - (r.top + r.height / 2)) * 0.12 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={`btn ${variant === "ghost" ? "btn-ghost" : "btn-primary"}`}
    >
      {children}
    </motion.a>
  );
}

function TiltCard({ children, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setRotate({ x: -y * 8, y: x * 8 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={move}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      style={{ transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <header className="nav-wrap">
      <nav className="nav glass">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>ABHAY<span className="muted-brand">.DEV</span></span>
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="nav-hire" onClick={() => setOpen(false)}>Hire Me <ArrowRight size={15}/></a>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>
    </header>
  );
}

function Background() {
  const dots = Array.from({ length: 48 });
  return (
    <div className="background" aria-hidden="true">
      <div className="grid-bg"/>
      <div className="orb orb-one"/>
      <div className="orb orb-two"/>
      <div className="noise"/>
      {dots.map((_, i) => <span key={i} className="star" style={{ "--i": i }} />)}
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [0, -8]);

  return (
    <section id="home" className="hero section">
      <motion.div className="hero-copy" style={{ y }}>
        <Reveal>
          <div className="eyebrow"><span className="pulse-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>Building <span className="gradient-text">digital</span><br/>experiences that<br/><span className="outline-text">move ideas forward.</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-desc">{profile.intro}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="hero-actions">
            <MagneticButton href="#projects">Explore Projects <ArrowRight size={17}/></MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Let's Talk <MessageCircle size={17}/></MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="hero-meta">
            <span><Code2 size={15}/> React</span>
            <span><Server size={15}/> Node.js</span>
            <span><Database size={15}/> MongoDB</span>
          </div>
        </Reveal>
      </motion.div>

      <motion.div className="hero-visual" style={{ rotate }}>
        <div className="hero-ring ring-a"/>
        <div className="hero-ring ring-b"/>
        <div className="hero-ring ring-c"/>
        <motion.div className="developer-orb" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="orb-core">
            <Terminal size={68}/>
            <div className="orb-code">&lt;DEV /&gt;</div>
          </div>
        </motion.div>
        {[
          ["⚛", "React", "chip chip-react"],
          ["JS", "JavaScript", "chip chip-js"],
          ["DB", "MongoDB", "chip chip-db"],
          ["NX", "Node", "chip chip-node"],
        ].map(([icon, name, cls], i) => (
          <motion.div key={name} className={cls} animate={{ y: [0, i % 2 ? 10 : -10, 0], rotate: [0, i % 2 ? 4 : -4, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}>
            <b>{icon}</b><span>{name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.a href="#about" className="scroll-cue" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
        <ArrowDown size={15}/> SCROLL TO EXPLORE
      </motion.a>
    </section>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title">
      <Reveal><span className="kicker">{kicker}</span></Reveal>
      <Reveal delay={0.06}><h2>{title}</h2></Reveal>
      {text && <Reveal delay={0.12}><p>{text}</p></Reveal>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <SectionTitle kicker="01 / ABOUT" title={<>More than code.<br/><span className="gradient-text">A problem solver.</span></>} text="I combine clean engineering with thoughtful interface design to turn real-world requirements into useful digital products."/>
      <div className="about-grid">
        <Reveal className="about-card glass">
          <div className="avatar-box"><div className="avatar-glow"/><div className="avatar-code">&lt;/&gt;</div></div>
          <div>
            <span className="tiny-label">CURRENT FOCUS</span>
            <h3>MERN Stack Development</h3>
            <p>Building complete applications from responsive React interfaces to Express APIs and MongoDB data models.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          <p className="lead">I'm <strong>Abhay Raj Gaur</strong>, a software developer focused on building modern full-stack web applications.</p>
          <p>I enjoy working across the entire development cycle — planning interfaces, creating reusable components, designing REST APIs, connecting databases and preparing applications for deployment.</p>
          <div className="stats">
            {[["03+", "Featured Projects"], ["10+", "Core Technologies"], ["06+", "Certifications"], ["∞", "Learning Mindset"]].map(([n, l]) => (
              <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle kicker="02 / SKILLS" title={<>My <span className="gradient-text">toolbox.</span></>} text="Technologies I use to turn ideas into maintainable, responsive and connected web applications."/>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 4) * 0.04}>
            <TiltCard className="skill-card glass">
              <div className="skill-top"><span className="skill-icon">{s.icon}</span><span className="skill-group">{s.group}</span></div>
              <h3>{s.name}</h3>
              <div className="skill-bar"><motion.span initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.15 }}/></div>
              <span className="skill-level">{s.level}%</span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section id="projects" className="section projects-section">
      <SectionTitle kicker="03 / PROJECTS" title={<>Selected <span className="gradient-text">work.</span></>} text="A few applications and concepts that demonstrate full-stack development, product thinking and practical problem solving."/>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <TiltCard className="project-card glass">
              <div className={`project-art ${p.gradient}`}>
                <div className="project-art-grid"/>
                <span className="project-icon">{p.icon}</span>
                <span className="project-number">0{i + 1}</span>
                <div className="floating-code">&lt;MERN /&gt;</div>
              </div>
              <div className="project-body">
                <span className="project-subtitle">{p.subtitle}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-actions">
                  <button onClick={() => onOpen(p)} className="text-btn">View Case Study <ArrowRight size={15}/></button>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
                  <a href={p.live} aria-label="Live demo"><ExternalLink size={18}/></a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionTitle kicker="04 / EXPERIENCE" title={<>The road so <span className="gradient-text">far.</span></>} />
      <div className="timeline">
        {experiences.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.1}>
            <div className="timeline-item">
              <div className="timeline-dot"><BriefcaseBusiness size={15}/></div>
              <div className="timeline-card glass">
                <div className="timeline-head"><div><span className="period">{e.period}</span><h3>{e.role}</h3><h4>{e.company}</h4></div><span className="timeline-index">0{i + 1}</span></div>
                <p>{e.description}</p>
                <div className="tags">{e.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesCerts() {
  return (
    <section className="section split-section">
      <div>
        <SectionTitle kicker="05 / SERVICES" title={<>What I <span className="gradient-text">build.</span></>}/>
        <div className="service-list">
          {services.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="service-row glass"><span className="service-num">0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRightIcon/></div>
            </Reveal>
          ))}
        </div>
      </div>
      <div id="certifications">
        <SectionTitle kicker="06 / CERTIFICATIONS" title={<>Proof of <span className="gradient-text">learning.</span></>}/>
        <div className="cert-list">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="cert-card glass"><span className="cert-icon"><GraduationCap size={19}/></span><span>{c}</span><CheckCircle2 size={16}/></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return <span className="arrow-square"><ArrowRight size={16}/></span>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_API_URL || "https://portfolio-bbk1.onrender.com";
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-shell glass">
        <div className="contact-copy">
          <span className="kicker">07 / CONTACT</span>
          <h2>Have an idea?<br/><span className="gradient-text">Let's build it.</span></h2>
          <p>Whether it's a job opportunity, freelance project or a technical collaboration, send a message and let's start a conversation.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name"/></label>
          <label>Email<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com"/></label>
          <label>Subject<input value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="Let's work together"/></label>
          <label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about your idea..."/></label>
          <button className="submit-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent ✓" : "Send Message"} <Send size={16}/>
          </button>
          {status === "error" && <span className="form-error">Could not reach the backend. Check the API URL/server and try again.</span>}
          {status === "success" && <span className="form-success">Thanks! Your message was saved successfully.</span>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="footer-brand"><span className="brand-mark">&lt;/&gt;</span><span>ABHAY.DEV</span></div><span>Designed & built with React, Node.js & lots of curiosity.</span><span>© {new Date().getFullYear()} Abhay Raj Gaur</span></footer>;
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="modal glass" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} onClick={e => e.stopPropagation}>
            <button className="modal-close" onClick={onClose}><X/></button>
            <span className="kicker">CASE STUDY / {project.title}</span>
            <h2>{project.title}</h2>
            <p className="modal-desc">{project.description}</p>
            <div className="modal-grid">
              <div><span className="tiny-label">THE PROBLEM</span><p>{project.details.problem}</p></div>
              <div><span className="tiny-label">THE SOLUTION</span><p>{project.details.solution}</p></div>
              <div><span className="tiny-label">KEY FEATURES</span><ul>{project.details.features.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><span className="tiny-label">ARCHITECTURE</span><p>{project.details.architecture}</p></div>
            </div>
            <div className="tags modal-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [project, setProject] = useState(null);
  const [spot, setSpot] = useState({ x: "50%", y: "20%" });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const move = e => setSpot({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="app" style={{ "--mx": spot.x, "--my": spot.y }}>
      <motion.div className="progress" style={{ scaleX }} />
      <Background/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects onOpen={setProject}/>
        <Experience/>
        <ServicesCerts/>
        <Contact/>
      </main>
      <Footer/>
      <ProjectModal project={project} onClose={() => setProject(null)}/>
    </div>
  );
}