/**
 * KnowFlow - Application Controller & State Engine
 * Handles routing, data filtering, SVG charting, preference settings,
 * bookmark actions, and dynamic view rendering.
 */

// ==========================================
// Mock Database (Curated High-Quality Tech Data)
// ==========================================
const ARTICLES_DB = [
  {
    id: "art-1",
    title: "The Shift to Agentic AI: How Autonomous AI Workflows are Replacing Chatbots",
    summary: "Large Language Models are evolving from conversational conversationalists to autonomous agents capable of calling APIs, planning actions, and executing multi-step business logic without human intervention.",
    fullContent: "The first generation of enterprise generative AI was dominated by chatbots—interactive systems designed to answer user prompts. However, the industry is undergoing a structural shift toward Agentic AI. These systems do not wait for prompt-by-prompt guidance; they are given high-level goals and construct their own action plans, use APIs to fetch data, write and execute code, and self-correct errors. Companies like OpenAI, Anthropic, and Google are focusing developer toolsets around tool-use capabilities, bringing us closer to autonomous systems that perform specialized office tasks at scale.",
    whyItMatters: "Agentic workflows represent a 10x multiplier in business automation. Instead of just writing text, AI can now perform tasks like data entry, software debugging, and customer support ticket resolution end-to-end.",
    takeaways: [
      "Agentic AI uses tool calling and loop execution to solve open-ended tasks.",
      "The engineering challenge has shifted from prompt engineering to system orchestration and guardrailing.",
      "Venture funding is heavily pivoting towards specialized autonomous vertical agents."
    ],
    source: "Hacker News / TechCrunch",
    publishedTime: "2 hours ago",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    importance: "high",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["AI Agents", "LLMs", "Orchestration", "Automation"],
    dateString: "July 18, 2026"
  },
  {
    id: "art-2",
    title: "Kubernetes 1.34: Dynamic Resource Allocation Enters General Availability",
    summary: "The latest Kubernetes release graduates Dynamic Resource Allocation (DRA) to GA, offering standard APIs for containerizing specialized hardware like GPUs, TPUs, and custom ASICs.",
    fullContent: "Kubernetes 1.34 is a massive milestone for AI and Machine Learning infrastructure. Historically, scheduling GPUs meant treating them as static resource blocks. Dynamic Resource Allocation (DRA) introduces a highly customizable model for resource scheduling, allowing containers to request hardware based on dynamic parameters (e.g., sharing a GPU, requesting specific interconnect speeds, or scaling allocations dynamically during container runtime). This drastically reduces idle GPU time, which currently represents up to 40% of compute spend in large AI clusters.",
    whyItMatters: "As AI compute costs explode, infrastructure optimization is a top priority. DRA enables cloud platform teams to squeeze maximum efficiency from expensive AI hardware.",
    takeaways: [
      "Dynamic Resource Allocation (DRA) is now fully ready for production workloads.",
      "Supports advanced sharing profiles for shared-host GPU architectures.",
      "Reduces cloud compute bills by scheduling workloads according to actual real-time hardware metrics."
    ],
    source: "CNCF Blog",
    publishedTime: "4 hours ago",
    readTime: "4 min read",
    category: "Cloud Computing",
    importance: "medium",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Kubernetes", "Cloud Native", "GPUs", "DevOps"],
    dateString: "July 18, 2026"
  },
  {
    id: "art-3",
    title: "Rust-based web framework Axum hits 1.0 with major routing optimizations",
    summary: "Axum, the highly popular modular web application framework built on Tokio, Tower, and Hyper, has officially launched version 1.0 with zero-copy parsing and faster routing engines.",
    fullContent: "The Rust ecosystem has matured into a mainstream powerhouse for microservices. Axum 1.0 marks the stabilization of its API surface after years of community iterations. The highlight of the 1.0 release is the rewritten routing engine which utilizes a modified radix tree, offering up to 35% faster route resolution times compared to previous versions. Furthermore, its macro-free syntax and type-safe extractors provide the safety Rust is known for, alongside developer velocities comparable to TypeScript or Go frameworks.",
    whyItMatters: "Axum's stabilization signals that Rust is no longer just a system programming language, but a highly stable, competitive framework for enterprise backend API development.",
    takeaways: [
      "Axum 1.0 delivers stable API surfaces and zero-copy request parsing.",
      "Major speedups in routing, particularly for large, nested REST APIs.",
      "Strong adoption in tech giants rewriting latency-critical microservices."
    ],
    source: "Rust Programming Hub",
    publishedTime: "5 hours ago",
    readTime: "6 min read",
    category: "Programming",
    importance: "high",
    isLongRead: false,
    githubUrl: "github.com/tokio-rs/axum",
    relatedTopics: ["Rust", "Axum", "Backend", "Web Frameworks"],
    dateString: "July 18, 2026"
  },
  {
    id: "art-4",
    title: "Zero-Trust Architectures: Securing Multi-Cloud Environments Against Identity Spoofing",
    summary: "With identity-based attacks on the rise, security teams are moving away from traditional VPNs towards continuous validation systems spanning AWS, GCP, and Azure.",
    fullContent: "In modern engineering, the network perimeter is dead. 82% of cloud security breaches now involve credential abuse or identity spoofing. To combat this, enterprise security has pivoted to Zero-Trust Network Access (ZTNA). ZTNA enforces continuous authentication: every request—regardless of whether it originates within the network or from a remote worker—is verified based on user identity, device health state, geographical context, and behavior patterns. Multi-cloud environments present a unique challenge, requiring federated identity brokers that synchronize policy decisions across heterogeneous clouds in real time.",
    whyItMatters: "Single sign-on and perimeter security are no longer sufficient. Implementing fine-grained ZTNA protects intellectual property and sensitive customer database stores from lateral movement.",
    takeaways: [
      "Identity is the primary security boundary in multi-cloud architectures.",
      "Continuous verification models replace one-time login gates.",
      "Cross-cloud security requires standardized identity federation (such as SPIFFE/SPIRE)."
    ],
    source: "Cloud Security Alliance",
    publishedTime: "6 hours ago",
    readTime: "7 min read",
    category: "Cybersecurity",
    importance: "high",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Zero Trust", "Cloud Security", "Identity Access", "IAM"],
    dateString: "July 18, 2026"
  },
  {
    id: "art-5",
    title: "arXiv Spotlight: Direct Preference Optimization (DPO) outperforming RLHF in small LLMs",
    summary: "A new research paper demonstrates that Direct Preference Optimization (DPO) achieves higher alignment metrics with a fraction of the computational complexity of traditional RLHF.",
    fullContent: "Aligning Large Language Models with human preferences has traditionally relied on Reinforcement Learning from Human Feedback (RLHF), which requires training a separate reward model and running computationally expensive PPO updates. Direct Preference Optimization (DPO) bypasses the reward model entirely. DPO mathematically optimizes the policy network directly using preference data, reducing training complexity to a standard cross-entropy loss. Recent benchmarking on models under 8B parameters shows DPO-aligned models scoring higher on safety and logic reasoning tests while cutting training time by over 50%.",
    whyItMatters: "Lowering the computational cost of LLM alignment makes custom model creation accessible to mid-sized enterprises, accelerating the deployment of specialized AI models.",
    takeaways: [
      "DPO mathematically simplifies alignment by removing the need for a separate reward model.",
      "Yields higher stability and fewer hyperparameter tuning issues compared to PPO.",
      "Reduces compute budgets for open-source model fine-tuning dramatically."
    ],
    source: "arXiv Paper Review",
    publishedTime: "1 day ago",
    readTime: "8 min read",
    category: "Research Papers",
    importance: "medium",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Machine Learning", "DPO", "RLHF", "LLM Alignment"],
    dateString: "July 17, 2026"
  },
  {
    id: "art-6",
    title: "GitHub Trending: 'Turbopack' reaches 30k stars as standard bundler for Next.js 16",
    summary: "Turbopack, the Rust-based successor to Webpack, is seeing explosive adoption in the React ecosystem, claiming to build development server starts 10x faster than Webpack.",
    fullContent: "Webpack has been the standard bundler for modern web applications for a decade. However, as applications scale to thousands of files, build times have degraded. Enter Turbopack. Written in Rust and integrated directly into the Next.js development flow, Turbopack leverages an incremental computation engine that caches every operation. If a developer edits a single CSS class, Turbopack recalculates only the modified block rather than rebuild the whole bundle. The GitHub repository has recently crossed 30,000 stars, solidifying its place as the next-generation bundler tool.",
    whyItMatters: "Developer experience is closely tied to build speed. Shifting to Rust-backed tooling like Turbopack translates directly to faster feature shipping cycles.",
    takeaways: [
      "Turbopack is hitting massive open-source momentum, crossing 30k stars.",
      "Incremental architecture ensures development build times remain flat as codebases grow.",
      "Designed specifically to work natively with React Server Components (RSC)."
    ],
    source: "GitHub Trends",
    publishedTime: "1 day ago",
    readTime: "3 min read",
    category: "GitHub Trending",
    importance: "low",
    isLongRead: false,
    githubUrl: "github.com/vercel/turbo",
    relatedTopics: ["Turbopack", "Rust", "Next.js", "Web Tools"],
    dateString: "July 17, 2026"
  },
  {
    id: "art-7",
    title: "Y Combinator-backed 'CloudLayer' secures $15M to build serverless databases at the edge",
    summary: "A new startup is solving state latency by distributing transactional SQLite-based databases across edge nodes with zero-config replication.",
    fullContent: "Edge computing runs code closer to users, but managing state has always been a blocker. Fetching data from a centralized SQL database in Virginia defeats the purpose of running code on an edge node in Tokyo. YC-backed CloudLayer has secured $15M in Series A funding to address this. They distribute SQLite databases across over 200 edge locations, using a custom Raft-consensus replication engine. When a write occurs at one edge node, it propagates globally in milliseconds, giving developer teams the low latency of edge alongside the reliability of relational schemas.",
    whyItMatters: "Serverless databases at the edge pave the way for true global application hosting with zero cold-starts and sub-50ms data access times everywhere.",
    takeaways: [
      "CloudLayer uses edge-localized SQLite to deliver microsecond read latencies.",
      "Secured $15M Series A funding led by top-tier dev-tool venture capital.",
      "Eliminates the complexity of configuring database replication manually."
    ],
    source: "TechCrunch / YC News",
    publishedTime: "2 days ago",
    readTime: "5 min read",
    category: "Startups",
    importance: "medium",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Edge Database", "Serverless", "SQLite", "Startups"],
    dateString: "July 16, 2026"
  },
  {
    id: "art-8",
    title: "The Software Engineer Job Market in 2026: The Rise of the 'Full-Lifecycle' AI Developer",
    summary: "Hiring trends indicate a shift in tech roles. Companies are moving away from hyper-specialized front-end/back-end roles toward engineers who manage product engineering via AI assistance.",
    fullContent: "The software engineering recruitment landscape has stabilized in 2026, but the skills in demand have shifted. With code generation tools handling boilerplate, the industry is seeking 'Full-Lifecycle Product Engineers'. These developers use AI tools to rapidly scaffold prototypes, but excel at system design, architecture reviews, debugging high-concurrency systems, security compliance, and direct customer interactions. Pure coding speeds are no longer the bottleneck; structural design, domain logic modeling, and cloud optimization are the primary hiring focus points.",
    whyItMatters: "Software engineering careers are evolving. Developers must transition from syntacticians to system orchestrators and product owners to remain highly competitive.",
    takeaways: [
      "Hyper-specialized coding roles are merging into multi-faceted product roles.",
      "System design, software security, and AI orchestration are the most in-demand skills.",
      "Bootcamps and universities are restructuring curricula around AI pair-programming environments."
    ],
    source: "Career Watch / LinkedIn Tech Report",
    publishedTime: "2 days ago",
    readTime: "6 min read",
    category: "Career & Placement Watch",
    importance: "high",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Tech Careers", "AI Engineering", "Hiring Trends", "Education"],
    dateString: "July 16, 2026"
  },
  {
    id: "art-9",
    title: "Deep Dive: Building a custom AI Agent from scratch with pure Python and no frameworks",
    summary: "Skip LangChain and AutoGen. Learn how to write a lightweight, highly inspectable agent loop using direct LLM API calls, system instructions, and tool calling loops.",
    fullContent: "While popular framework libraries like LangChain and LlamaIndex provide extensive wrappers, they can obscure the core mechanisms of AI agents and add dependency bloat. This long-read guide walks through building an agent using only pure Python and the OpenAI/Anthropic APIs. By writing the event loop yourself, you gain complete visibility into how prompt states, tool configurations, and loop exits operate. We build a functional command-line agent that queries a database, structures reports, and writes logs, all with under 200 lines of highly optimized, legible Python code.",
    whyItMatters: "Understanding the underlying plumbing of AI tooling makes you a better system designer. Bypassing heavy libraries helps optimize token costs and application latency.",
    takeaways: [
      "Writing your own agent loop is key to learning how tools and APIs cooperate.",
      "Reduces reliance on complex, fast-changing vendor packages.",
      "Allows for lightweight custom exception handlers and strict control loops."
    ],
    source: "Weekly Deep Dive Newsletter",
    publishedTime: "3 days ago",
    readTime: "14 min read",
    category: "Programming",
    importance: "medium",
    isLongRead: true, // Marked as the Long Read
    githubUrl: "github.com/knowflow-samples/custom-python-agent",
    relatedTopics: ["Python", "AI Engineering", "System Design", "Tutorial"],
    dateString: "July 15, 2026"
  },
  {
    id: "art-10",
    title: "Enterprise AI Adoption: Standardizing LLM Gateway Proxies for Security Audit and Cost Control",
    summary: "Large businesses are deploying internal AI gateways to enforce data loss prevention (DLP), log inputs/outputs, and manage API billing across multiple AI providers.",
    fullContent: "As departments across large enterprises experiment with various LLMs, chief information officers face a security and cost nightmare. Standardizing LLM gateways has emerged as the leading solution. An LLM Gateway acts as a central proxy for all outbound AI API calls. It intercepts prompt inputs to scan for personally identifiable information (PII) or secrets, checks credentials, caches redundant queries, and routes tasks to the most cost-effective provider. It also guarantees compliance with SOC2 and HIPAA standards by maintaining audit logs of all model interactions.",
    whyItMatters: "Gateways give enterprises visibility into employee AI usage. They balance AI innovation with compliance, safety, and spending guardrails.",
    takeaways: [
      "Centralized gateways prevent data leaks and secret exposures.",
      "Supports dynamic failover routing between model providers.",
      "Reduces token costs via aggressive proxy caching of repetitive prompts."
    ],
    source: "Enterprise AI Journal",
    publishedTime: "3 days ago",
    readTime: "5 min read",
    category: "Enterprise AI",
    importance: "high",
    isLongRead: false,
    githubUrl: "",
    relatedTopics: ["Enterprise AI", "Security Gateway", "Data Privacy", "FinOps"],
    dateString: "July 15, 2026"
  }
];

