import {
  Github,
  Play,
  ArrowRight,
  ArrowLeft,
  Network,
  Brain,
  Database,
  Cpu,
  Shield,
  Zap,
  Mail,
  ExternalLink,
  Container,
  Terminal,
  Eye,
  Clock,
  FileText,
  Activity,
  Lock,
  CheckCircle,
  ChevronDown,
  Layers,
  GitBranch,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
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
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-text-light hover:text-secondary transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
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
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_48.43%_48.43%_at_50%_8.02%,rgba(255,0,0,0.12)_0%,rgba(255,0,0,0)_100%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              How Trinity Works
            </h1>
            <p className="text-xl text-text-light mb-8 max-w-3xl mx-auto">
              Deploy autonomous AI agents on your infrastructure in minutes.
              Agents collaborate, state persists to GitHub, you control everything.
            </p>
          </div>
        </div>
      </section>

      {/* What is Trinity */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              What is Trinity?
            </h2>
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              Trinity is sovereign infrastructure for autonomous AI agents. Deploy Claude Code agents in isolated
              Docker containers, let them discover and collaborate with each other via MCP, persist all state to
              GitHub, and monitor everything through a real-time dashboard. Go from local agent to production
              autonomous system in minutes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Terminal, text: "Web terminal + SSH access to any agent" },
                { icon: Container, text: "Isolated Docker container per agent" },
                { icon: Network, text: "Agents discover and collaborate via MCP" },
                { icon: Database, text: "State persists to GitHub - nothing lost" },
                { icon: Eye, text: "Full observability with replay timeline" },
                { icon: Shield, text: "Your infrastructure, your roadmap" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Trinity implements the infrastructure required for truly autonomous AI systems.
              Agents that plan, collaborate, remember, and operate continuously—all under your control.
            </p>
          </div>

          <div className="space-y-12">
            {/* Capability 1: Collaboration */}
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-secondary">Agents That Collaborate</h3>
                  </div>
                  <p className="text-text-light mb-6">
                    Agents discover each other through MCP, delegate tasks, and share results automatically.
                    Build workflows where specialists work together without custom orchestration code.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "MCP Server", desc: "21 tools for agent discovery, communication, and coordination" },
                      { title: "Permission Controls", desc: "Fine-grained control over which agents can talk to each other" },
                      { title: "Parallel Execution", desc: "Spawn tasks across multiple agents simultaneously" },
                      { title: "Agent Discovery", desc: "Agents find each other's capabilities programmatically" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-secondary">{item.title}:</span>
                          <span className="text-text-light text-sm"> {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 2: State Persistence */}
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-secondary">State That Never Dies</h3>
                  </div>
                  <p className="text-text-light mb-6">
                    Every conversation, file, and decision syncs to GitHub. Delete a container? State survives.
                    Need to roll back? One command. This is the holy grail of agent state management.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "GitHub Sync", desc: "All agent state version-controlled automatically" },
                      { title: "SQLite Persistence", desc: "Conversations survive container restarts" },
                      { title: "Instant Rollback", desc: "Restore any agent to any previous state" },
                      { title: "Full History", desc: "Complete audit trail of every decision" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-secondary">{item.title}:</span>
                          <span className="text-text-light text-sm"> {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 3: Observability */}
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-secondary">Complete Observability</h3>
                  </div>
                  <p className="text-text-light mb-6">
                    See everything agents are doing in real-time. Replay timeline lets you scrub through
                    history. Know exactly what happened, when, and why.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Replay Timeline", desc: "Scrub through agent history with zoom controls" },
                      { title: "Live Dashboard", desc: "Real-time view of agent activity and collaboration" },
                      { title: "File Browser", desc: "Browse and download agent workspace files" },
                      { title: "Execution Logs", desc: "Full transcript of every agent action" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-secondary">{item.title}:</span>
                          <span className="text-text-light text-sm"> {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 4: Control */}
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-secondary">Full Autonomy, Full Control</h3>
                  </div>
                  <p className="text-text-light mb-6">
                    Agents run in isolated containers with complete autonomy within boundaries you define.
                    Centralized credentials. Resource limits. Autonomy toggles. The control you need.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "Container Isolation", desc: "Each agent in its own Docker environment" },
                      { title: "Centralized Credentials", desc: "One place to manage all agent access" },
                      { title: "Resource Limits", desc: "Control memory (1-64GB) and CPU (1-16 cores) per agent" },
                      { title: "Autonomy Mode", desc: "Toggle autonomous operation on/off per agent" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-secondary">{item.title}:</span>
                          <span className="text-text-light text-sm"> {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Architecture Overview
          </h2>

          <div className="bg-secondary rounded-xl p-8 text-white font-mono text-sm overflow-x-auto">
            <pre className="whitespace-pre">
{`┌─────────────────────────────────────────────────────────────────┐
│                      TRINITY PLATFORM                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │            ORCHESTRATOR AGENT (Claude Code)               │  │
│  │         Maintains master workplan, routes tasks            │  │
│  └─────────────────────────┬─────────────────────────────────┘  │
│                            │                                    │
│              ┌─────────────┼─────────────┬─────────────┐       │
│              │             │             │             │        │
│              ▼             ▼             ▼             ▼        │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌──────────────┐
│  │    WORKER     │ │    WORKER     │ │    WORKER     │ │   WORKER     │
│  │   Agent A     │ │   Agent B     │ │   Agent C     │ │   Agent D    │
│  │  (Content)    │ │  (Research)   │ │    (Code)     │ │  (Analysis)  │
│  │ Claude Code   │ │ Claude Code   │ │ Claude Code   │ │ Claude Code  │
│  │  YOLO Mode    │ │  YOLO Mode    │ │  YOLO Mode    │ │  YOLO Mode   │
│  └───────┬───────┘ └───────┬───────┘ └───────┬───────┘ └──────┬───────┘
│          │                 │                 │                 │
│          └─────────────────┴─────────────────┴─────────────────┘
│                                    │                            │
│                      ┌─────────────┴─────────────┐              │
│                      │        MCP Server         │              │
│                      │  (Agent Communication)    │              │
│                      └─────────────┬─────────────┘              │
│                                    │                            │
│  ┌─────────────────────────────────┴─────────────────────────┐  │
│  │                     INFRASTRUCTURE                         │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐           │  │
│  │  │  Database  │  │   Docker   │  │    File    │           │  │
│  │  │ (Postgres) │  │ Containers │  │  Storage   │           │  │
│  │  └────────────┘  └────────────┘  └────────────┘           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </section>

      {/* How Agents Run */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary text-center mb-4">
            How Agents Run
          </h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            From creation to autonomous execution, here&apos;s how Trinity orchestrates Claude Code agents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Agent Creation",
                icon: FileText,
                items: [
                  "Define agent template with CLAUDE.md",
                  "Specify permissions",
                  "Configure MCP servers and tools"
                ]
              },
              {
                step: 2,
                title: "Container Launch",
                icon: Container,
                items: [
                  "Docker container spins up",
                  "Claude Code starts in YOLO mode",
                  "Workplan injected into context"
                ]
              },
              {
                step: 3,
                title: "Autonomous Execution",
                icon: Zap,
                items: [
                  "Agent reads workplan",
                  "Executes tasks via CLI",
                  "Delegates to sub-agents via MCP"
                ]
              },
              {
                step: 4,
                title: "Real-time Observability",
                icon: Eye,
                items: [
                  "Activity streams to dashboard",
                  "Custom metrics updated live",
                  "File changes tracked"
                ]
              },
              {
                step: 5,
                title: "Persistence & Recovery",
                icon: RefreshCw,
                items: [
                  "Workplans persist across restarts",
                  "Chat history survives sessions",
                  "Failed tasks trigger replanning"
                ]
              },
              {
                step: 6,
                title: "Continuous Operation",
                icon: Clock,
                items: [
                  "24/7 autonomous scheduling",
                  "Cron-based execution",
                  "Manual triggers available"
                ]
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <item.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-secondary">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                      <ChevronDown className="w-4 h-4 text-primary mt-0.5 rotate-[-90deg]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOLO Mode Explained */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">
                What is YOLO Mode?
              </h2>
            </div>

            <p className="text-lg text-text-light mb-8">
              YOLO mode (You Only Live Once) is Claude Code&apos;s fully autonomous execution mode.
              When enabled, agents can operate without human confirmation for every action.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-secondary text-white rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  What agents can do
                </h3>
                <ul className="space-y-2 text-sm text-secondary-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Execute any shell command
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Write and modify files directly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Install packages and dependencies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Make network requests and API calls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Interact with external systems
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-secondary">
                  <Shield className="w-5 h-5 text-primary" />
                  Safety through infrastructure
                </h3>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span><strong>Isolation:</strong> Each agent in its own container</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span><strong>Permissions:</strong> Control agent communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span><strong>Observability:</strong> See everything in real-time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span><strong>Persistence:</strong> Full history of all actions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span><strong>Sovereignty:</strong> Your infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-light rounded-xl p-6 border border-primary/20">
              <p className="text-secondary">
                <strong>Why this matters:</strong> Traditional AI assistants require human approval for every action.
                YOLO mode enables true autonomy—agents that can work for hours or days on complex tasks without
                human intervention. Trinity provides the infrastructure to run YOLO mode safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Terminal, title: "Web Terminal + SSH", desc: "Direct access to any agent via browser or time-limited SSH" },
              { icon: Lock, title: "Centralized Credentials", desc: "One place to manage all agent secrets and API keys" },
              { icon: Layers, title: "YAML Deployments", desc: "Deploy entire multi-agent systems with one manifest" },
              { icon: Activity, title: "Replay Timeline", desc: "Scrub through history, see collaboration patterns" },
              { icon: BarChart3, title: "Resource Control", desc: "Per-agent memory (1-64GB) and CPU (1-16 cores) limits" },
              { icon: Clock, title: "Scheduling + Autonomy", desc: "Cron-based execution with autonomy mode toggles" },
            ].map((item, i) => (
              <div key={i} className="card group">
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Deploy in 60 Seconds
            </h2>
            <p className="text-text-light mb-8">
              Get Trinity running with three commands.
            </p>

            <div className="bg-secondary rounded-xl p-6 text-left font-mono text-sm mb-8">
              <div className="text-secondary-light mb-2"># Clone the repository</div>
              <div className="text-white mb-4">git clone https://github.com/abilityai/trinity</div>

              <div className="text-secondary-light mb-2"># Start Trinity</div>
              <div className="text-white mb-4">cd trinity && docker-compose up</div>

              <div className="text-secondary-light mb-2"># Access the dashboard</div>
              <div className="text-white">open http://localhost:3000</div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {[
                "Web dashboard for agent management",
                "Real-time activity monitoring",
                "Workplan visualization",
                "Custom metrics dashboard",
                "File browser",
                "Chat history viewer",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-light">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary text-center mb-4">
            What Can You Build?
          </h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Trinity enables autonomous AI systems that work for hours or days on complex tasks.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Autonomous Sales Intelligence",
                desc: "Deploy agents that monitor signals, qualify leads, and generate personalized outreach—running 24/7 without human intervention."
              },
              {
                title: "Competitive Response Systems",
                desc: "Agents track competitor moves, reason through implications, and draft response strategies autonomously."
              },
              {
                title: "Code Generation Pipelines",
                desc: "Multiple agents collaborate on complex codebases—one architects, one implements, one tests, one reviews."
              },
              {
                title: "Research & Analysis",
                desc: "Deep research agents that synthesize information from hundreds of sources into comprehensive reports."
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereignty */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Your Infrastructure. Your Control.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
            {[
              { title: "Security", desc: "Prompt injection is the #1 AI security risk of 2025. Sovereign deployment means you control the data perimeter." },
              { title: "Agility", desc: "Modify agent behavior tonight, not next quarter. No vendor roadmap dependencies." },
              { title: "Privacy", desc: "Your data never leaves your infrastructure. Air-gapped deployment available." },
              { title: "No Lock-in", desc: "Open source. Run anywhere. Migrate anytime." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-light mb-10">
            Deploy autonomous agents on your infrastructure in minutes.
          </p>

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
              href="https://youtu.be/tZ4TN9ySMBE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
            <a
              href="mailto:eugene@ability.ai"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
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
                href="/"
                className="text-secondary-light hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <p className="text-secondary-light mb-1">Eugene Vyborov</p>
              <p className="text-secondary-light text-sm mb-4">Founder & CEO</p>
              <a
                href="mailto:eugene@ability.ai"
                className="text-white hover:text-primary-light transition-colors"
              >
                eugene@ability.ai
              </a>
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
