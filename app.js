const styles = [
  // 01–50 Apple-inspired
  ["Liquid Glass Capsule","Apple-inspired","Floating translucent capsule with soft refraction and restrained edge highlights."],
  ["iOS Floating Tab Bar","Apple-inspired","Compact rounded top-level destinations floating independently above content."],
  ["iOS Prominent Tab","Apple-inspired","A standard tab group with one visually anchored primary destination."],
  ["Adaptive Tab-to-Sidebar","Apple-inspired","The same navigation model morphs from tabs into a sidebar as width grows."],
  ["macOS Toolbar","Apple-inspired","Window-level toolbar with navigation, title context, and utility actions."],
  ["macOS Unified Toolbar","Apple-inspired","Navigation, title, search, and actions share one calm system surface."],
  ["Safari-Style Minimal Bar","Apple-inspired","Almost no chrome; content stays dominant while controls remain compact."],
  ["Finder Sidebar + Toolbar","Apple-inspired","Persistent hierarchy on the left with a lightweight action toolbar above."],
  ["Mail-Style Three-Zone Navigation","Apple-inspired","Global sidebar, contextual list navigation, and detail content stay distinct."],
  ["Settings Sidebar","Apple-inspired","Quiet information-dense sidebar with grouped sections and selected-row emphasis."],
  ["Spotlight Command Surface","Apple-inspired","Global navigation hides behind a focused, searchable command surface."],
  ["Command-K Glass","Apple-inspired","Keyboard-first navigation trigger presented as a floating command capsule."],
  ["Large-Title Collapse","Apple-inspired","Large identity at the top smoothly becomes a compact navigation title on scroll."],
  ["Scroll-Minimized Navigation","Apple-inspired","The navbar compresses while reading and restores itself when interaction returns."],
  ["Scroll-Edge Glass","Apple-inspired","Navigation gains separation only as page content passes beneath it."],
  ["Frosted System Rail","Apple-inspired","A translucent vertical navigation rail floating independently from the viewport edge."],
  ["Sidebar-as-Overlay","Apple-inspired","Context navigation can cover content temporarily without permanently reflowing it."],
  ["Floating Sidebar","Apple-inspired","Inset rounded sidebar with generous margins and minimal visual noise."],
  ["Compact Icon Rail","Apple-inspired","Narrow symbol-focused rail expands to labels when needed."],
  ["Mac Finder Column Rail","Apple-inspired","Hierarchical navigation progresses across columns instead of stacked dropdowns."],
  ["Safari Segmented Control","Apple-inspired","Compact segmented navigator with a moving selection capsule."],
  ["iOS Picker Strip","Apple-inspired","Horizontally scrolling destinations with the selected item as the visual anchor."],
  ["Toolbar Segments","Apple-inspired","Navigation and actions share a segmented control system."],
  ["Apple TV Focus Navigation","Apple-inspired","Large spatial targets with strong focus states and directional movement."],
  ["watchOS Compact Ring","Apple-inspired","Tiny task-focused navigation relying on recognizable symbols and context."],
  ["visionOS Spatial Bar","Apple-inspired","Floating navigation plane with translucency, depth, and contextual placement."],
  ["visionOS Ornament","Apple-inspired","Controls sit around an app surface as detached spatial ornaments."],
  ["Spatial Sidebar","Apple-inspired","A sidebar-like surface that floats beside content instead of becoming a hard column."],
  ["Glass Island","Apple-inspired","Detached identity, links, search, and account controls in one polished island."],
  ["Glass Dock","Apple-inspired","Side or bottom navigation shaped like a refined application dock."],
  ["Dock + Utility Bar","Apple-inspired","Primary destinations in a dock while global tools stay in a quiet utility strip."],
  ["Handoff Header","Apple-inspired","Navigation transitions between contexts like one continuous product experience."],
  ["Apple Store Product Nav","Apple-inspired","Minimal global shell with compact contextual controls around visual content."],
  ["Product-Page Floating Nav","Apple-inspired","Overlay navigation gains contrast dynamically over rich media."],
  ["Editorial Apple Header","Apple-inspired","Typography-first navigation with restrained controls and generous space."],
  ["SF Symbols Icon Text","Apple-inspired","Small familiar symbols support labels without turning the shell into an icon dashboard."],
  ["Dense macOS Pro Toolbar","Apple-inspired","Higher information density while keeping strict grouping and predictable placement."],
  ["Contextual Toolbar","Apple-inspired","Available navigation and actions adapt to the current object or task."],
  ["Selection Toolbar","Apple-inspired","The global shell temporarily becomes an action surface for selected content."],
  ["Search-First Header","Apple-inspired","Search acts as the primary gateway while destinations become secondary."],
  ["Utility-Right Header","Apple-inspired","Brand and destinations stay left while high-value utilities remain isolated right."],
  ["Split Title Header","Apple-inspired","Back controls left, identity centered, and context actions right."],
  ["Floating Back Control","Apple-inspired","A tiny translucent back action floats independently over content."],
  ["Breadcrumb Path Control","Apple-inspired","Hierarchy appears as a compact path control instead of a standard breadcrumb row."],
  ["Capsule Menu","Apple-inspired","A compact capsule expands into contextual navigation with a smooth morph."],
  ["Morphing Tab Bar","Apple-inspired","The active background physically travels between top-level destinations."],
  ["Context Morph Navbar","Apple-inspired","The shell subtly changes shape, density, and actions according to route context."],
  ["Adaptive Glass Header","Apple-inspired","Desktop, tablet, and mobile share one model while proportions and placement adapt."],
  ["Monochrome Apple Pro","Apple-inspired","Near-black and white, precise type, tiny separators, and almost no visual noise."],
  ["Apple Future Hybrid","Apple-inspired","A synthesis of floating glass, adaptive tabs, contextual tools, and spatial depth."],

  // 51–150
  ["Material 3 Top App Bar","Enterprise / product systems","Clear title hierarchy, restrained elevation, navigation icon, and context actions."],
  ["Material Navigation Rail","Enterprise / product systems","Compact vertical navigation tuned for medium-width applications."],
  ["Material Navigation Drawer","Enterprise / product systems","Full-height navigation drawer for larger route hierarchies."],
  ["Fluent Top Navigation","Enterprise / product systems","Clean horizontal navigation with practical utility controls."],
  ["Fluent Vertical Navigation","Enterprise / product systems","Modern enterprise sidebar with nested groups and compact density."],
  ["Carbon UI Shell","Enterprise / product systems","Persistent product header with optional side navigation for complex systems."],
  ["Atlassian Product Shell","Enterprise / product systems","Product switcher, workspace navigation, contextual tabs, and utility controls."],
  ["Shopify Admin Shell","Enterprise / product systems","Operational navigation around stores, resources, search, and management tasks."],
  ["GitHub Utility Header","Enterprise / product systems","Brand anchor, primary destinations, global search, and account actions."],
  ["GitLab Dense Header","Enterprise / product systems","Compact enterprise navigation prioritizing projects, search, and utilities."],
  ["Salesforce Workspace Header","Enterprise / product systems","App switcher, object navigation, and utility region for complex workflows."],
  ["Linear Command Header","Enterprise / product systems","Minimal shell centered on keyboard shortcuts and command navigation."],
  ["Notion Workspace Sidebar","Enterprise / product systems","Persistent workspace hierarchy with nested pages and expandable groups."],
  ["Slack Workspace Rail","Enterprise / product systems","Strong workspace identity combined with channel hierarchy and utilities."],
  ["Discord Server Rail","Enterprise / product systems","Icon-dominant vertical navigation with grouped destinations and badges."],
  ["Figma Tool Shell","Enterprise / product systems","File context, product identity, and dense tools in one shell."],
  ["Vercel Console Header","Enterprise / product systems","Minimal project shell with search, status, and account controls."],
  ["AWS Console Utility Shell","Enterprise / product systems","Very high-density navigation for a huge product surface."],
  ["Google Material Workspace","Enterprise / product systems","App identity, central search, contextual navigation, and account controls."],
  ["Microsoft 365 Suite Bar","Enterprise / product systems","Application switching and global utilities above product navigation."],

  ["Magazine Masthead","Editorial / content","Oversized publication identity with a thin navigation line beneath."],
  ["Newspaper Rail","Editorial / content","Dense horizontal categories inspired by serious news publications."],
  ["Luxury Editorial","Editorial / content","Huge type, extreme whitespace, thin rules, and almost no chrome."],
  ["Fashion Runway Nav","Editorial / content","Asymmetric typography and oversized labels with image-driven transitions."],
  ["Art Gallery Header","Editorial / content","Navigation fades into the composition and returns on interaction."],
  ["Portfolio Filmstrip","Editorial / content","Horizontal navigation built from project thumbnails or visual cards."],
  ["Minimalist Typewriter","Editorial / content","Monospaced labels, tiny controls, and rigorous alignment."],
  ["Book Spine Nav","Editorial / content","Vertical labels arrange like book spines and open into page navigation."],
  ["Magazine Index Dock","Editorial / content","Floating edge index whose active state follows reading position."],
  ["Editorial Split Header","Editorial / content","Publication title left, categories center, account utility right."],

  ["Neo-Brutalist Bar","Brutalist / experimental","Hard edges, bold type, strong borders, and direct controls."],
  ["Raw HTML Revival","Brutalist / experimental","Obvious links, minimal decoration, and deliberately plain structure."],
  ["Swiss Grid Nav","Brutalist / experimental","Strict grid alignment, oversized type, asymmetric whitespace."],
  ["International Typographic Nav","Brutalist / experimental","Typography and spacing become the primary navigation system."],
  ["Bauhaus Geometry","Brutalist / experimental","Simple geometric blocks define navigation hierarchy."],
  ["Constructivist Nav","Brutalist / experimental","Angular compositions, arrows, and strong directional hierarchy."],
  ["Broken Grid Header","Brutalist / experimental","Navigation breaks expected alignment while keeping routes legible."],
  ["Cursor-Tracked Nav","Brutalist / experimental","Items subtly respond to pointer location through controlled movement."],
  ["Magnetic Navbar","Brutalist / experimental","Buttons gently attract toward the pointer then settle back."],
  ["Elastic Navigation","Brutalist / experimental","Active controls stretch and compress like a physical interface."],

  ["Holographic HUD","Futuristic / sci-fi","Transparent layers, thin rules, targets, and floating controls."],
  ["Tactical HUD","Futuristic / sci-fi","Status readouts, hard divisions, telemetry labels, and restrained motion."],
  ["Spaceship Console","Futuristic / sci-fi","Navigation resembles a spacecraft control panel with system modes."],
  ["Cyberdeck","Futuristic / sci-fi","Monospace commands, status marks, and terminal-like transitions."],
  ["Orbital Nav","Futuristic / sci-fi","Destinations orbit a central identity or selected route."],
  ["Radial Command Menu","Futuristic / sci-fi","Primary navigation follows a circular or semi-circular control."],
  ["Sci-Fi Rail","Futuristic / sci-fi","Long vertical rail with active indicators traveling between destinations."],
  ["Neon Minimal","Futuristic / sci-fi","One restrained luminous accent on an otherwise dark shell."],
  ["Glass Future","Futuristic / sci-fi","Layered transparent materials, refraction, depth, and soft highlights."],
  ["Digital Twin","Futuristic / sci-fi","Physical-console metaphors become reusable digital navigation modules."],

  ["Console Dashboard","Gaming","Large focusable targets, clear selection, and controller-friendly spacing."],
  ["PlayStation-Inspired Shell","Gaming","Dark horizontal shell with focus transitions and cinematic content."],
  ["Xbox-Inspired Shell","Gaming","Category navigation with active content previews and utility controls."],
  ["Steam-Style Library Bar","Gaming","Store, library, and community destinations with dense utilities."],
  ["Epic-Style Store Header","Gaming","Brand anchor, store routes, promotional space, and profile actions."],
  ["MMO HUD Bar","Gaming","Status systems, quick actions, and collapsible modules."],
  ["Competitive Esports Header","Gaming","Aggressive type, compact tabs, status utilities, and live indicators."],
  ["Tactical Ops Bar","Gaming","Operational shell with section codes, team status, and mission actions."],
  ["RPG Inventory Nav","Gaming","Category tabs behave like sections inside an equipment inventory."],
  ["FPS Loadout Nav","Gaming","Large active tab paired with a compact stats/action region."],
  ["Sci-Fi Game Lobby","Gaming","Floating destinations laid over immersive background art."],
  ["Racing Telemetry Nav","Gaming","Sector and speed-inspired indicators become route progress states."],

  ["Luxury Commerce Nav","Commerce","Minimal wordmark, tiny category labels, and quiet account/bag utilities."],
  ["Marketplace Mega-Nav","Commerce","Large hover panel exposes categories, featured links, and merchandising."],
  ["Department Store Header","Commerce","Persistent categories with search, cart, account, and store utilities."],
  ["Fashion Commerce Bar","Commerce","Center brand, thin category links, and nearly invisible utility controls."],
  ["Streetwear Drop Nav","Commerce","Compact shell focused on collection context and drop state."],
  ["Product-First Nav","Commerce","Navigation compresses as product imagery takes over the page."],
  ["Cart-Centric Header","Commerce","Search, wishlist, account, and cart get more visual weight."],
  ["Subscription SaaS Header","Commerce","Product categories left, conversion action right, account controls restrained."],

  ["Bottom Tab Bar","Mobile / compact","Persistent bottom navigation for a small set of high-frequency destinations."],
  ["Floating Bottom Pill","Mobile / compact","Bottom navigation floats above content as a detached pill."],
  ["Center Action Dock","Mobile / compact","Primary action occupies the center while destinations flank it."],
  ["Mobile Rail","Mobile / compact","Side-anchored compact navigation expands on demand."],
  ["Swipeable Tab Strip","Mobile / compact","Horizontally scrolling destinations with a fluid active indicator."],
  ["Edge Gesture Nav","Mobile / compact","Visual navigation stays minimal while gestures carry more weight."],
  ["Thumb-Zone Dock","Mobile / compact","High-frequency controls stay in natural reach zones."],
  ["Collapsing Mobile Header","Mobile / compact","Header shrinks with scroll and restores on reverse scroll."],
  ["Mobile Command Search","Mobile / compact","Search acts as the main navigation gateway."],
  ["One-Handed Utility Bar","Mobile / compact","Controls cluster around a reachable lower-screen region."],

  ["IDE Navigation Bar","Data / developer / utility","Workspace, path, branch, search, and tool groups in a compact shell."],
  ["Terminal Header","Data / developer / utility","Monospace labels and shell-like command affordances."],
  ["Dev Console Rail","Data / developer / utility","Vertical route system for logs, deployments, metrics, and settings."],
  ["Observability Header","Data / developer / utility","Service, environment, time range, query, and alert controls."],
  ["Analytics Command Bar","Data / developer / utility","Navigation becomes secondary to filters and query tools."],
  ["Data Grid Header","Data / developer / utility","Sticky navigation paired with filtering, grouping, and column tools."],
  ["Split-Pane Utility Nav","Data / developer / utility","Global destinations in one pane, context navigation in another."],
  ["Inspector Nav","Data / developer / utility","Narrow contextual header above properties or an inspector panel."],
  ["Workspace Switcher Header","Data / developer / utility","Large workspace selector plus searchable switching and utilities."],
  ["Multi-Tenant Shell","Data / developer / utility","Organization, project, and account selectors become first-class navigation."],

  ["Windows 95 Revival","Retro / nostalgic","Chunky title bars, squared controls, bevels, and dense menus."],
  ["Mac OS Classic","Retro / nostalgic","Compact monochrome controls and classic menu-bar logic."],
  ["Web 1.0 Portal","Retro / nostalgic","Dense text links, obvious categories, and utility-heavy layout."],
  ["CRT Terminal","Retro / nostalgic","Monochrome terminal shell with command-driven navigation."],
  ["Y2K Chrome","Retro / nostalgic","Glossy gradients, metallic surfaces, and compact futuristic labels."],
  ["Frutiger Aero","Retro / nostalgic","Glossy surfaces, soft gradients, bright imagery, and playful controls."],
  ["Skeuomorphic Desk","Retro / nostalgic","Physical tab, folder, button, and hardware metaphors."],
  ["Arcade Menu","Retro / nostalgic","Large selectable labels with game-menu focus transitions."],
  ["VHS UI","Retro / nostalgic","Tracking-line and timestamp-inspired transitions kept deliberately restrained."],
  ["Pixel UI","Retro / nostalgic","Pixel type, rectangular controls, and crisp game-menu state changes."]
];

