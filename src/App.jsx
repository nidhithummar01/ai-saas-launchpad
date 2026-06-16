import { useState } from "react";

const modes = ["Text", "Image", "Chat", "Code", "Audio", "Video"];

const outputs = {
  Text: "Launch copy:\n\nMeet your new AI productivity workspace: one place to draft, refine, summarize, and ship better work. Built for teams that need speed with control, templates with flexibility, and AI that feels like part of the workflow.",
  Image: "Image prompt:\n\nA colorful AI SaaS dashboard floating over a soft gradient background, rounded glass panels, vivid module cards, model selector, content generator panels, premium product lighting.",
  Chat: "Assistant response:\n\nI can help compare pricing tiers, generate onboarding flows, and draft support answers. Upload your product notes and I will turn them into customer-ready assets.",
  Code: "Code helper:\n\nfunction applyUsageLimit(user, credits) {\n  if (credits.remaining <= 0) return { allowed: false, reason: 'Upgrade required' };\n  return { allowed: true, model: user.plan.defaultModel };\n}",
  Audio: "Audio script:\n\nWelcome to your branded AI platform. Choose a template, describe your goal, and publish content in minutes instead of hours.",
  Video: "Video brief:\n\nScene 1: founder dashboard. Scene 2: user generates text and image. Scene 3: admin reviews usage and revenue. CTA: Launch your AI SaaS in weeks.",
};

export default function App() {
  const [mode, setMode] = useState("Text");
  const [output, setOutput] = useState("Choose a module and generate a mock result.");

  return (
    <div className="wrap">
      <header>
        <div className="brand">Neoteq AI / SaaS Launchpad</div>
        <span className="tag">Prototype</span>
      </header>

      <section className="hero">
        <div>
          <span className="tag">Multi-modal SaaS</span>
          <h1>AI SaaS Launchpad</h1>
        </div>
        <p className="lede">
          A white-label AI SaaS prototype with text, image, chat, code, audio,
          and video generation flows in one branded product shell.
        </p>
      </section>

      <section className="app">
        <aside className="panel sidebar">
          <span className="tag">Modules</span>
          <div className="nav">
            {modes.map((item) => (
              <button
                className={mode === item ? "active" : ""}
                key={item}
                onClick={() => setMode(item)}
              >
                {item === "Text" ? "Text Generator" : `${item} ${item === "Image" ? "Studio" : item === "Chat" ? "AI Chat" : item === "Code" ? "Helper" : item === "Audio" ? "Tool" : "Brief"}`}
              </button>
            ))}
          </div>
          <div className="stats">
            <div className="stat"><strong>100+</strong> templates</div>
            <div className="stat"><strong>Stripe</strong> billing-ready</div>
            <div className="stat"><strong>3-6wk</strong> deployment path</div>
          </div>
        </aside>

        <main className="workspace">
          <div className="panel">
            <span className="tag">{mode}</span>
            <h2>{mode} Generator</h2>
            <select defaultValue="Startup landing page">
              <option>Startup landing page</option>
              <option>Agency proposal</option>
              <option>E-commerce campaign</option>
              <option>Education content</option>
            </select>
            <textarea defaultValue="Create a launch announcement for a new AI productivity SaaS with a confident but practical tone." />
            <button className="primary" onClick={() => setOutput(outputs[mode])}>
              Generate Prototype Output
            </button>
            <h3>Output</h3>
            <div className="output">{output}</div>
          </div>

          <aside className="panel">
            <span className="tag">Admin Snapshot</span>
            <div className="cards">
              <div className="card"><strong>Plan Builder</strong> Free, Pro, Agency usage limits and credits.</div>
              <div className="card"><strong>Plugin Marketplace</strong> Add templates, models, and integrations after launch.</div>
              <div className="card"><strong>Tenant Controls</strong> Branded workspaces with roles, billing, and analytics.</div>
              <div className="card"><strong>API Cost Guardrails</strong> Per-model limits and usage alerts for margin control.</div>
            </div>
          </aside>
        </main>
      </section>
    </div>
  );
}
