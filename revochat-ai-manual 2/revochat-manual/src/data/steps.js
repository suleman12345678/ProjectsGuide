// RevoChat AI — Manual Guide content
// Each step: one screenshot, one title, one description.
// Sequence: Landing page (top to bottom) -> Dashboard (sidebar order)

export const sections = [
  { id: "landing", label: "Landing Page" },
  { id: "dashboard", label: "Dashboard" },
];

export const steps = [
  // ---------------- LANDING PAGE ----------------
  {
    id: 1,
    section: "landing",
    image: "/screenshots/image26.png",
    title: "Landing page — Hero",
    description:
      "This is the front door of RevoChat AI. The top bar links to Home, Features, Dashboard, Integrations, Pricing, and Docs, plus Login and Start Free buttons on the right. The headline, \"Deploy Intelligent AI Chatbots Everywhere Instantly,\" sits above two calls to action: Generate Free Widget, which jumps straight into building a chatbot, and Schedule a Demo, for anyone who wants a walkthrough first. Four small badges below the buttons — Multi-LLM Engine, RAG Knowledge Bases, Active Voice Calls, and 1-Minute Setup — preview the platform's core strengths before the visitor scrolls any further.",
  },
  {
    id: 2,
    section: "landing",
    image: "/screenshots/image27.png",
    title: "Landing page — Live agent showcase",
    description:
      "A fan of five live cards shows the different channels a RevoChat agent can run on at once: a support agent handling ticket webhooks, a WhatsApp CRM card scoring an inbound lead as Hot, a web widget mid-conversation, a voice agent on an active call with live translation, and a vision model parsing an invoice with OCR. The \"Orchestrating AI Agent Workflows\" tag underneath ties the five cards together as one coordinated system rather than five separate tools.",
  },
  {
    id: 3,
    section: "landing",
    image: "/screenshots/image25.png",
    title: "Landing page — Platform features",
    description:
      "This section lists what's included out of the box: RAG Vector Knowledge Search for grounding answers in your own documents, AI Voice Calling for hands-free conversations, AI Vision & OCR for reading screenshots and images, Multi-Widget Deployment for running several branded bots from one account, Hybrid Live Chat Handoff for bringing in a human agent mid-conversation, Conversational Forms for capturing leads inline, Lead Scoring & Intent Webhooks, a Cal.com Meeting Scheduler, and a Deep Analytics Dashboard. Each card has a short description and a \"Learn more\" link.",
  },
  {
    id: 4,
    section: "landing",
    image: "/screenshots/image24.png",
    title: "Landing page — Advanced capabilities",
    description:
      "A second grid goes deeper on twelve specific capabilities: Multi-LLM Failover for automatic backup models, Natural Cloud TTS for realistic voice output, Sentiment Mood Emojis that change the chat's visual state based on how the user feels, Smart Auto-Complete, Granular User RBAC for role-based permissions, an AI Theme Generator that builds a widget's look from a plain-English description, a Document Chunker for preparing knowledge files, a Smart FAQ Builder, Instant Screen Capture inside the chat window, an Embeddable Script for adding the bot to any site, Realistic Sound Effects, and Memory Context for recognizing returning visitors.",
  },
  {
    id: 5,
    section: "landing",
    image: "/screenshots/image23.png",
    title: "Landing page — Unified console preview",
    description:
      "This section previews the admin console itself, framed as \"Manage AI Agents with a Unified Console.\" The mock panel shows live numbers — total chats, the percentage auto-resolved without a human, and average response time — alongside a weekly satisfaction trend line and a streaming activity log of system events like webhook pings and vector lookups. It's a preview of the kind of visibility you get once you're logged in.",
  },
  {
    id: 6,
    section: "landing",
    image: "/screenshots/image22.png",
    title: "Landing page — Live interactive demo",
    description:
      "Under \"Experience the Real AI Agent,\" visitors can talk to a fully working RevoChat assistant right on the page — no signup required. The widget opens with a greeting and an Inquire quick-action button, plus icons for starting a voice call, toggling sound, and adjusting settings. It's connected to the real backend, so responses come from the actual product rather than a scripted preview.",
  },
  {
    id: 7,
    section: "landing",
    image: "/screenshots/image21.png",
    title: "Landing page — Integration ecosystem",
    description:
      "This section, \"Connect to Your Existing Tools,\" lists the apps RevoChat can sync with, filterable by Messaging, E-Commerce & CRM, Customer Support, and Automation. Each card — WhatsApp Business, Slack, Telegram, Shopify, Salesforce, HubSpot, Intercom, Zendesk, Zapier, Webflow, WordPress, Wix, and more — shows whether it's already connected (\"Sync Active\") and a one-click Connect or Disconnect action.",
  },
  {
    id: 8,
    section: "landing",
    image: "/screenshots/image20.png",
    title: "Landing page — Pricing",
    description:
      "Pricing is split into three tiers. Starter is free and includes one chatbot widget with 500 AI messages a month — good for testing. Professional, marked as most popular, runs $30 a month and adds up to five widgets, 10,000 messages, advanced document-based answers, multi-channel sync, voice support, and lead scoring, with a 7-day free trial. Enterprise is custom-priced and adds unlimited widgets, dedicated infrastructure, white-label domains, and dedicated support. A monthly/annual toggle shows a 25% discount for paying yearly.",
  },

  // ---------------- DASHBOARD ----------------
  {
    id: 9,
    section: "dashboard",
    image: "/screenshots/image19.png",
    title: "Dashboard Overview",
    description:
      "After logging in, this is the first screen you land on. It greets you by name and gives a snapshot of your account: invoices, project tasks, signed contracts, and your AI coin balance for running models. Below that, four panels — My Registered Work Logs, My Signed Agreements, My Invoices Ledger, and Assigned Project Tasks — stay empty until there's real activity to show. The sidebar on the left is how you reach every other section covered in this guide.",
  },
  {
    id: 10,
    section: "dashboard",
    image: "/screenshots/image18.png",
    title: "AI Intelligence Hub",
    description:
      "This page rolls up performance across every chatbot widget you've created into one health score. At the top, you see total widgets, an average health score across all of them, total conversations, and how many of those turned into hot leads. Each widget gets its own card with a 0–100 score and a label like Excellent or Good, along with quick stats on conversations, leads generated, and conversations that hit a dead end — useful for spotting which bot needs attention first.",
  },
  {
    id: 11,
    section: "dashboard",
    image: "/screenshots/image17.png",
    title: "Guest Registry",
    description:
      "Guest Registry automatically captures structured profiles and requests from anyone who chats with your bot, across any channel. The Live Activity tab streams these as they happen in real time. Tabs along the top — Analytics & Insights, Registry Types, Guest Records, and Automations — let you define what kind of information to capture, browse everything collected so far, and set up automated actions when a new guest record comes in.",
  },
  {
    id: 12,
    section: "dashboard",
    image: "/screenshots/image15.png",
    title: "Analytics Hub — Traffic Analytics",
    description:
      "Traffic Analytics shows where your visitors are coming from on a world map, with total traffic and active regions tracked at the top. It's part of the broader Analytics Hub section in the sidebar, which also covers chatbot performance, AI usage, and customer health — covered in the next few pages.",
  },
  {
    id: 13,
    section: "dashboard",
    image: "/screenshots/image16.png",
    title: "Traffic Analytics — Engagement detail",
    description:
      "Scrolling further down Traffic Analytics reveals an Engagement Heatmap showing exactly where visitors click and linger on your site, plus an Engagement Flow panel highlighting your highest-performing asset. Below that, Referral Sources shows which sites are sending you traffic, Tech & Devices breaks visitors down by desktop, mobile, and tablet, and Conversion Actions lists the specific events — like booking a call or submitting an inquiry form — that count as a conversion.",
  },
  {
    id: 14,
    section: "dashboard",
    image: "/screenshots/image14.png",
    title: "Analytics Hub — Chatbot AI Analytics",
    description:
      "This page is a deep dive into how your chatbot is actually performing in conversation. It tracks total conversations, daily traffic trends, the sentiment of incoming messages, and a lead score funnel showing how visitors move from Cold to warmer stages. The A/B Prompt Testing Report at the bottom lets you compare two different assistant personalities — here, a friendly variant against a professional one — side by side, tracking conversions for each.",
  },
  {
    id: 15,
    section: "dashboard",
    image: "/screenshots/image13.png",
    title: "Analytics Hub — AI Usage Telemetry",
    description:
      "AI Usage Telemetry tracks consumption against your plan limits: monthly LLM messages, developer API calls, voice generation minutes, and vector storage, each shown as a usage bar against your enterprise quota. The Daily Tokens Utilization Timeline charts token use by day, and Models Token Distribution breaks down exactly how much of your usage each underlying AI model accounts for — handy for understanding where your budget is going.",
  },
  {
    id: 16,
    section: "dashboard",
    image: "/screenshots/image12.png",
    title: "Analytics Hub — Customer Telemetry",
    description:
      "This panel gives a single Workspace Health Score — here 90%, labeled Healthy — built from 30 days of activity: messages sent, tokens consumed, API calls, and total chat sessions. A sentiment ratio breakdown shows how conversations are trending emotionally, and the Improvement Guidance box gives a plain-language recommendation, like maintaining current settings when everything's already in good shape.",
  },
  {
    id: 17,
    section: "dashboard",
    image: "/screenshots/image11.png",
    title: "Multi AI Widgets",
    description:
      "This is where you manage every chatbot widget on your account. Summary cards at the top total your chatbots, how many are active, how many knowledge documents are attached, and how many lead webhooks are firing. Each widget below — like RevoChat AI Order Management — shows its brain model, how many documents it's grounded on, and its personality setting, with quick actions to copy its embed script, clone it, open its settings, or delete it.",
  },
  {
    id: 18,
    section: "dashboard",
    image: "/screenshots/image10.png",
    title: "MCP Integrations",
    description:
      "MCP Integration Hub connects your chatbot assistants to external developer tools like Cursor or Claude using the Model Context Protocol. After selecting which assistant to expose, you get a unique connection endpoint URL and a checklist of tool registers — search_projects, get_project_estimate, check_availability, run_web_search, and more — that you can toggle on individually to control exactly what external tools are allowed to query.",
  },
  {
    id: 19,
    section: "dashboard",
    image: "/screenshots/image9.png",
    title: "Marketplace Hub",
    description:
      "Marketplace Hub is where you install ready-made specialist agents instead of building from scratch. Browsing the AI Agent Store, you'll find options like a Lead Generation Specialist that engages visitors and captures contact details, a Customer Support Pro for resolving FAQs, an IT & Tech Troubleshooter for technical setup questions, and an HR Recruiter Assistant for screening job applicants. Each card shows its rating, install count, and a one-click Install Agent button, with Template Library and Plugin System tabs alongside for browsing other add-ons.",
  },
  {
    id: 20,
    section: "dashboard",
    image: "/screenshots/image8.png",
    title: "Omnichannel Inbox",
    description:
      "The Omnichannel Inbox, labeled Live Chat Handover Terminal, lets a human step into any conversation the AI is currently handling. Active Sessions on the left lists every live chat across channels — web, WhatsApp, Telegram, Slack, and more — with filters for mood (Frustrated, Negative, Neutral, Positive) so you can spot conversations that need a human touch first. Selecting a session opens the Live Handover Support Terminal, where you can read the full exchange and take over from the AI agent at any point. A Leads CRM Ledger tab nearby tracks which conversations have turned into qualified leads.",
  },
  {
    id: 21,
    section: "dashboard",
    image: "/screenshots/image7.png",
    title: "AI Agents & Workflows",
    description:
      "This page is for building automated, multi-step pipelines that run without manual triggering — things like inserting a new lead into your CRM, scraping search results, checking a calendar, or sending an outbound email, all chained together. Active Pipelines shows everything currently running; when there's nothing set up yet, a Create First Workflow button gets you started. The Agents Directory and AI Swarm Sandbox tabs at the top cover browsing individual agents and testing how several agents collaborate.",
  },
  {
    id: 22,
    section: "dashboard",
    image: "/screenshots/image6.png",
    title: "Integrations Channels",
    description:
      "Integration Ecosystem is the full library of platforms your chatbot can plug into, organized by category: Messaging, CRM & Sales, Automation, ERP / Finance, and E-commerce. Each integration — Slack, Discord, WhatsApp Business, Telegram, Messenger, Instagram DMs, Microsoft Teams, Gmail, HubSpot CRM, and more — shows a short description of what connecting it actually does, with a single Connect button to enable it.",
  },
  {
    id: 23,
    section: "dashboard",
    image: "/screenshots/image5.png",
    title: "AI Co-Pilot Generator",
    description:
      "Instead of configuring a new chatbot field by field, the Co-Pilot Generator can build one for you. Paste your website URL and choose Analyze Website URL, and the AI crawls the site to auto-detect your business name, industry, color scheme, tone, FAQs, and grounding data. Prefer to type it out instead? Describe Manually lets you skip the crawl. Either way, the Generated Configuration panel on the right fills in with a ready-to-use widget setup once you click Generate Widget Configuration.",
  },
  {
    id: 24,
    section: "dashboard",
    image: "/screenshots/image4.png",
    title: "Live Demo Test",
    description:
      "Live Demo Test lets you see exactly how your chatbot will look and behave on a real website before going live. Pick which widget to preview from the dropdown, confirm it's active, paste in any public website URL, and select Launch Preview to overlay your chatbot directly on top of that site — no code changes needed. An Analyze Tech Stack button next to it can inspect the target site's setup as well.",
  },
  {
    id: 25,
    section: "dashboard",
    image: "/screenshots/image2.png",
    title: "LLM Scope Guard",
    description:
      "LLM Scope Guard & Anti-Hijack protects your assistants from prompt injection, jailbreaking, and code injection attempts. By default, protection can be switched off per widget, but the page warns clearly when that's the case: \"Your LLM assistants are vulnerable to prompt injection, hijacking, and code injection attacks.\" Once you select a target widget, three tabs — Scope Guard, Anti-Hijack, and Response Filter — let you configure custom rules instead of relying on global defaults, and a single toggle turns protection on or off.",
  },
  {
    id: 26,
    section: "dashboard",
    image: "/screenshots/image3.png",
    title: "Broadcast Notifications",
    description:
      "Broadcast Notifications sends a single announcement to every member of your workspace at once. Fill in a Broadcast Title, choose a category like Info, write the message, and select Send Broadcast. Everything you've sent before is kept in the Previous Broadcasts log underneath, so you can check what's already gone out before sending another one.",
  },
  {
    id: 27,
    section: "dashboard",
    image: "/screenshots/image1.png",
    title: "AI Integration Settings",
    description:
      "This is where you connect your own AI provider accounts using bring-your-own-key (BYOK), instead of relying solely on the platform's shared key. Providers like OpenAI, OpenRouter, Anthropic, Google Gemini, and Groq are each listed with how many models are available and an Add Key button. Providers marked \"Platform key usable\" will keep working on the shared key even before you add your own. An Advanced section at the bottom covers fine-tuning controls like temperature and max tokens.",
  },
];

export const totalSteps = steps.length;