const categoryInfo = [
  ["Apple-inspired","01–50",50],
  ["Enterprise / product systems","51–70",20],
  ["Editorial / content","71–80",10],
  ["Brutalist / experimental","81–90",10],
  ["Futuristic / sci-fi","91–100",10],
  ["Gaming","101–112",12],
  ["Commerce","113–120",8],
  ["Mobile / compact","121–130",10],
  ["Data / developer / utility","131–140",10],
  ["Retro / nostalgic","141–150",10]
];

const categoryClass = category => ({
  "Apple-inspired":"variant-apple",
  "Enterprise / product systems":"variant-apple",
  "Editorial / content":"variant-editorial",
  "Brutalist / experimental":"variant-brutalist",
  "Futuristic / sci-fi":"variant-future",
  "Gaming":"variant-gaming",
  "Commerce":"variant-commerce",
  "Mobile / compact":"variant-mobile",
  "Data / developer / utility":"variant-future",
  "Retro / nostalgic":"variant-retro"
}[category] || "variant-apple");

const categoryShort = category => ({
  "Apple-inspired":"Apple",
  "Enterprise / product systems":"Enterprise",
  "Editorial / content":"Editorial",
  "Brutalist / experimental":"Brutalist",
  "Futuristic / sci-fi":"Future",
  "Gaming":"Gaming",
  "Commerce":"Commerce",
  "Mobile / compact":"Mobile",
  "Data / developer / utility":"Utility",
  "Retro / nostalgic":"Retro"
}[category] || category);