// Additional SideWidgets Mock
const TOOL_OF_THE_DAY = {
  name: "uv by Astral",
  desc: "An extremely fast Python package installer and resolver written in Rust. Designed to replace pip, pip-tools, and virtualenv with 10x-100x performance gains.",
  url: "github.com/astral-sh/uv",
  iconClass: "fa-brands fa-python"
};

const LEARN_TODAY_LIST = [
  { id: "learn-1", title: "Review Axum routing mechanics", completed: false },
  { id: "learn-2", title: "Read arXiv paper on DPO vs RLHF", completed: false },
  { id: "learn-3", title: "Practice setting up ZTNA identity providers", completed: false }
];

const QUOTE_OF_THE_DAY = {
  text: "Simplicity is the ultimate sophistication. It is not about having nothing, but about having exactly what is needed, and nothing more.",
  author: "Adapted, Steve Jobs / Leonardo da Vinci"
};

// ==========================================
// Application State Management
// ==========================================
const AppState = {
  currentView: "landing",
  theme: "light",
  bookmarks: [],
  readHistory: [],
  streakCount: 5,
  streakHistory: ["Mon", "Tue", "Wed", "Thu", "Fri"], // Checked days
  preferences: {
    interests: ["Artificial Intelligence", "Cloud Computing", "Programming", "Research Papers"],
    deliveryTime: "07:00 AM",
    notifications: { email: true, push: false, weeklyReport: true },
    pdfPreference: "compact",
    emailAddress: "praveen.ramanan.k@gmail.com"
  },
  learnToday: [...LEARN_TODAY_LIST]
};

