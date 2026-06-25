export type ProjectLink = {
  label: string;
  href: string;
};

export type Screenshot = {
  src: string;
  caption: string;
};

export type FlowStep = {
  step: number;
  title: string;
  description: string;
};

export type EngineeringDecision = {
  decision: string;
  rationale: string;
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  timeline: string;
  role: string;
  heroImage: string;
  gallery: Screenshot[];
  overview: string;
  pitch: string;
  problem: string;
  solution: string;
  targetUsers: string[];
  objective: string;
  features: string[];
  technologies: string[];
  architecture: {
    summary: string;
    layers: { name: string; items: string[] }[];
  };
  userFlow: FlowStep[];
  adminFlow?: FlowStep[];
  challenges: string[];
  decisions: EngineeringDecision[];
  roadmap: string[];
  impact: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  links: ProjectLink[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "setu-suvidha",
    name: "Setu Suvidha",
    tag: "Digital Citizen Service Platform",
    timeline: "2024",
    role: "Product Engineer — User App, Admin Panel, Firebase Backend",
    heroImage: "/images/projects/setu-suvidha-user/home.png",
    pitch:
      "Citizens apply for certificates, pay online, and track status — while admins orchestrate the entire service pipeline.",
    gallery: [
      { src: "/images/projects/setu-suvidha-user/home.png", caption: "Citizen Home" },
      { src: "/images/projects/setu-suvidha-user/service-detail.png", caption: "Service Detail" },
      { src: "/images/projects/setu-suvidha-user/upload-documents.png", caption: "Document Upload" },
      { src: "/images/projects/setu-suvidha-user/submit-application.png", caption: "Payment & Submit" },
      { src: "/images/projects/setu-suvidha-user/my-applications.png", caption: "My Applications" },
      { src: "/images/projects/setu-suvidha-user/request-tracking.png", caption: "Status Tracking" },
      { src: "/images/projects/setu-suvidha-user/my-docs.png", caption: "Certificate Download" },
      { src: "/images/projects/setu-suvidha-user/notifications.png", caption: "Notifications" },
      { src: "/images/projects/setu-suvidha-admin/super-admin-dashboard.png", caption: "Super Admin Dashboard" },
      { src: "/images/projects/setu-suvidha-admin/requests.png", caption: "Request Management" },
      { src: "/images/projects/setu-suvidha-admin/services-management.png", caption: "Services Config" },
      { src: "/images/projects/setu-suvidha-admin/setu-chalak-dashboard.png", caption: "Setu Chalak Dashboard" },
    ],
    overview:
      "Kagadpatra — an end-to-end civic platform connecting citizens with government certificate services through a Flutter mobile app and multi-role web admin panel.",
    problem:
      "Citizens face fragmented offline processes, repeated office visits, opaque status updates, and no centralized way to pay fees or upload documents for certificate services.",
    solution:
      "Built a unified product: citizens discover services, upload documents, pay via Razorpay, and track progress. Super Admins review and assign requests; Setu Chalaks process and deliver certificates.",
    targetUsers: ["Citizens", "Setu Chalak (field operators)", "Super Admin"],
    objective:
      "Digitize certificate application workflows with transparent tracking, online payments, and role-based administration.",
    features: [
      "Service discovery with fees & required documents",
      "Document upload (PDF, JPG, PNG) with validation",
      "Razorpay payment before submission",
      "Real-time application status & progress timeline",
      "Push notifications at every status change",
      "Super Admin request review & assignment",
      "Setu Chalak processing & certificate upload",
      "My Docs — download completed certificates",
    ],
    technologies: ["Flutter", "Firebase", "SQLite", "Razorpay", "FCM"],
    architecture: {
      summary:
        "Flutter mobile client for citizens, web admin for operators, Firebase as the shared backend with role-based access.",
      layers: [
        { name: "Client", items: ["Flutter User App", "Web Admin Panel (Super Admin + Setu Chalak)"] },
        { name: "Backend", items: ["Firebase Auth", "Cloud Firestore", "Cloud Storage", "FCM"] },
        { name: "Integrations", items: ["Razorpay Payment Gateway", "Document Storage Pipeline"] },
        { name: "Local", items: ["SQLite for offline caching"] },
      ],
    },
    userFlow: [
      { step: 1, title: "Browse Services", description: "Citizen discovers certificate types with fees and timelines." },
      { step: 2, title: "Upload Documents", description: "Required docs uploaded with format validation." },
      { step: 3, title: "Pay & Submit", description: "Razorpay payment gates submission." },
      { step: 4, title: "Track Status", description: "Progress timeline from review to completion." },
      { step: 5, title: "Receive Certificate", description: "Download from My Docs when ready." },
    ],
    adminFlow: [
      { step: 1, title: "Review Request", description: "Super Admin verifies payment and documents." },
      { step: 2, title: "Assign Operator", description: "Request routed to Setu Chalak." },
      { step: 3, title: "Process & Upload", description: "Chalak processes and uploads certificate." },
      { step: 4, title: "Notify Citizen", description: "FCM alert triggers certificate download." },
    ],
    challenges: [
      "Designing RBAC for three distinct user roles with different permissions and dashboards.",
      "Handling document re-upload flows when corrections are requested by operators.",
      "Gating submission behind successful Razorpay payment without losing partial progress.",
    ],
    decisions: [
      {
        decision: "Flutter for citizen app",
        rationale: "Single codebase for Android with polished Material UI and fast iteration on form-heavy flows.",
      },
      {
        decision: "Web admin over mobile admin",
        rationale: "Operators need table views, bulk actions, and dashboard analytics — better suited to web.",
      },
      {
        decision: "Firebase as backend",
        rationale: "Real-time status sync, auth, storage, and notifications without managing server infrastructure.",
      },
    ],
    roadmap: [
      "Multi-language support for regional citizens",
      "Analytics dashboard for service-level SLA tracking",
      "Citizen feedback & rating after certificate delivery",
    ],
    impact: [
      { label: "User Roles", value: "3" },
      { label: "Service Types", value: "8+" },
      { label: "Platforms", value: "Mobile + Web" },
    ],
    metrics: [
      { label: "User Screens", value: "10+" },
      { label: "Admin Modules", value: "8" },
      { label: "Payment", value: "Razorpay" },
    ],
    links: [
      { label: "User App GitHub", href: "https://github.com/ajinkyasultane/setu_suvidha_user_app" },
      { label: "Admin App GitHub", href: "https://github.com/ajinkyasultane/setu_suvidha_admin_app" },
    ],
    accent: "#3B82F6",
  },
  {
    id: "arthsetu",
    name: "ArthSetu AI",
    tag: "Smart Expense Management Platform",
    timeline: "2025",
    role: "Product Engineer — Android App, Firebase, Cloud Functions",
    heroImage: "/images/projects/arthsetu/dashboard.png",
    pitch:
      "Personal finance that runs itself — bank SMS in, categorized expenses out, with AI insights and scenario planning.",
    gallery: [
      { src: "/images/projects/arthsetu/login.png", caption: "Phone OTP Login" },
      { src: "/images/projects/arthsetu/dashboard.png", caption: "Financial Dashboard" },
      { src: "/images/projects/arthsetu/expenses.png", caption: "Expense Tracking" },
      { src: "/images/projects/arthsetu/category-breakdown.png", caption: "Category Breakdown" },
      { src: "/images/projects/arthsetu/expense-limits.png", caption: "Expense Limits" },
      { src: "/images/projects/arthsetu/wealth-portfolio.png", caption: "Wealth Portfolio" },
      { src: "/images/projects/arthsetu/goals-planner.png", caption: "Goals Planner" },
      { src: "/images/projects/arthsetu/risk-simulator.png", caption: "Risk Simulator" },
      { src: "/images/projects/arthsetu/add-asset.png", caption: "Add Asset" },
      { src: "/images/projects/arthsetu/profile-setup.png", caption: "Profile Setup" },
    ],
    overview:
      "AI-powered personal finance Android app that automates expense tracking from bank SMS, delivers financial intelligence, and models life scenarios.",
    problem:
      "Manual expense tracking fails because users won't log every transaction. Existing apps require effort; most Indians rely on bank SMS for transaction awareness.",
    solution:
      "ArthSetu AI listens to bank SMS, auto-parses transactions across 15+ Indian banks, categorizes spend, and surfaces insights, limits, wealth tracking, and scenario simulations.",
    targetUsers: ["Salaried professionals", "Students", "Anyone receiving bank SMS alerts"],
    objective:
      "Zero-effort expense tracking with actionable financial intelligence — not just a ledger.",
    features: [
      "Automatic bank SMS parsing (SBI, HDFC, ICICI, Axis, Kotak, etc.)",
      "Real-time transaction categorization & notifications",
      "Bank statement import via PDF, XLSX, and OCR",
      "Expense limits with FCM alerts via Cloud Functions",
      "Wealth dashboard — assets, liabilities, net worth",
      "Financial goals with AI-optimized paths",
      "Scenario engine — job loss, medical, EMI hike",
      "Insights engine with actionable recommendations",
    ],
    technologies: ["Kotlin", "Firebase", "Firestore", "Node.js", "ML Kit", "FCM"],
    architecture: {
      summary:
        "Kotlin Android app with MVVM, Firestore sync, SMS broadcast receiver, and Node.js Cloud Functions for server-side alerts.",
      layers: [
        { name: "Client", items: ["Kotlin Android (MVVM)", "SMS Broadcast Receiver", "ML Kit OCR"] },
        { name: "Backend", items: ["Firebase Auth (Phone OTP)", "Cloud Firestore", "Cloud Functions"] },
        { name: "Engines", items: ["SmsParser", "InsightsEngine", "ScenarioEngine", "CategoryClassifier"] },
        { name: "Notifications", items: ["FCM push", "Local limit alerts", "Transaction prompts"] },
      ],
    },
    userFlow: [
      { step: 1, title: "Authenticate", description: "Phone OTP via Firebase Auth." },
      { step: 2, title: "Auto-Capture", description: "Bank SMS parsed into transactions automatically." },
      { step: 3, title: "Categorize", description: "Merchant mapping and category assignment." },
      { step: 4, title: "Analyze", description: "Dashboard shows cashflow, savings rate, risk score." },
      { step: 5, title: "Plan", description: "Goals and scenario simulations guide decisions." },
    ],
    challenges: [
      "Parsing diverse bank SMS formats across 15+ Indian banks with deduplication logic.",
      "Balancing real-time SMS processing with battery and permission constraints on Android.",
      "Building pure-Kotlin insights and scenario engines without over-relying on external AI APIs.",
    ],
    decisions: [
      {
        decision: "SMS-first over manual entry",
        rationale: "Meet users where their data already exists — bank SMS — instead of requiring habit change.",
      },
      {
        decision: "MVVM + Firestore",
        rationale: "Clean separation for testable business logic with cloud-synced state across devices.",
      },
      {
        decision: "Cloud Functions for limit alerts",
        rationale: "Server-side expense threshold checks ensure alerts fire even when app is killed.",
      },
    ],
    roadmap: [
      "UPI deep-link transaction capture",
      "Shared family expense tracking",
      "Export reports for tax filing season",
    ],
    impact: [
      { label: "Bank Support", value: "15+" },
      { label: "Core Modules", value: "5" },
      { label: "Sim Scenarios", value: "5" },
    ],
    metrics: [
      { label: "Screens", value: "11+" },
      { label: "Engines", value: "3" },
      { label: "Auth", value: "Phone OTP" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ajinkyasultane/ArthSetu" },
    ],
    accent: "#8B5CF6",
  },
  {
    id: "car-rental",
    name: "Car Rental Management System",
    tag: "Dual-App Mobility Platform",
    timeline: "2023",
    role: "Android Developer — User App & Admin App",
    heroImage: "/images/projects/car-rental-user/user home.jpg",
    pitch:
      "Complete rental operations — users book cars, admins manage fleet, branches, and revenue from one Firebase ecosystem.",
    gallery: [
      { src: "/images/projects/car-rental-user/user login.jpg", caption: "User Login" },
      { src: "/images/projects/car-rental-user/user home.jpg", caption: "Browse Cars" },
      { src: "/images/projects/car-rental-user/user book car.jpg", caption: "Book Car" },
      { src: "/images/projects/car-rental-user/user booking status.jpg", caption: "Booking Status" },
      { src: "/images/projects/car-rental-user/user track .jpg", caption: "Track Booking" },
      { src: "/images/projects/car-rental-admin/admin home.jpg", caption: "Admin Dashboard" },
      { src: "/images/projects/car-rental-admin/admin manage booking.jpg", caption: "Manage Bookings" },
      { src: "/images/projects/car-rental-admin/admin add car.jpg", caption: "Fleet Management" },
      { src: "/images/projects/car-rental-admin/admin add branch.jpg", caption: "Branch Management" },
      { src: "/images/projects/car-rental-admin/admin user management.jpg", caption: "User Management" },
    ],
    overview:
      "Dual Android application ecosystem for car rental — user-facing booking app and admin panel for fleet, branch, and revenue operations.",
    problem:
      "Rental businesses juggle disconnected processes: customers can't self-serve bookings, and admins lack a unified view of fleet, branches, and revenue.",
    solution:
      "Two Android apps on shared Firebase — users browse, book, and track rentals; admins manage inventory, approve bookings, and monitor analytics.",
    targetUsers: ["Car rental customers", "Fleet administrators", "Branch managers"],
    objective:
      "Digitize the full rental lifecycle from discovery to booking approval to fleet management.",
    features: [
      "User registration & authentication",
      "Browse, search, and filter available cars",
      "Book with or without driver",
      "Booking history & cancellation",
      "Admin fleet CRUD operations",
      "Branch management across locations",
      "Booking approval workflow",
      "Revenue tracking & user management",
    ],
    technologies: ["Java", "Android", "Firebase Auth", "Realtime Database", "Material Design"],
    architecture: {
      summary:
        "Dual Android apps sharing Firebase Realtime Database — user app for bookings, admin app for operations.",
      layers: [
        { name: "Client", items: ["User App (Java)", "Admin App (Java)"] },
        { name: "Backend", items: ["Firebase Auth", "Realtime Database", "Cloud Storage"] },
        { name: "Features", items: ["Booking engine", "Fleet CRUD", "Branch management", "Analytics"] },
      ],
    },
    userFlow: [
      { step: 1, title: "Register & Login", description: "Firebase Auth account creation." },
      { step: 2, title: "Browse Fleet", description: "Search cars by type, price, availability." },
      { step: 3, title: "Book", description: "Select dates, location, with/without driver." },
      { step: 4, title: "Track", description: "Monitor booking status until completion." },
    ],
    adminFlow: [
      { step: 1, title: "Review Bookings", description: "Approve or reject incoming requests." },
      { step: 2, title: "Manage Fleet", description: "Add, edit, remove vehicles." },
      { step: 3, title: "Manage Branches", description: "Configure pickup locations." },
      { step: 4, title: "Analytics", description: "Track revenue and booking trends." },
    ],
    challenges: [
      "Synchronizing booking state between user and admin apps in real-time.",
      "Designing admin CRUD flows that scale as fleet and branch count grows.",
      "Handling booking conflicts when multiple users target the same vehicle.",
    ],
    decisions: [
      {
        decision: "Separate user and admin apps",
        rationale: "Different UX needs — consumers want simplicity, admins need data density and controls.",
      },
      {
        decision: "Firebase Realtime Database",
        rationale: "Instant sync for booking status updates visible to both user and admin simultaneously.",
      },
      {
        decision: "Java over Kotlin",
        rationale: "First production Android project — established Java proficiency before adopting Kotlin.",
      },
    ],
    roadmap: [
      "GPS-based vehicle tracking integration",
      "In-app payment via Razorpay",
      "Customer rating & review system",
    ],
    impact: [
      { label: "Applications", value: "2" },
      { label: "User Screens", value: "14+" },
      { label: "Admin Screens", value: "14+" },
    ],
    metrics: [
      { label: "Total Screens", value: "28+" },
      { label: "Backend", value: "Firebase" },
      { label: "Platform", value: "Android" },
    ],
    links: [
      { label: "User App", href: "https://github.com/ajinkyasultane/CarRentalUser" },
      { label: "Admin App", href: "https://github.com/ajinkyasultane/CarRentalAdmin" },
    ],
    accent: "#10B981",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.id);
}
