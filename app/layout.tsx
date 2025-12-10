import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity | Deep Agent Orchestration Platform",
  description: "Sovereign infrastructure for deploying, orchestrating, and governing autonomous AI systems that plan, reason, and execute independently.",
  keywords: ["AI agents", "orchestration", "autonomous AI", "deep agents", "AI infrastructure"],
  authors: [{ name: "Ability.ai", url: "https://ability.ai" }],
  openGraph: {
    title: "Trinity | Deep Agent Orchestration Platform",
    description: "Deep Agents are ready. Deep Agent infrastructure isn't.",
    url: "https://trinity.ability.ai",
    siteName: "Trinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinity | Deep Agent Orchestration Platform",
    description: "Deep Agents are ready. Deep Agent infrastructure isn't.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
