# How It Works - Page Specification

**URL:** trinity.ability.ai/how-it-works
**Purpose:** Detailed explanation of what Trinity is and how it works
**Tone:** Technical but accessible, confident, authoritative

---

## Page Structure

### 1. HERO SECTION

**Headline:**
`How Trinity Works`

**Subheadline:**
`Orchestrate Claude Code agents running in YOLO mode in Docker containers. Full autonomy. Complete visibility. Your infrastructure.`

---

### 2. WHAT IS TRINITY

**Heading:** `What is Trinity?`

**Content:**
Trinity is a Deep Agent Orchestration Platform that runs Claude Code agents in fully autonomous "YOLO mode" inside Docker containers. Each agent operates with complete CLI access, can execute any command, write code, browse the web, and interact with external systems—all while you maintain full visibility and control.

**Key Points:**
- Claude Code agents running in YOLO mode (full autonomy)
- Each agent runs in its own Docker container (isolation)
- MCP-based communication between agents (orchestration)
- Database-backed persistence (memory survives restarts)
- Real-time observability (see everything agents do)

---

### 3. THE FOUR PILLARS (Expanded)

**Heading:** `The Four Pillars of Deep Agency`

**Intro:**
Unlike reactive chatbots that respond to single prompts, Deep Agents operate with deliberative reasoning. They decompose goals into task graphs, delegate to specialists, persist memory across sessions, and recover from failures autonomously. Trinity implements all four pillars.

#### Pillar I: Explicit Planning (Workplan System)

**What it does:**
Agents maintain living task DAGs (Directed Acyclic Graphs) that persist outside the context window. Before taking any action, agents consult and update their workplan.

**How Trinity implements it:**
- **Workplan System:** Task graphs with dependencies, status tracking (pending, active, completed, failed)
- **Automatic Injection:** Workplans are injected into agent context on every start
- **Progress Tracking:** Real-time visibility into task completion
- **Plan Persistence:** Plans survive container restarts and sessions
- **Recovery:** Failed tasks trigger replanning, not blind retry

#### Pillar II: Hierarchical Delegation (Agent Permissions)

**What it does:**
Complex tasks are decomposed and delegated to specialized sub-agents. Each sub-agent operates in isolation, preventing context pollution.

**How Trinity implements it:**
- **MCP-Based Communication:** Agents discover and call each other through Model Context Protocol
- **Permission Controls:** Fine-grained control over which agents can communicate
- **Context Quarantine:** Sub-agents start fresh, return compressed summaries
- **Orchestrator-Worker Pattern:** Top-level orchestrator coordinates, workers execute
- **Real-time Collaboration Visualization:** See agent interactions as they happen

#### Pillar III: Persistent Memory (Database-Backed)

**What it does:**
Agents maintain memory that persists beyond the context window, enabling operations across days or weeks.

**How Trinity implements it:**
- **Database-Backed Chat History:** Conversations survive container restarts
- **File Browser:** Browse and download agent workspace files
- **Workspace Persistence:** Agent workspaces persist across sessions
- **Memory Folding:** Periodic context summarization for infinite session lengths

#### Pillar IV: Extreme Context Engineering (Custom Metrics)

**What it does:**
Sophisticated instructions and observability ensure reliable, auditable reasoning.

**How Trinity implements it:**
- **Template System:** CLAUDE.md injection for consistent agent behavior
- **Custom Metrics:** 6 metric types (counter, gauge, percentage, status, duration, bytes)
- **Trinity Meta-Prompts:** Platform-injected instructions for workplan management
- **Agent-Defined KPIs:** Agents report their own key performance indicators

---

### 4. ARCHITECTURE DIAGRAM

**Heading:** `Architecture Overview`