// ==========================================
// Initializer & Routing
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadStateFromStorage();
  setupEventListeners();
  handleRouting();
});

// Sync Theme setting on load
function initTheme() {
  const savedTheme = localStorage.getItem("kf-theme") || "light";
  AppState.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.innerHTML = savedTheme === "dark" 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }
}

// Load persistable elements
function loadStateFromStorage() {
  const savedBookmarks = localStorage.getItem("kf-bookmarks");
  if (savedBookmarks) {
    AppState.bookmarks = JSON.parse(savedBookmarks);
  }
  const savedPrefs = localStorage.getItem("kf-preferences");
  if (savedPrefs) {
    AppState.preferences = JSON.parse(savedPrefs);
  }
  const savedHistory = localStorage.getItem("kf-history");
  if (savedHistory) {
    AppState.readHistory = JSON.parse(savedHistory);
  }
  const savedStreak = localStorage.getItem("kf-streak");
  if (savedStreak) {
    AppState.streakCount = parseInt(savedStreak);
  }
  const savedLearn = localStorage.getItem("kf-learn-today");
  if (savedLearn) {
    AppState.learnToday = JSON.parse(savedLearn);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar navigation routes
  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const view = link.getAttribute("data-view");
      navigateTo(view);
    });
  });

  // Landing page CTA
  const getStartedBtn = document.getElementById("get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      navigateTo("dashboard");
    });
  }
  
  const viewDemoBtn = document.getElementById("view-demo-btn");
  if (viewDemoBtn) {
    viewDemoBtn.addEventListener("click", () => {
      navigateTo("dashboard");
    });
  }

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      toggleTheme();
    });
  }

  // Landing FAQ toggles
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Modal close buttons
  const modalOverlay = document.getElementById("detail-modal-overlay");
  const modalClose = document.getElementById("modal-close-btn");
  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // Global search input
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      // If we are in Knowledge Vault, search there. Otherwise routing to Vault.
      if (AppState.currentView !== "vault") {
        navigateTo("vault");
        const vaultSearch = document.getElementById("vault-search");
        if (vaultSearch) {
          vaultSearch.value = query;
          renderVault();
        }
      } else {
        renderVault();
      }
    });
  }

  // Preferences save buttons
  const savePrefsBtn = document.getElementById("save-preferences");
  if (savePrefsBtn) {
    savePrefsBtn.addEventListener("click", () => {
      saveUserPreferences();
    });
  }

  // Hash change routing support
  window.addEventListener("hashchange", handleRouting);
}