const gallery = document.querySelector("#gallery");
const filterPills = document.querySelector("#filterPills");
const sectionRail = document.querySelector("#sectionRail");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const progressBar = document.querySelector("#progressBar");
const drawer = document.querySelector("#drawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerKicker = document.querySelector("#drawerKicker");
const drawerDescription = document.querySelector("#drawerDescription");
const stageNavbar = document.querySelector("#stageNavbar");
const metaGrid = document.querySelector("#metaGrid");
const drawerNotes = document.querySelector("#drawerNotes");
const demoSelect = document.querySelector("#demoSelect");
const demoCollapse = document.querySelector("#demoCollapse");
const randomButton = document.querySelector("#randomButton");
const closeDrawerButton = document.querySelector("#closeDrawer");

let activeFilter = "All";
let filtered = styles.map((_, i) => i);
let selectedIndex = -1;
let stageActive = 1;

const escapeHtml = value => value.replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;","\"": "&quot;","'":"&#039;"
}[c]));

function miniMarkup(index, title, category){
  const variant = categoryClass(category);
  const pos = ((index * 17) % 75) + 10;
  const labels = title.split(/\s+/).slice(0,3);
  return `
    <div class="mini ${variant}" style="--gx:${pos}%">
      <div class="mini-nav">
        <div class="mini-brand"></div>
        <div class="mini-items">
          <span class="mini-item active"></span>
          <span class="mini-item"></span>
          <span class="mini-item"></span>
          <span class="mini-item"></span>
        </div>
        <span class="mini-util"></span>
      </div>
      <div style="position:absolute;left:13px;bottom:10px;color:rgba(255,255,255,.22);font-size:8px;letter-spacing:.08em;text-transform:uppercase">${escapeHtml(labels.join(" · "))}</div>
    </div>`;
}

