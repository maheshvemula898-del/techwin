export type ServiceDetail = {
  overviewTitle: string;
  visualImage: string;
  overview: string[];
  capabilities: Array<{ title: string; description: string }>;
  approach: Array<{ title: string; description: string }>;
  outcomes: string[];
};

export const serviceDetailData: Record<string, ServiceDetail> = {
  "devops-platform-engineering": {
    overviewTitle: "Create a secure engineering platform that makes dependable delivery the default.",
    visualImage: "/services/devops-platform-engineering-real.webp",
    overview: [
      "We help enterprises replace fragmented delivery pipelines and inconsistent infrastructure with reusable platform capabilities. Product teams gain self-service access to approved environments, automated controls, observability, and proven deployment patterns.",
      "Our engineers connect cloud foundations, Kubernetes, infrastructure as code, CI/CD, DevSecOps, and site reliability practices into one operating model. The result is faster delivery without sacrificing governance, resilience, or cost visibility.",
    ],
    capabilities: [
      { title: "Internal developer platforms", description: "Build golden paths, service templates, portals, and reusable platform APIs that reduce cognitive load." },
      { title: "Delivery automation", description: "Standardize build, test, security, artifact, release, and rollback workflows across engineering teams." },
      { title: "Cloud-native foundations", description: "Engineer secure Kubernetes, container, networking, secrets, and infrastructure-as-code patterns." },
      { title: "Reliability engineering", description: "Introduce service-level objectives, observability, error budgets, incident learning, and capacity practices." },
    ],
    approach: [
      { title: "Baseline", description: "Assess developer experience, delivery flow, controls, cloud foundations, reliability, and platform ownership." },
      { title: "Platform design", description: "Define target architecture, golden paths, governance, product model, adoption roadmap, and success metrics." },
      { title: "Incremental rollout", description: "Launch high-value platform capabilities with pilot teams before scaling across the organization." },
      { title: "Operate and evolve", description: "Measure adoption, reliability, delivery performance, cost, and developer satisfaction continuously." },
    ],
    outcomes: ["Shorter lead time from commit to production", "Consistent security and compliance controls", "Higher platform reliability and release confidence", "Improved developer productivity and cloud economics"],
  },
  cybersecurity: {
    overviewTitle: "Strengthen cyber resilience across identities, applications, cloud, data, and operations.",
    visualImage: "/services/cybersecurity-operations-real.webp",
    overview: [
      "Techwen Systems helps organizations move from disconnected security tools to an integrated, risk-led security program. We prioritize the exposures that matter most, engineer controls into technology platforms, and improve readiness to detect, contain, and recover from attacks.",
      "Our cybersecurity services span strategy, architecture, zero trust, cloud and application security, vulnerability management, security operations, governance, and resilience testing. Programs are aligned to business criticality and measurable risk reduction.",
    ],
    capabilities: [
      { title: "Security strategy and architecture", description: "Translate business risk into target architecture, control roadmaps, investment priorities, and governance." },
      { title: "Identity and zero trust", description: "Modernize identity, privileged access, device trust, segmentation, and policy-driven authorization." },
      { title: "Cloud and application security", description: "Embed secure configuration, code analysis, supply-chain controls, posture management, and runtime protection." },
      { title: "Detection and response", description: "Improve telemetry, use cases, threat hunting, incident response, automation, and recovery coordination." },
    ],
    approach: [
      { title: "Risk discovery", description: "Map critical services, identities, data, attack surfaces, control gaps, and realistic threat scenarios." },
      { title: "Prioritized design", description: "Define target controls and sequence improvements around exposure reduction and operational feasibility." },
      { title: "Security engineering", description: "Implement controls in cloud, applications, endpoints, networks, identity, data, and delivery pipelines." },
      { title: "Continuous assurance", description: "Validate control effectiveness through monitoring, exercises, testing, metrics, and executive reporting." },
    ],
    outcomes: ["Reduced attack surface and material exposure", "Faster detection, containment, and recovery", "Consistent security across hybrid environments", "Stronger regulatory and customer confidence"],
  },
  "cloud-transformation": {
    overviewTitle: "Turn cloud adoption into a secure, governed, and economically sustainable capability.",
    visualImage: "/services/cloud-transformation-real.webp",
    overview: [
      "We help enterprises make informed cloud decisions, establish landing zones, modernize workloads, and operate multi-cloud environments with consistent security and financial accountability. Every roadmap is grounded in application dependencies, business criticality, risk, and value.",
      "Our teams work across AWS, Microsoft Azure, Google Cloud, private cloud, and hybrid estates. We combine architecture, migration engineering, platform automation, FinOps, resilience, and managed operations so cloud remains effective after the migration program ends.",
    ],
    capabilities: [
      { title: "Cloud strategy and portfolio planning", description: "Segment applications, identify value cases, define placement principles, and create sequenced migration waves." },
      { title: "Landing zones and governance", description: "Establish identity, networking, policy, logging, security, account structures, and automated guardrails." },
      { title: "Migration and modernization", description: "Rehost, replatform, refactor, or replace workloads using repeatable factories and controlled cutovers." },
      { title: "FinOps and cloud operations", description: "Create cost ownership, workload optimization, service management, observability, and resilience practices." },
    ],
    approach: [
      { title: "Discover", description: "Assess portfolios, dependencies, performance, security, contracts, economics, and organizational readiness." },
      { title: "Establish foundations", description: "Build landing zones, connectivity, identity, policies, automation, and operational standards." },
      { title: "Migrate in waves", description: "Move prioritized workloads with tested rollback plans, validation, and business continuity controls." },
      { title: "Optimize", description: "Continuously improve reliability, consumption, architecture, carbon efficiency, security, and experience." },
    ],
    outcomes: ["Faster and safer cloud adoption", "Improved infrastructure resilience and scalability", "Transparent cloud costs and ownership", "Consistent governance across providers and teams"],
  },
  "software-engineering": {
    overviewTitle: "Engineer digital products and enterprise applications built to evolve.",
    visualImage: "/services/software-engineering-real.webp",
    overview: [
      "Techwen Systems designs and builds secure web, mobile, API, integration, and enterprise software. We combine product thinking, experience design, architecture, engineering, quality, DevSecOps, and production support within accountable multidisciplinary teams.",
      "We can create new products, modernize legacy applications incrementally, improve engineering quality, or establish reusable product platforms. Decisions are guided by customer value, maintainability, performance, security, and total cost of ownership.",
    ],
    capabilities: [
      { title: "Digital product engineering", description: "Move from product discovery and experience design through architecture, delivery, launch, and iteration." },
      { title: "Application modernization", description: "Decompose monoliths, expose domain APIs, modernize user experiences, and retire technical debt safely." },
      { title: "API and integration engineering", description: "Create secure, observable APIs and event-driven integrations across systems, partners, and channels." },
      { title: "Quality engineering", description: "Automate functional, performance, accessibility, security, and resilience assurance throughout delivery." },
    ],
    approach: [
      { title: "Discover the product", description: "Align user needs, business value, constraints, risks, architecture, and a measurable release strategy." },
      { title: "Establish foundations", description: "Create design systems, engineering standards, environments, pipelines, test automation, and observability." },
      { title: "Deliver iteratively", description: "Release valuable increments frequently and use evidence to refine scope, experience, and technical choices." },
      { title: "Scale responsibly", description: "Improve performance, resilience, security, operability, and team capability as adoption grows." },
    ],
    outcomes: ["Faster release cycles and product learning", "Improved software quality and maintainability", "Secure and scalable digital experiences", "Reduced legacy risk and modernization disruption"],
  },
  "data-ai-analytics": {
    overviewTitle: "Create trusted data foundations and turn intelligence into measurable decisions.",
    visualImage: "/services/data-ai-analytics-real.webp",
    overview: [
      "Techwen Systems helps organizations connect fragmented data, improve trust, modernize analytics, and apply AI where it creates practical value. We address architecture, governance, engineering, operating model, adoption, and responsible use as one transformation agenda.",
      "Our teams deliver cloud data platforms, lakehouse and warehouse modernization, real-time pipelines, business intelligence, machine learning, generative AI, MLOps, and data governance. Solutions are designed around decision workflows—not technology experimentation alone.",
    ],
    capabilities: [
      { title: "Modern data platforms", description: "Design scalable lakehouse, warehouse, streaming, integration, metadata, and data-product architectures." },
      { title: "Analytics and decision intelligence", description: "Create governed metrics, semantic models, dashboards, forecasting, and embedded analytical experiences." },
      { title: "AI and machine learning", description: "Develop responsible predictive, optimization, automation, and generative AI solutions tied to business workflows." },
      { title: "Governance and AI operations", description: "Implement quality, lineage, privacy, security, model monitoring, MLOps, evaluation, and human oversight." },
    ],
    approach: [
      { title: "Value discovery", description: "Prioritize decisions and workflows where better data or AI can create measurable operational or customer value." },
      { title: "Foundation design", description: "Define architecture, ownership, governance, security, interoperability, and a scalable delivery roadmap." },
      { title: "Prove and industrialize", description: "Validate value with representative data, then engineer production-grade pipelines, models, controls, and experiences." },
      { title: "Adopt and improve", description: "Measure usage, decision impact, data quality, model behavior, risk, cost, and workforce adoption." },
    ],
    outcomes: ["Trusted and reusable enterprise data products", "Faster access to consistent business insight", "Responsible AI moved safely into production", "Improved automation, forecasting, and decision quality"],
  },
  "managed-it-services": {
    overviewTitle: "Operate critical technology with proactive control, automation, and accountable service levels.",
    visualImage: "/services/managed-it-services-real.webp",
    overview: [
      "Our managed services combine 24/7 monitoring, service management, cloud and infrastructure operations, application support, security coordination, and continual improvement. We focus on service health and user outcomes rather than ticket volume alone.",
      "Techwen Systems integrates with client teams through clear ownership, operational runbooks, service-level objectives, transparent reporting, and structured governance. Automation reduces repetitive work while specialists concentrate on prevention, resilience, and improvement.",
    ],
    capabilities: [
      { title: "Infrastructure and cloud operations", description: "Monitor, administer, patch, optimize, back up, and recover hybrid infrastructure and cloud platforms." },
      { title: "Application management", description: "Support business applications through incident, problem, release, performance, and lifecycle management." },
      { title: "Service desk and experience", description: "Provide responsive multichannel support informed by employee experience and recurring demand patterns." },
      { title: "AIOps and automation", description: "Use telemetry, event correlation, orchestration, and automation to prevent incidents and speed resolution." },
    ],
    approach: [
      { title: "Transition", description: "Discover services, dependencies, risks, volumes, controls, documentation, suppliers, and operational expectations." },
      { title: "Stabilize", description: "Establish observability, ownership, runbooks, service levels, escalation paths, and known-error management." },
      { title: "Optimize", description: "Reduce recurring incidents, automate routine work, improve capacity, performance, security, and cost." },
      { title: "Transform", description: "Use operational evidence to modernize platforms, experiences, processes, and the broader service model." },
    ],
    outcomes: ["Improved availability and service experience", "Lower incident recurrence and resolution time", "Greater operational transparency and control", "Continuous cost, security, and performance improvement"],
  },
  "enterprise-applications": {
    overviewTitle: "Modernize the applications and workflows at the heart of enterprise operations.",
    visualImage: "/services/enterprise-applications-real.webp",
    overview: [
      "We help organizations improve core processes through ERP, SAP, CRM, workflow, integration, and enterprise application modernization. Our work connects technology decisions to finance, supply chain, customer, workforce, and operational outcomes.",
      "Programs combine process design, clean-core principles, architecture, data, integration, extensions, testing, change, and application management. This reduces transformation risk and supports adoption across complex business environments.",
    ],
    capabilities: [
      { title: "ERP and SAP transformation", description: "Plan and deliver implementations, upgrades, migrations, process redesign, extensions, and support." },
      { title: "CRM and customer platforms", description: "Unify customer processes, service, sales, data, workflow, and digital channels." },
      { title: "Integration and automation", description: "Connect applications and partners through APIs, events, middleware, workflow, and intelligent automation." },
      { title: "Application management", description: "Improve stability, enhancement flow, release quality, performance, security, and lifecycle planning." },
    ],
    approach: [
      { title: "Process baseline", description: "Understand business processes, pain points, controls, customizations, integrations, data, and value priorities." },
      { title: "Target design", description: "Define future processes, clean-core boundaries, architecture, migration, governance, and adoption plans." },
      { title: "Controlled delivery", description: "Configure, integrate, migrate, test, train, and cut over through accountable release increments." },
      { title: "Adopt and optimize", description: "Measure process performance, user adoption, system health, enhancement demand, and realized benefits." },
    ],
    outcomes: ["Simplified and standardized core processes", "Reduced application complexity and technical debt", "Improved data flow across business functions", "Higher user adoption and operational visibility"],
  },
  "digital-workplace-infrastructure": {
    overviewTitle: "Create a secure digital workplace that helps people work effectively from anywhere.",
    visualImage: "/services/digital-workplace-real.webp",
    overview: [
      "Techwen Systems modernizes workplace technology, connectivity, identity, endpoints, collaboration, and infrastructure around employee experience and security. We help reduce friction while maintaining consistent control across locations, devices, and working models.",
      "Our services cover workplace strategy, Microsoft 365 and collaboration, endpoint engineering, identity, virtual desktop, networks, infrastructure, service experience, automation, and lifecycle management.",
    ],
    capabilities: [
      { title: "Modern workplace platforms", description: "Design and manage productivity, collaboration, communication, intranet, and knowledge experiences." },
      { title: "Endpoint and identity services", description: "Provide secure enrollment, configuration, access, compliance, patching, protection, and lifecycle control." },
      { title: "Network and infrastructure modernization", description: "Improve campus, branch, wireless, SD-WAN, data center, edge, and hybrid connectivity." },
      { title: "Digital employee experience", description: "Measure friction, automate support, improve self-service, and prioritize experience improvements with evidence." },
    ],
    approach: [
      { title: "Experience discovery", description: "Assess employee journeys, device and network performance, support demand, controls, and platform health." },
      { title: "Workplace architecture", description: "Define experience principles, identity, endpoint, collaboration, connectivity, security, and management standards." },
      { title: "Modernize in cohorts", description: "Roll out capabilities by workforce segment with pilots, communication, training, support, and adoption measurement." },
      { title: "Continuously improve", description: "Use experience, security, service, and performance signals to refine the workplace over time." },
    ],
    outcomes: ["Improved employee productivity and experience", "Secure access across users, devices, and locations", "Simplified endpoint and infrastructure management", "Reduced support demand and operational friction"],
  },
};