// Routing Engine
function handleRouting() {
  const hash = window.location.hash.substring(1);
  if (["dashboard", "daily-brief", "vault", "analytics", "preferences"].includes(hash)) {
    switchView(hash);
  } else {
    switchView("landing");
  }
}

function navigateTo(view) {
  window.location.hash = view;
}

function switchView(view) {
  AppState.currentView = view;
  
  const landingView = document.getElementById("landing-view");
  const appView = document.getElementById("app-view");

  if (view === "landing") {
    landingView.style.display = "block";
    appView.style.display = "none";
  } else {
    landingView.style.display = "none";
    appView.style.display = "grid";
    
    // Highlight sidebar active link
    document.querySelectorAll(".sidebar-link").forEach(link => {
      if (link.getAttribute("data-view") === view) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Toggle specific view pane active
    document.querySelectorAll(".view-container").forEach(container => {
      if (container.id === `${view}-view`) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    });

    // Populate data for target view
    if (view === "dashboard") renderDashboard();
    if (view === "daily-brief") renderDailyBrief();
    if (view === "vault") renderVault();
    if (view === "analytics") renderAnalytics();
    if (view === "preferences") renderPreferences();
  }
}

// Toggle Theme
function toggleTheme() {
  const nextTheme = AppState.theme === "light" ? "dark" : "light";
  AppState.theme = nextTheme;
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("kf-theme", nextTheme);
  
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.innerHTML = nextTheme === "dark" 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }
  showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, "info");
}

// ==========================================
// Rendering Engine - Dashboard View
// ==========================================
function renderDashboard() {
  // Update header reading time estimation
  const readingEst = document.getElementById("reading-time-est");
  if (readingEst) {
    readingEst.textContent = "Estimated reading: 12 mins";
  }

  // Render Stats
  const articlesCount = ARTICLES_DB.length;
  const aiCount = ARTICLES_DB.filter(a => a.category === "Artificial Intelligence" || a.category === "Enterprise AI").length;
  const paperCount = ARTICLES_DB.filter(a => a.category === "Research Papers").length;

  document.getElementById("stat-articles-today").textContent = articlesCount;
  document.getElementById("stat-ai-concepts").textContent = aiCount;
  document.getElementById("stat-research-papers").textContent = paperCount;

  // Split articles by groups
  const headlines = ARTICLES_DB.filter(a => a.importance === "high" && !a.isLongRead);
  const regularArticles = ARTICLES_DB.filter(a => a.importance !== "high" && !a.isLongRead);

  // Render headlines stack
  const headlinesStack = document.getElementById("headlines-stack");
  if (headlinesStack) {
    headlinesStack.innerHTML = headlines.map(art => renderArticleCardHtml(art)).join("");
  }

  // Render category sections mapping
  const categoryStacks = document.getElementById("category-stacks");
  if (categoryStacks) {
    categoryStacks.innerHTML = `
      <div class="section-group-title"><i class="fa-solid fa-microchip"></i> Technology & Innovation Updates</div>
      <div class="articles-stack">
        ${regularArticles.map(art => renderArticleCardHtml(art)).join("")}
      </div>
    `;
  }

  // Render Tool of the Day
  const toolContainer = document.getElementById("tool-of-the-day-widget");
  if (toolContainer) {
    toolContainer.innerHTML = `
      <div class="tool-header">
        <div class="tool-icon"><i class="${TOOL_OF_THE_DAY.iconClass}"></i></div>
        <div>
          <div class="tool-title">${TOOL_OF_THE_DAY.name}</div>
          <a href="https://${TOOL_OF_THE_DAY.url}" target="_blank" class="article-source"><i class="fa-solid fa-up-right-from-square"></i> ${TOOL_OF_THE_DAY.url}</a>
        </div>
      </div>
      <p>${TOOL_OF_THE_DAY.desc}</p>
    `;
  }

  // Render Learn Today items
  renderLearnToday();

  // Render Long Read
  const longRead = ARTICLES_DB.find(a => a.isLongRead);
  const longReadContainer = document.getElementById("long-read-widget");
  if (longRead && longReadContainer) {
    longReadContainer.innerHTML = `
      <div class="long-read-card" onclick="viewArticleDetail('${longRead.id}')">
        <span class="badge" style="margin-bottom: auto;">LONG READ • ${longRead.readTime}</span>
        <h4>${longRead.title}</h4>
        <p>${longRead.summary}</p>
      </div>
    `;
  }
}