function cardMarkup(index){
  const [title, category, description] = styles[index];
  return `
    <article class="card" data-index="${index}" tabindex="0" role="button" aria-label="Open ${escapeHtml(title)}">
      <span class="card-number">${String(index+1).padStart(2,"0")}</span>
      ${miniMarkup(index,title,category)}
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
      <span class="card-tag">${escapeHtml(categoryShort(category))}</span>
    </article>`;
}

function renderFilters(){
  filterPills.innerHTML = [
    ["All","150"],
    ...categoryInfo.map(([name,range,count]) => [name,String(count)])
  ].map(([name,count]) => `
    <button class="filter ${activeFilter===name ? "active":""}" data-filter="${escapeHtml(name)}">
      ${escapeHtml(name === "All" ? "All styles" : categoryShort(name))}
      <span style="opacity:.4;margin-left:4px">${count}</span>
    </button>`).join("");
  filterPills.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click",() => {
    activeFilter = btn.dataset.filter;
    renderFilters();
    applyFilters();
    document.querySelector(".gallery-wrap")?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function renderRail(){
  sectionRail.innerHTML = categoryInfo.map(([name,range,count]) => {
    const id = "section-" + name.toLowerCase().replace(/[^a-z0-9]+/g,"-");
    return `<button class="rail-link" data-target="${id}">${range} · ${escapeHtml(categoryShort(name))}</button>`;
  }).join("");
  sectionRail.querySelectorAll(".rail-link").forEach((btn,i) => btn.addEventListener("click",() => {
    if(activeFilter !== "All"){
      activeFilter = "All";
      renderFilters();
      applyFilters();
    }
    document.getElementById("section-" + categoryInfo[i][0].toLowerCase().replace(/[^a-z0-9]+/g,"-"))?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function bindCardMotion(){
  const cards = [...gallery.querySelectorAll(".card")];
  if (window.matchMedia("(hover:hover)").matches) {
    cards.forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        card.style.setProperty("--mx", x.toFixed(3));
        card.style.setProperty("--my", y.toFixed(3));
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--mx");
        card.style.removeProperty("--my");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin:"40px 0px -6% 0px", threshold:.05 });
    cards.forEach((card, index) => {
      card.style.setProperty("--reveal-delay", Math.min(index % 4, 3) * 55 + "ms");
      observer.observe(card);
    });
  } else {
    cards.forEach(card => card.classList.add("is-visible"));
  }
}

function renderGallery(){
  if(!filtered.length){
    gallery.innerHTML = '<div class="no-results"><strong>No matching navbar styles</strong>Try another search or reset the filter.</div>';
    return;
  }
  const groups = new Map();
  filtered.forEach(i => {
    const category = styles[i][1];
    if(!groups.has(category)) groups.set(category,[]);
    groups.get(category).push(i);
  });
  gallery.innerHTML = [...groups.entries()].map(([category,indices]) => {
    const range = categoryInfo.find(x=>x[0]===category)?.[1] || "";
    const id = "section-" + category.toLowerCase().replace(/[^a-z0-9]+/g,"-");
    return `
      <section class="category" id="${id}">
        <div class="category-head">
          <h2 class="category-title">${escapeHtml(category)}</h2>
          <span class="category-count">${range} · ${indices.length} shown</span>
        </div>
        <div class="card-grid">${indices.map(cardMarkup).join("")}</div>
      </section>`;
  }).join("");

  gallery.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click",() => openDrawer(Number(card.dataset.index)));
    card.addEventListener("keydown",e => {
      if(e.key==="Enter" || e.key===" ") { e.preventDefault(); openDrawer(Number(card.dataset.index)); }
    });
  });
  bindCardMotion();
}

function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  filtered = styles.map((s,i)=>({s,i})).filter(({s}) => {
    const matchesFilter = activeFilter==="All" || s[1]===activeFilter;
    const haystack = s.join(" ").toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  }).map(({i})=>i);
  resultCount.textContent = `${filtered.length} ${filtered.length===1?"style":"styles"}`;
  renderGallery();
  highlightRail();
}

