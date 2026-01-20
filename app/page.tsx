'use client';

import { Github, Play, ArrowRight, Network, Brain, Database, Cpu, Shield, Zap, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};


export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const pillars = [
    { icon: Shield, title: "Sovereign", desc: "Your infrastructure, your security perimeter. Data never leaves. Full control over every agent." },
    { icon: Network, title: "Process-Driven", desc: "Define workflows with approvals, branching, and notifications. Agents work within processes you control." },
    { icon: Cpu, title: "Governed", desc: "Human approval gates before critical actions. Complete audit trail. Know who did what, when, and why." },
    { icon: Brain, title: "Observable", desc: "Track costs per workflow. Real-time dashboards. Replay any execution. Enterprise-grade monitoring." }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <motion.img
                src="/trinity-logo.svg"
                alt="Trinity Logo"
                className="w-8 h-8"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-bold text-secondary">TRINITY</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-6">
              <Link
                href="/how-it-works"
                className="text-text-light hover:text-secondary transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                How It Works
              </Link>
              <motion.a
                href="https://github.com/abilityai/trinity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-3 sm:px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_48.43%_48.43%_at_50%_8.02%,rgba(255,0,0,0.16)_0%,rgba(255,0,0,0)_100%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="relative max-w-6xl mx-auto px-6 pt-24 pb-24"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sovereign Infrastructure for Autonomous AI Agents
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-text-light mb-12 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Enterprise-grade workflow orchestration on your infrastructure. Define processes. Require approvals. Track every action. Full audit trail.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="https://github.com/abilityai/trinity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.a>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScv4An1NwqmYTmZU-iC7ibCGTiyukKJIYTi3Uxc8H9zR0ED4g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Request a Demo
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated particles/dots in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              See Trinity in Action
            </motion.h2>
            <motion.p
              className="text-text-light text-center mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              5-minute overview of what Trinity does and why it matters.
            </motion.p>

            {/* YouTube Video Embed */}
            <motion.div
              className="relative aspect-video bg-secondary-light rounded-xl overflow-hidden shadow-lg"
              variants={scaleIn}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SWpNphnuPpQ"
                title="Trinity Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Tour Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4"
              variants={fadeInUp}
            >
              Platform Tour
            </motion.h2>
            <motion.p
              className="text-text-light text-center mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A visual walkthrough of Trinity's key capabilities.
            </motion.p>

            <div className="space-y-16">
              {/* Graph View */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Multi-Agent Orchestration</h3>
                  <p className="text-text-light leading-relaxed">
                    Visualize your entire agent ecosystem in real-time. The graph view shows how your system orchestrator coordinates specialized agents, with live status indicators, resource monitoring, and cost tracking at a glance.
                  </p>
                </div>
                <motion.div
                  className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/screenshots/graph-view-collaboration.png"
                    alt="Trinity Graph View showing multi-agent orchestration"
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>

              {/* Process Editor */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/screenshots/process-editor.png"
                    alt="Trinity Process Editor with YAML and visual flow"
                    className="w-full h-auto"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Declarative Workflow Editor</h3>
                  <p className="text-text-light leading-relaxed">
                    Define complex workflows with simple YAML. The split-pane editor shows your process definition alongside an auto-generated visual flow diagram. Add approval gates, error handling, retries, and parallel execution paths.
                  </p>
                </div>
              </motion.div>

              {/* Timeline View */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Timeline & Observability</h3>
                  <p className="text-text-light leading-relaxed">
                    Watch agents collaborate in real-time with the timeline view. See which agents are active, track task handoffs, and understand execution flow. Filter by event type, zoom in on specific time ranges, and replay any execution.
                  </p>
                </div>
                <motion.div
                  className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/screenshots/timeline-collaboration-active.png"
                    alt="Trinity Timeline showing agent collaboration"
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>

              {/* Agent Terminal */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/screenshots/agent-terminal.png"
                    alt="Trinity Agent Terminal with Claude Code"
                    className="w-full h-auto"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Built-in Agent Terminal</h3>
                  <p className="text-text-light leading-relaxed">
                    Connect directly to any running agent with the integrated terminal. Access Claude Code or bash, monitor resource usage, and interact with agents in real-time. Full terminal emulation with session persistence.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4"
              variants={fadeInUp}
            >
              Why Enterprises Choose Sovereign Agent Infrastructure
            </motion.h2>
            <motion.p
              className="text-text-light text-center mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              The security, governance, and control that production AI deployments require.
              No vendor lock-in. No data leaving your perimeter.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{pillar.title}</h3>
                  <p className="text-text-light">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-10"
              variants={fadeInUp}
            >
              <motion.a
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn more about how it works
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Controls Section */}
      <section className="py-20 bg-white/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6"
              variants={scaleIn}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-6"
              variants={fadeInUp}
            >
              Built for Companies That Take AI Seriously
            </motion.h2>
            <motion.p
              className="text-xl text-text-light leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Complete audit trail of every agent action. Human approval gates where decisions matter.
              Cost tracking per workflow. Resource limits per agent. Centralized credential management.
              The controls enterprises require for autonomous AI in production.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6"
              variants={scaleIn}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 0, 0, 0.2)",
                  "0 0 0 20px rgba(255, 0, 0, 0)",
                  "0 0 0 0 rgba(255, 0, 0, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-secondary mb-6"
              variants={fadeInUp}
            >
              Open Source Core. Enterprise Ready.
            </motion.h2>
            <motion.p
              className="text-xl text-text-light leading-relaxed mb-4 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Trinity is free and open source. One command to deploy.
              Workflow orchestration, agent collaboration, state persistence, and audit trails included.
            </motion.p>
            <motion.p
              className="text-lg text-text-light leading-relaxed mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Scale with enterprise features: SSO, RBAC, multi-node clustering, and priority support.
            </motion.p>
            <motion.a
              href="https://github.com/abilityai/trinity"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="py-16 bg-secondary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - Ability.ai branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.img
                  src="/trinity-logo.svg"
                  alt="Trinity Logo"
                  className="w-10 h-10 brightness-0 invert"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="text-xl font-semibold">Trinity</span>
              </div>
              <p className="text-secondary-light text-sm">
                An Ability.ai Open Source Project
              </p>
            </div>

            {/* Center - Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold mb-2">Links</h3>
              <a
                href="https://github.com/abilityai/trinity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://github.com/abilityai/trinity#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Documentation
              </a>
              <Link
                href="/how-it-works"
                className="text-secondary-light hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                How It Works
              </Link>
            </div>

            {/* Right - Contact */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <p className="text-secondary-light mb-1">Eugene Vyborov</p>
              <p className="text-secondary-light text-sm">Founder & CEO</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-secondary-light text-sm">
            <p>&copy; {new Date().getFullYear()} Ability.ai. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