function renderLearnToday() {
  const container = document.getElementById("learn-today-list-widget");
  if (!container) return;

  container.innerHTML = AppState.learnToday.map(item => `
    <div class="learn-item">
      <div class="learn-checkbox ${item.completed ? 'checked' : ''}" onclick="toggleLearnItem('${item.id}')">
        <i class="fa-solid fa-check"></i>
      </div>
      <div class="learn-content">
        <div class="learn-title">${item.title}</div>
      </div>
    </div>
  `).join("");
}

function toggleLearnItem(id) {
  const idx = AppState.learnToday.findIndex(i => i.id === id);
  if (idx !== -1) {
    AppState.learnToday[idx].completed = !AppState.learnToday[idx].completed;
    localStorage.setItem("kf-learn-today", JSON.stringify(AppState.learnToday));
    renderLearnToday();
    showToast(AppState.learnToday[idx].completed ? "Task checked off!" : "Task reactivated", "success");
  }
}

// Generate Card HTML
function renderArticleCardHtml(art) {
  const isBookmarked = AppState.bookmarks.includes(art.id);
  const bookmarkClass = isBookmarked ? "active" : "";
  const bookmarkIcon = isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark";
  const catBadgeClass = getCategoryBadgeClass(art.category);

  return `
    <div class="article-card" onclick="handleCardClick(event, '${art.id}')">
      <div class="article-card-header">
        <div class="article-meta-top">
          <span class="badge ${catBadgeClass}">${art.category}</span>
          <span class="importance-dot importance-${art.importance}"></span>
        </div>
        <div class="article-card-actions">
          <button class="bookmark-btn ${bookmarkClass}" onclick="toggleBookmark(event, '${art.id}')" title="Read Later">
            <i class="${bookmarkIcon}"></i>
          </button>
          <button onclick="shareArticle(event, '${art.id}')" title="Share">
            <i class="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>
      <div class="article-card-body">
        <h3>${art.title}</h3>
        <p>${art.summary}</p>
      </div>
      <div class="article-card-footer">
        <div class="article-source">
          <i class="fa-regular fa-newspaper"></i> ${art.source}
        </div>
        <div>
          <span>${art.publishedTime}</span>
          <span style="margin: 0 6px;">•</span>
          <span>${art.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

function getCategoryBadgeClass(cat) {
  switch (cat) {
    case "Artificial Intelligence":
    case "Enterprise AI":
      return "badge-ai";
    case "Cloud Computing":
      return "badge-cloud";
    case "Programming":
      return "badge-prog";
    case "Cybersecurity":
      return "badge-sec";
    case "Research Papers":
      return "badge-res";
    case "Startups":
      return "badge-startup";
    case "Career & Placement Watch":
      return "badge-career";
    default:
      return "badge-ai";
  }
}

function handleCardClick(event, id) {
  // Prevent modal opening when clicking buttons
  if (event.target.closest("button")) return;
  viewArticleDetail(id);
}

// ==========================================
// Rendering Engine - Daily Brief View
// ==========================================
function renderDailyBrief() {
  const container = document.getElementById("brief-articles-container");
  if (!container) return;

  // Newspaper Header date sync
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayStr = new Date().toLocaleDateString("en-US", options);
  document.getElementById("brief-date").textContent = todayStr;

  // Add dynamic Quote
  const quoteText = document.getElementById("brief-quote-text");
  const quoteAuthor = document.getElementById("brief-quote-author");
  if (quoteText && quoteAuthor) {
    quoteText.textContent = `"${QUOTE_OF_THE_DAY.text}"`;
    quoteAuthor.textContent = `— ${QUOTE_OF_THE_DAY.author}`;
  }

  // Filter based on selected preferences (Interests)
  const usersInterests = AppState.preferences.interests;
  const filtered = ARTICLES_DB.filter(a => usersInterests.includes(a.category));

  const displayList = filtered.length > 0 ? filtered : ARTICLES_DB.slice(0, 5);

  container.innerHTML = displayList.map(art => `
    <article class="editorial-article" onclick="viewArticleDetail('${art.id}')" style="cursor: pointer;">
      <h3 class="editorial-title">${art.title}</h3>
      <div class="editorial-meta">
        ${art.category} • By ${art.source} • ${art.readTime}
      </div>
      <p class="editorial-body">
        ${art.fullContent}
      </p>
    </article>
  `).join("<hr style='border: 0; border-top: 1px dashed #dcdbd3; margin: 24px 0;'>");

  // Setup Download PDF trigger
  const printBtn = document.getElementById("btn-print-brief");
  if (printBtn) {
    printBtn.replaceWith(printBtn.cloneNode(true)); // Clean listener
    document.getElementById("btn-print-brief").addEventListener("click", () => {
      triggerBriefPrint();
    });
  }
}

function triggerBriefPrint() {
  showToast("Compiling Daily Brief PDF...", "info");
  setTimeout(() => {
    // Open standard browser print window or download simulated document
    window.print();
  }, 1000);
}

// ==========================================
// Rendering Engine - Knowledge Vault View
// ==========================================
let currentVaultCategory = "all";
let vaultPage = 1;
const itemsPerPage = 6;

function renderVault() {
  const grid = document.getElementById("vault-grid");
  const searchInput = document.getElementById("vault-search");
  if (!grid) return;

  const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";

  // Filter Database
  let filtered = ARTICLES_DB.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery) || 
                          art.summary.toLowerCase().includes(searchQuery) ||
                          art.relatedTopics.some(t => t.toLowerCase().includes(searchQuery));
    
    let matchesCategory = true;
    if (currentVaultCategory === "saved") {
      matchesCategory = AppState.bookmarks.includes(art.id);
    } else if (currentVaultCategory !== "all") {
      matchesCategory = art.category === currentVaultCategory;
    }

    return matchesSearch && matchesCategory;
  });

  // Add dynamic pagination logic
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  if (vaultPage > totalPages) vaultPage = totalPages;

  const startIdx = (vaultPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIdx, startIdx + itemsPerPage);

  if (paginated.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-box-open"></i>
        <h3>No processed articles found</h3>
        <p>Try refining your search terms or selecting a different category chip.</p>
      </div>
    `;
    document.getElementById("vault-pagination").innerHTML = "";
    return;
  }

  // Render cards
  grid.innerHTML = paginated.map(art => renderArticleCardHtml(art)).join("");

  // Render pagination controls
  renderVaultPagination(totalPages);

  // Bind category chips event handlers dynamically on refresh if needed
  setupVaultChips();
}