function stageMarkup(title, category){
  const compactLabels = title.replace(/[-/+]/g," ").split(/\s+/).filter(Boolean).slice(0,4);
  const labels = [...compactLabels, "Explore", "Info"].slice(0,5);
  return `
    <div class="stage-shell" id="stageShell">
      <div class="stage-logo" title="Brand"></div>
      <div class="stage-links">
        ${labels.map((label,i)=>`<button class="stage-link ${i===stageActive?"active":""}" data-stage-index="${i}">${escapeHtml(label)}</button>`).join("")}
      </div>
      <div class="stage-actions"><span class="stage-action"></span><span class="stage-action"></span></div>
    </div>`;
}

function openDrawer(index){
  selectedIndex=index;
  const [title,category,description] = styles[index];
  drawerTitle.textContent = title;
  drawerKicker.textContent = `#${String(index+1).padStart(3,"0")} · ${categoryShort(category)}`;
  drawerDescription.textContent = description;
  metaGrid.innerHTML = [
    ["Family",categoryShort(category)],
    ["Position",String(index+1).padStart(2,"0")],
    ["Interaction","Click + motion"]
  ].map(([k,v])=>`<div class="meta"><b>${escapeHtml(k)}</b><span>${escapeHtml(v)}</span></div>`).join("");
  drawerNotes.innerHTML = [
    "The selected destination should feel physically anchored rather than simply changing color.",
    "Keep secondary controls quieter than the active route so hierarchy survives motion.",
    "Responsive layouts should preserve the navigation model, not just shrink every element."
  ].map(note=>`<div class="note">${escapeHtml(note)}</div>`).join("");
  stageActive = 1;
  stageNavbar.innerHTML = stageMarkup(title,category);
  stageNavbar.querySelectorAll(".stage-link").forEach(btn=>{
    btn.addEventListener("click",()=>{
      stageActive = Number(btn.dataset.stageIndex);
      stageNavbar.innerHTML = stageMarkup(title,category);
      stageNavbar.querySelectorAll(".stage-link").forEach(b=>b.addEventListener("click",()=>{}));
      bindStageButtons();
    });
  });
  bindStageButtons();
  drawerBackdrop.hidden=false;
  requestAnimationFrame(()=>{
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden","false");
    document.body.classList.add("drawer-open");
  });
}