```
┌─────────────────────────────────────────────────────────────┐
│                     TRINITY PLATFORM                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              ORCHESTRATOR AGENT (Fred)               │    │
│  │         Maintains master workplan, routes tasks      │    │
│  └───────────────────────┬─────────────────────────────┘    │
│                          │                                   │
│            ┌─────────────┼─────────────┬─────────────┐      │
│            │             │             │             │       │
│            ▼             ▼             ▼             ▼       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐│
│  │   WORKER    │ │   WORKER    │ │   WORKER    │ │ WORKER  ││
│  │   Agent A   │ │   Agent B   │ │   Agent C   │ │ Agent D ││
│  │  (Content)  │ │  (Research) │ │   (Code)    │ │(Analysis││
│  └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └────┬────┘│
│         │               │               │              │     │
│         └───────────────┴───────────────┴──────────────┘     │
│                              │                               │
│                    ┌─────────┴─────────┐                    │
│                    │  MCP Server       │                    │
│                    │  (Communication)  │                    │
│                    └─────────┬─────────┘                    │
│                              │                               │
│  ┌───────────────────────────┴───────────────────────────┐  │
│  │                    INFRASTRUCTURE                      │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │  │
│  │  │ Database │  │  Docker  │  │ File     │            │  │
│  │  │(Postgres)│  │Containers│  │ Storage  │            │  │
│  │  └──────────┘  └──────────┘  └──────────┘            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 5. HOW AGENTS RUN

**Heading:** `How Agents Run`

**Step-by-step:**

1. **Agent Creation**
   - Define agent template with CLAUDE.md instructions
   - Specify permissions (which agents it can communicate with)
   - Configure environment (tools, MCP servers, file access)

2. **Container Launch**
   - Trinity spins up a Docker container for the agent
   - Claude Code starts in YOLO mode (full autonomy)
   - Workplan is injected into agent context
   - Agent begins executing tasks

3. **Autonomous Execution**
   - Agent reads workplan, identifies next task
   - Executes using CLI, code, web browsing, file I/O
   - Updates workplan with progress
   - Delegates to sub-agents via MCP if needed

4. **Observability**
   - Real-time activity streaming to dashboard
   - Custom metrics updated as agent works
   - Chat history persisted to database
   - File changes tracked and browsable

5. **Persistence & Recovery**
   - Workplans persist across container restarts
   - Chat history survives sessions
   - Failed tasks trigger replanning
   - Agents resume from last known state

---

### 6. YOLO MODE EXPLAINED

**Heading:** `What is YOLO Mode?`

**Content:**
YOLO mode (You Only Live Once) is Claude Code's fully autonomous execution mode. When enabled, agents can:

- Execute any shell command without confirmation
- Write and modify files directly
- Install packages and dependencies
- Make network requests and API calls
- Interact with external systems

**Why this matters:**
Traditional AI assistants require human approval for every action. YOLO mode enables true autonomy—agents that can work for hours or days on complex tasks without human intervention. Trinity provides the infrastructure to run YOLO mode safely: containerization for isolation, permissions for control, and observability for visibility.

**Safety through infrastructure:**
- **Isolation:** Each agent runs in its own container
- **Permissions:** Control which agents can communicate
- **Observability:** See everything agents do in real-time
- **Persistence:** Review full history of all actions
- **Sovereignty:** Your infrastructure, your data perimeter

---

### 7. PLATFORM CAPABILITIES

**Heading:** `Platform Capabilities`

| Capability | What It Does |
|------------|--------------|
| **Workplan System** | Task DAGs with dependencies, automatic injection, progress tracking |
| **Agent Permissions** | Fine-grained control over inter-agent communication |
| **Custom Metrics** | 6 types: counter, gauge, percentage, status, duration, bytes |
| **Activity Replay** | Full audit trail with timeline scrubbing |
| **File Browser** | Browse and download agent workspace files |
| **Autonomous Scheduling** | Cron-based execution, 24/7 agent operations |
| **60-Second Deploy** | `docker-compose up` and you're running |

---

### 8. DEPLOYMENT

**Heading:** `Deploy in 60 Seconds`

```bash
# Clone the repository
git clone https://github.com/abilityai/trinity

# Start Trinity
cd trinity
docker-compose up

# Access the dashboard
open http://localhost:3000
```

**What you get:**
- Web dashboard for agent management
- Real-time activity monitoring
- Workplan visualization
- Custom metrics dashboard
- File browser
- Chat history viewer

---

### 9. USE CASES

**Heading:** `What Can You Build?`

**Autonomous Sales Intelligence**
Deploy agents that monitor signals, qualify leads, and generate personalized outreach—running 24/7 without human intervention.

**Competitive Response Systems**
Agents track competitor moves, reason through implications, and draft response strategies autonomously.

**Code Generation Pipelines**
Multiple agents collaborate on complex codebases—one architects, one implements, one tests, one reviews.

**Research & Analysis**
Deep research agents that synthesize information from hundreds of sources into comprehensive reports.

**Operational Automation**
Finance, HR, compliance workflows that operate across days with persistent memory and workplans.

---

### 10. SOVEREIGNTY

**Heading:** `Your Infrastructure. Your Control.`

**Why sovereignty matters:**

1. **Security:** Prompt injection is the #1 AI security risk of 2025. Sovereign deployment means you control the data perimeter.

2. **Agility:** Modify agent behavior tonight, not next quarter. No vendor roadmap dependencies.

3. **Privacy:** Your data never leaves your infrastructure. Air-gapped deployment available.

4. **No Lock-in:** Open source. Run anywhere. Migrate anytime.

---

### 11. CTA SECTION

**Heading:** `Ready to Get Started?`

**Buttons:**
- Primary: `View on GitHub` → github.com/abilityai/trinity
- Secondary: `Watch Demo` → Link to YouTube video
- Tertiary: `Request Demo` → Contact form

---

## Design Notes

- Use diagrams/illustrations for architecture
- Code blocks for deployment instructions
- Expandable sections for detailed technical content
- Consistent with main landing page styling
- Mobile-friendly with collapsible sections