function setupVaultChips() {
  document.querySelectorAll(".vault-filters .chip").forEach(chip => {
    chip.replaceWith(chip.cloneNode(true)); // Clear listeners
  });

  document.querySelectorAll(".vault-filters .chip").forEach(chip => {
    const cat = chip.getAttribute("data-cat");
    // Set active class
    if (cat === currentVaultCategory) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }

    chip.addEventListener("click", () => {
      currentVaultCategory = cat;
      vaultPage = 1;
      renderVault();
    });
  });
}

function renderVaultPagination(totalPages) {
  const container = document.getElementById("vault-pagination");
  if (!container) return;

  let html = `
    <button class="btn btn-secondary" ${vaultPage === 1 ? 'disabled' : ''} onclick="changeVaultPage(${vaultPage - 1})">
      <i class="fa-solid fa-chevron-left"></i> Prev
    </button>
    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-secondary);">Page ${vaultPage} of ${totalPages}</span>
    <button class="btn btn-secondary" ${vaultPage === totalPages ? 'disabled' : ''} onclick="changeVaultPage(${vaultPage + 1})">
      Next <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;
  container.innerHTML = html;
}

window.changeVaultPage = function(page) {
  vaultPage = page;
  renderVault();
  document.querySelector(".app-content").scrollTop = 0;
};

// ==========================================
// Rendering Engine - Analytics View
// ==========================================
function renderAnalytics() {
  // Update streak display
  document.getElementById("analytics-streak-val").textContent = AppState.streakCount;
  document.getElementById("analytics-total-read").textContent = AppState.readHistory.length;

  // Highlight favorite category based on history or interests
  const favTopic = AppState.preferences.interests[0] || "Artificial Intelligence";
  document.getElementById("analytics-fav-topic").textContent = favTopic;

  // Render Streak Grid
  renderStreakCalendar();

  // Render Charts
  drawWeeklyActivityChart();
  drawCategoryDistributionChart();
  drawLearningProgressChart();
}

function renderStreakCalendar() {
  const calendar = document.getElementById("streak-calendar-grid");
  if (!calendar) return;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
  const normalizedDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1; // Mon=0, Sun=6

  calendar.innerHTML = days.map((day, idx) => {
    // Check if the user read on this day. We simulate past days checked.
    const isActive = idx < normalizedDayIndex || (idx === normalizedDayIndex && AppState.readHistory.length > 0);
    const activeClass = isActive ? "active" : "";
    return `
      <div class="day-cell ${activeClass}">
        ${day}
      </div>
    `;
  }).join("");
}

// Draw dynamic responsive SVG charts
function drawWeeklyActivityChart() {
  const container = document.getElementById("weekly-activity-chart");
  if (!container) return;

  // Mock activity values (articles read Mon-Sun)
  const data = [2, 4, 3, 5, AppState.readHistory.length || 1, 0, 0];
  const maxVal = Math.max(...data, 5);
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  // Create SVG string
  let barsHtml = "";
  const svgWidth = 320;
  const svgHeight = 180;
  const padding = 30;
  const chartHeight = svgHeight - (padding * 2);
  const barWidth = 24;
  const gap = (svgWidth - (padding * 2) - (barWidth * 7)) / 6;

  for (let i = 0; i < 7; i++) {
    const x = padding + i * (barWidth + gap);
    const normalizedVal = (data[i] / maxVal) * chartHeight;
    const y = svgHeight - padding - normalizedVal;
    
    // Bar
    barsHtml += `
      <rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${normalizedVal}" rx="4">
        <title>Read: ${data[i]}</title>
      </rect>
      <text class="chart-text" x="${x + barWidth/2}" y="${svgHeight - 10}" text-anchor="middle">${days[i]}</text>
      <text class="chart-text" x="${x + barWidth/2}" y="${y - 6}" text-anchor="middle" font-weight="bold">${data[i]}</text>
    `;
  }

  container.innerHTML = `
    <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
      <!-- Baseline -->
      <line x1="${padding}" y1="${svgHeight - padding}" x2="${svgWidth - padding}" y2="${svgHeight - padding}" class="chart-axis"></line>
      ${barsHtml}
    </svg>
  `;
}

function drawCategoryDistributionChart() {
  const container = document.getElementById("category-dist-chart");
  if (!container) return;

  // Compute category distributions from bookmarks + preferences
  const counts = {};
  ARTICLES_DB.forEach(a => {
    counts[a.category] = (counts[a.category] || 0) + 1;
  });

  const categories = Object.keys(counts).slice(0, 5);
  const maxVal = Math.max(...categories.map(c => counts[c]));

  let barsHtml = "";
  const svgWidth = 320;
  const svgHeight = 180;
  const padding = 20;
  const labelWidth = 100;
  const chartWidth = svgWidth - padding - labelWidth - 30;
  const barHeight = 16;
  const gap = 12;

  categories.forEach((cat, i) => {
    const y = padding + i * (barHeight + gap);
    const normalizedVal = (counts[cat] / maxVal) * chartWidth;
    
    // Crop long names
    const displayName = cat.length > 15 ? cat.substring(0, 13) + "..." : cat;

    barsHtml += `
      <text class="chart-text" x="${padding}" y="${y + 12}" text-anchor="start" font-weight="500">${displayName}</text>
      <rect class="chart-bar" x="${padding + labelWidth}" y="${y}" width="${normalizedVal}" height="${barHeight}" rx="3">
        <title>${cat}: ${counts[cat]} items</title>
      </rect>
      <text class="chart-text" x="${padding + labelWidth + normalizedVal + 8}" y="${y + 12}" font-weight="bold">${counts[cat]}</text>
    `;
  });

  container.innerHTML = `
    <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
      ${barsHtml}
    </svg>
  `;
}

function drawLearningProgressChart() {
  const container = document.getElementById("learning-progress-chart");
  if (!container) return;

  // Draw a smooth line chart mapping knowledge level over past weeks
  const points = [15, 30, 45, 42, 60, 85, 92]; // simulated cumulative index
  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7"];
  const svgWidth = 320;
  const svgHeight = 180;
  const padding = 30;
  
  const chartWidth = svgWidth - (padding * 2);
  const chartHeight = svgHeight - (padding * 2);
  const xStep = chartWidth / (points.length - 1);
  const maxVal = 100;

  let pointsStr = "";
  let gradientPointsStr = `${padding},${svgHeight - padding} `;
  let markersHtml = "";

  points.forEach((val, idx) => {
    const x = padding + idx * xStep;
    const y = svgHeight - padding - (val / maxVal) * chartHeight;
    pointsStr += `${x},${y} `;
    gradientPointsStr += `${x},${y} `;
    
    // Label day
    markersHtml += `
      <circle cx="${x}" cy="${y}" r="4" fill="var(--primary)" stroke="var(--bg-secondary)" stroke-width="2"></circle>
      <text class="chart-text" x="${x}" y="${svgHeight - 10}" text-anchor="middle">${weeks[idx]}</text>
    `;
  });

  gradientPointsStr += `${padding + (points.length - 1) * xStep},${svgHeight - padding}`;

  container.innerHTML = `
    <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
      <defs>
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      
      <!-- Gridlines -->
      <line x1="${padding}" y1="${padding}" x2="${svgWidth - padding}" y2="${padding}" stroke="var(--border-color)" stroke-dasharray="4 4" stroke-width="0.5"></line>
      <line x1="${padding}" y1="${padding + chartHeight/2}" x2="${svgWidth - padding}" y2="${padding + chartHeight/2}" stroke="var(--border-color)" stroke-dasharray="4 4" stroke-width="0.5"></line>
      
      <!-- Filled Area -->
      <polygon points="${gradientPointsStr}" class="chart-line-gradient"></polygon>
      
      <!-- Trendline -->
      <polyline points="${pointsStr}" class="chart-line"></polyline>
      
      <!-- Axis Lines -->
      <line x1="${padding}" y1="${svgHeight - padding}" x2="${svgWidth - padding}" y2="${svgHeight - padding}" class="chart-axis"></line>
      
      ${markersHtml}
    </svg>
  `;
}

// ==========================================
// Rendering Engine - Preferences View
// ==========================================
function renderPreferences() {
  // Interest Selection grid setup
  const container = document.getElementById("interests-selection-grid");
  if (!container) return;

  const allTopics = [
    "Artificial Intelligence", "Enterprise AI", "Cloud Computing",
    "Programming", "Cybersecurity", "Research Papers", "Startups", "Career & Placement Watch"
  ];

  container.innerHTML = allTopics.map(topic => {
    const isSelected = AppState.preferences.interests.includes(topic);
    const selectedClass = isSelected ? "selected" : "";
    return `
      <div class="interest-tag ${selectedClass}" onclick="togglePreferenceInterest('${topic}')">
        ${topic}
      </div>
    `;
  }).join("");

  // Populate basic inputs
  document.getElementById("pref-delivery-time").value = AppState.preferences.deliveryTime;
  document.getElementById("pref-pdf-style").value = AppState.preferences.pdfPreference;
  document.getElementById("pref-email-addr").value = AppState.preferences.emailAddress;

  // Toggle checks
  document.getElementById("check-email").checked = AppState.preferences.notifications.email;
  document.getElementById("check-push").checked = AppState.preferences.notifications.push;
  document.getElementById("check-weekly").checked = AppState.preferences.notifications.weeklyReport;

  // Set initial preference sidebar button highlights
  document.querySelectorAll(".pref-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pref-nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`Selected preferences panel: ${btn.textContent.trim()}`, "info");
    });
  });
}

function togglePreferenceInterest(topic) {
  const interests = AppState.preferences.interests;
  const idx = interests.indexOf(topic);
  if (idx !== -1) {
    // Remove it but keep at least one
    if (interests.length > 1) {
      interests.splice(idx, 1);
    } else {
      showToast("Keep at least one topic selected to deliver briefings!", "warning");
      return;
    }
  } else {
    interests.push(topic);
  }
  renderPreferences();
}

function saveUserPreferences() {
  const deliveryTime = document.getElementById("pref-delivery-time").value;
  const pdfStyle = document.getElementById("pref-pdf-style").value;
  const emailAddr = document.getElementById("pref-email-addr").value;

  const emailNotify = document.getElementById("check-email").checked;
  const pushNotify = document.getElementById("check-push").checked;
  const weeklyNotify = document.getElementById("check-weekly").checked;

  AppState.preferences.deliveryTime = deliveryTime;
  AppState.preferences.pdfPreference = pdfStyle;
  AppState.preferences.emailAddress = emailAddr;
  AppState.preferences.notifications = {
    email: emailNotify,
    push: pushNotify,
    weeklyReport: weeklyNotify
  };

  localStorage.setItem("kf-preferences", JSON.stringify(AppState.preferences));
  showToast("Your settings have been saved!", "success");
}

// ==========================================
// Article Detail Modal View Trigger
// ==========================================
function viewArticleDetail(id) {
  const art = ARTICLES_DB.find(a => a.id === id);
  if (!art) return;

  // Add to reading history if not read
  if (!AppState.readHistory.includes(id)) {
    AppState.readHistory.push(id);
    localStorage.setItem("kf-history", JSON.stringify(AppState.readHistory));

    // Increase reading streak on viewing details!
    // Since reading a daily article marks activity, let's increment and notify
    AppState.streakCount += 1;
    localStorage.setItem("kf-streak", AppState.streakCount);

    showToast("Reading streak updated! Keep learning.", "success");
  }

  // Populate Modal Fields
  const modal = document.getElementById("detail-modal-overlay");
  
  // Set category and dots
  const catBadgeClass = getCategoryBadgeClass(art.category);
  document.getElementById("modal-category-badge").className = `badge ${catBadgeClass}`;
  document.getElementById("modal-category-badge").textContent = art.category;
  document.getElementById("modal-importance").className = `importance-dot importance-${art.importance}`;

  document.getElementById("modal-title").textContent = art.title;
  document.getElementById("modal-author").innerHTML = `<i class="fa-regular fa-newspaper"></i> Published by <strong>${art.source}</strong>`;
  document.getElementById("modal-date").textContent = `${art.dateString} • ${art.readTime}`;

  document.getElementById("modal-ai-summary").textContent = art.summary;
  document.getElementById("modal-why-matters").textContent = art.whyItMatters;

  // Takeaways
  document.getElementById("modal-takeaways").innerHTML = art.takeaways.map(t => `<li>${t}</li>`).join("");

  // Related topics
  document.getElementById("modal-topics").innerHTML = art.relatedTopics.map(t => `<span class="topic-tag">#${t}</span>`).join("");

  // Set action buttons state
  const isBookmarked = AppState.bookmarks.includes(art.id);
  const bookmarkBtn = document.getElementById("modal-bookmark-action");
  if (bookmarkBtn) {
    bookmarkBtn.className = isBookmarked ? "btn btn-icon active" : "btn btn-icon";
    bookmarkBtn.innerHTML = isBookmarked ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
    // Re-bind actions
    bookmarkBtn.replaceWith(bookmarkBtn.cloneNode(true));
    document.getElementById("modal-bookmark-action").addEventListener("click", (e) => {
      toggleBookmark(e, art.id);
      // Toggle button visual state
      const isNowBookmarked = AppState.bookmarks.includes(art.id);
      const btn = document.getElementById("modal-bookmark-action");
      btn.className = isNowBookmarked ? "btn btn-icon active" : "btn btn-icon";
      btn.innerHTML = isNowBookmarked ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
    });
  }

  const shareBtn = document.getElementById("modal-share-action");
  if (shareBtn) {
    shareBtn.replaceWith(shareBtn.cloneNode(true));
    document.getElementById("modal-share-action").addEventListener("click", (e) => {
      shareArticle(e, art.id);
    });
  }

  // Similar articles grid loading
  const similarGrid = document.getElementById("modal-similar-grid");
  if (similarGrid) {
    const similar = ARTICLES_DB.filter(a => a.category === art.category && a.id !== art.id).slice(0, 2);
    
    if (similar.length > 0) {
      similarGrid.innerHTML = similar.map(s => `
        <div class="similar-card" onclick="viewArticleDetail('${s.id}')">
          <h5>${s.title}</h5>
          <span>${s.source} • ${s.readTime}</span>
        </div>
      `).join("");
    } else {
      // Fallback similar
      const backupSimilar = ARTICLES_DB.filter(a => a.id !== art.id).slice(0, 2);
      similarGrid.innerHTML = backupSimilar.map(s => `
        <div class="similar-card" onclick="viewArticleDetail('${s.id}')">
          <h5>${s.title}</h5>
          <span>${s.source} • ${s.readTime}</span>
        </div>
      `).join("");
    }
  }

  // Open Modal
  modal.classList.add("active");
}