function bindStageButtons(){
  stageNavbar.querySelectorAll(".stage-link").forEach(btn=>btn.addEventListener("click",()=>{
    stageActive=Number(btn.dataset.stageIndex);
    stageNavbar.innerHTML=stageMarkup(styles[selectedIndex][0],styles[selectedIndex][1]);
    bindStageButtons();
  }));
}

function closeDrawer(){
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  document.body.classList.remove("drawer-open");
  setTimeout(()=>drawerBackdrop.hidden=true,430);
  selectedIndex=-1;
}

demoSelect.addEventListener("click",()=>{
  stageActive = (stageActive + 1) % 5;
  stageNavbar.innerHTML = stageMarkup(styles[selectedIndex][0],styles[selectedIndex][1]);
  bindStageButtons();
});
demoCollapse.addEventListener("click",()=>{
  document.getElementById("stageShell")?.classList.toggle("compact");
});

closeDrawerButton.addEventListener("click",closeDrawer);
drawerBackdrop.addEventListener("click",closeDrawer);
document.addEventListener("keydown",e=>{
  if((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==="k"){
    e.preventDefault();searchInput.focus();searchInput.select();
    return;
  }
  if(e.key==="Escape" && selectedIndex!==-1){closeDrawer();return}
  if(selectedIndex!==-1 && ["ArrowDown","ArrowUp"].includes(e.key)){
    e.preventDefault();
    const p = filtered.indexOf(selectedIndex);
    const next = e.key==="ArrowDown" ? (p+1)%filtered.length : (p-1+filtered.length)%filtered.length;
    openDrawer(filtered[next]);
  }
});

searchInput.addEventListener("input",applyFilters);
randomButton.addEventListener("click",()=>{
  const pick = filtered[Math.floor(Math.random()*filtered.length)] ?? Math.floor(Math.random()*styles.length);
  openDrawer(pick);
});

function updateProgress(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = max <= 0 ? "100%" : `${Math.min(100,Math.max(0,window.scrollY/max*100))}%`;
}

function highlightRail(){
  const sections = [...document.querySelectorAll(".category")];
  const links = [...document.querySelectorAll(".rail-link")];
  if(!sections.length || !links.length) return;
  const top = window.scrollY + 150;
  let active = 0;
  sections.forEach((section,i)=>{ if(section.offsetTop <= top) active=i; });
  links.forEach((link,i)=>link.classList.toggle("active",i===active && activeFilter==="All"));
}

window.addEventListener("scroll",()=>{updateProgress();highlightRail()},{passive:true});
window.addEventListener("resize",highlightRail);

renderFilters();
renderRail();
applyFilters();
updateProgress();
highlightRail();
