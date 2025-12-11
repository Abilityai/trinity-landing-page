import { Github, Play, ArrowRight, Network, Brain, Database, Cpu, Shield, Zap, Mail, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/trinity-logo.svg"
                alt="Trinity Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-secondary">TRINITY</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/how-it-works"
                className="text-text-light hover:text-secondary transition-colors font-medium"
              >
                How It Works
              </Link>
              <a
                href="https://github.com/abilityai/trinity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm py-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Header gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_48.43%_48.43%_at_50%_8.02%,rgba(255,0,0,0.16)_0%,rgba(255,0,0,0)_100%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <img
              src="/trinity-logo.svg"
              alt="Trinity Logo"
              className="w-16 h-16"
            />
            <span className="text-4xl font-bold tracking-tight text-secondary">TRINITY</span>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Deep Agent Orchestration Platform
            </h1>
            <p className="text-xl md:text-2xl text-text-light mb-12 font-medium">
              Orchestrate Claude Code agents running in YOLO mode in Docker containers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/abilityai/trinity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            See Trinity in Action
          </h2>
          <p className="text-text-light text-center mb-10">
            5-minute overview of what Trinity does and why it matters.
          </p>

          {/* YouTube Video Embed */}
          <div className="relative aspect-video bg-secondary-light rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tZ4TN9ySMBE"
              title="Trinity Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-4">
            The Four Pillars of Deep Agency
          </h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Unlike reactive chatbots, Deep Agents operate with deliberative reasoning:
            they decompose goals, persist memory, delegate tasks, and recover autonomously.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Planning */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Planning</h3>
              <p className="text-text-light">
                Task DAGs that persist and recover outside the context window
              </p>
            </div>

            {/* Delegation */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Delegation</h3>
              <p className="text-text-light">
                Orchestrator-Worker pattern with permission boundaries
              </p>
            </div>

            {/* Memory */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Memory</h3>
              <p className="text-text-light">
                State that survives across sessions with memory folding
              </p>
            </div>

            {/* Context */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Context</h3>
              <p className="text-text-light">
                Structured reasoning through High-Order Prompts
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors"
            >
              Learn more about how it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Sovereign Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Your Infrastructure. Your Control.
          </h2>
          <p className="text-xl text-text-light leading-relaxed max-w-3xl mx-auto">
            Sovereign deployment means security plus agility. No vendor lock-in.
            No data leaving your perimeter. Adapt your agent strategy tonight, not next quarter.
          </p>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Open Source. Production Ready.
          </h2>
          <p className="text-xl text-text-light leading-relaxed mb-10 max-w-3xl mx-auto">
            Trinity is free and open source. Deploy in 60 seconds with Docker.
            Enterprise features available for teams that need more.
          </p>
          <a
            href="https://github.com/abilityai/trinity"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - Ability.ai branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/trinity-logo.svg"
                  alt="Trinity Logo"
                  className="w-10 h-10 brightness-0 invert"
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
      </footer>
    </main>
  );
}
