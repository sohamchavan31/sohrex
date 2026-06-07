export const featuredProjects = [
  {
    id: 'mis',
    label: 'Flagship System — Production',
    title: 'Management Information System',
    short: 'Production desktop MIS for Samuel Aaron Trading (Richline Group / Berkshire Hathaway subsidiary) — automating vendor reconciliation workflows for jewelry retail operations. Used daily by the finance team.',
    problem: 'Manual vendor reconciliation across departments causing billing errors, delays, and data inconsistencies in jewelry retail operations.',
    solution: 'Desktop MIS with Python/Django backend + React/Electron frontend, automating reconciliation pipelines with role-based access and real-time reporting dashboards.',
    impact: 'In active daily use by the finance team at Samuel Aaron Trading. Sole developer — designed, built, and maintains the full system end-to-end.',
    stack: ['Python', 'Django', 'React', 'Electron', 'REST API'],
    github: null,
    live: null,
    privateNote: 'Private — internal enterprise software',
  },
  {
    id: 'pest',
    label: 'Platform — In Development',
    title: 'Pest Control Service Marketplace',
    short: 'Full-stack on-demand pest control platform with real-time GPS worker tracking, Razorpay payment pipeline, 4-role RBAC auth, and booking state machine. Built for the Indian market.',
    problem: 'Field teams had no coordination system — jobs were lost, double-booked, and unbilled with no real-time visibility for dispatchers.',
    solution: 'Full-stack platform with Socket.IO real-time GPS tracking, Razorpay payment pipeline, 4-role RBAC (admin/dispatcher/worker/customer), and a booking state machine.',
    impact: 'Containerised with Docker. Currently in active development — targeting the Indian pest control market.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Socket.IO', 'Docker'],
    github: null,
    live: null,
    privateNote: 'Private — in development',
  },
]

export const otherProjects = [
  {
    id: 'f1',
    title: 'F1 Race Replay Engine',
    short: 'Streams real F1 telemetry from 195 sessions (2018–present) to a React frontend via Django Channels WebSocket. 20 drivers, live SVG track map.',
    stack: ['Django', 'MongoDB', 'React', 'WebSocket', 'FastF1'],
    github: 'https://github.com/sohamchavan31/F1',
  },
  {
    id: 'jewelry',
    title: 'Jewelary — AR Jewellery App',
    short: 'Jewellery e-commerce app with AR virtual try-on. Published at IEEE I-SMAC 2024. 30% increase in user engagement, 20% reduction in returns.',
    stack: ['Augmented Reality', 'IEEE Published'],
    github: null,
  },
  {
    id: 'drum',
    title: 'Drum Kit',
    short: 'Interactive drum kit playable via keyboard keys. Built with vanilla JavaScript, HTML5 audio API, and CSS3 animations.',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/sohamchavan31/Drumkit',
  },
  {
    id: 'portfolio',
    title: 'Portfolio — Sohrex',
    short: 'This portfolio. Terminal boot animation, Three.js 3D hero canvas, Framer Motion scroll animations, and a CSS design token system.',
    stack: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    github: 'https://github.com/sohamchavan31/sohrex',
  },
]