// ==========================================
// Interactive Actions (Bookmark, Share, Toast)
// ==========================================
function toggleBookmark(event, id) {
  event.stopPropagation(); // Avoid triggering card click triggers
  
  const idx = AppState.bookmarks.indexOf(id);
  if (idx !== -1) {
    // Unbookmark
    AppState.bookmarks.splice(idx, 1);
    showToast("Article removed from Read Later", "info");
  } else {
    // Bookmark
    AppState.bookmarks.push(id);
    showToast("Article saved to Read Later", "success");
  }

  // Persist
  localStorage.setItem("kf-bookmarks", JSON.stringify(AppState.bookmarks));

  // Rerender active views to sync check states
  if (AppState.currentView === "dashboard") renderDashboard();
  if (AppState.currentView === "vault") renderVault();
}

function shareArticle(event, id) {
  event.stopPropagation();
  const art = ARTICLES_DB.find(a => a.id === id);
  if (!art) return;

  const shareText = `Check out this briefing on KnowFlow: "${art.title}"`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(`${shareText} - https://knowflow.ai/brief/${art.id}`).then(() => {
      showToast("Link copied to clipboard!", "success");
    }).catch(() => {
      showToast("Sharing failed", "warning");
    });
  } else {
    showToast("Link copied to clipboard!", "success");
  }
}

// Toast Controller
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container-box");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-info-circle";
  if (type === "success") icon = "fa-check-circle";
  if (type === "warning") icon = "fa-exclamation-circle";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation frame to guarantee slide-in
  setTimeout(() => {
    toast.classList.add("active");
  }, 50);

  // Auto clean up after delay
  setTimeout(() => {
    toast.classList.remove("active");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
