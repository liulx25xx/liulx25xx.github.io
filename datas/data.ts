export const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/liulx25xx",
    simpleIcon: "/svgs/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/%E4%B8%BD%E6%AC%A3-%E5%88%98-642395402/",
    simpleIcon: "/svgs/linkedIn.svg",
  },
];

export const categorizedTechnologies = [
  {
    category: "Languages & Web",
    description: "My core languages for software engineering and full-stack web development.",
    items: [
      { name: "Python", iconLink: "/svgs/python.svg", url: "https://www.python.org/" },
      { name: "Java", iconLink: "/svgs/java.svg", url: "https://www.java.com/" },
      { name: "JavaScript", iconLink: "/svgs/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "HTML5", iconLink: "/svgs/html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", iconLink: "/svgs/css3.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    category: "AI & Data",
    description: "My preferred technologies for machine learning, data analysis, and modeling.",
    items: [
      { name: "PyTorch", iconLink: "/svgs/pytorch.svg", url: "https://pytorch.org/" },
      { name: "TensorFlow", iconLink: "/svgs/tensorflow.svg", url: "https://www.tensorflow.org/" },
      { name: "HuggingFace", iconLink: "/svgs/huggingface.svg", url: "https://huggingface.co/" },
      { name: "Pandas", iconLink: "/svgs/pandas.svg", url: "https://pandas.pydata.org/" },
      { name: "MySQL", iconLink: "/svgs/mysql.svg", url: "https://www.mysql.com/" },
      { name: "PowerBI", iconLink: "/svgs/powerbi.svg", url: "https://powerbi.microsoft.com/" },
    ],
  },
  {
    category: "Creative & 3D",
    description: "Tools I use for UI/UX design, 3D modeling, and immersive AR/VR experiences.",
    items: [
      { name: "Figma", iconLink: "/svgs/figma.svg", url: "https://www.figma.com/" },
      { name: "Adobe XD", iconLink: "/svgs/xd.svg", url: "https://helpx.adobe.com/xd/get-started.html" },
      { name: "Unity", iconLink: "/svgs/unity.svg", url: "https://unity.com/" },
      { name: "Photoshop", iconLink: "/svgs/photoshop.svg", url: "https://www.adobe.com/products/photoshop.html" },
      { name: "Illustrator", iconLink: "/svgs/illustrator.svg", url: "https://www.adobe.com/products/illustrator.html" },
      { name: "After Effects", iconLink: "/svgs/aftereffects.svg", url: "https://www.adobe.com/products/aftereffects.html" },
    ],
  },
  {
    category: "Dev Tools",
    description: "My favorite tools for AI-assisted coding and workflow orchestration.",
    items: [
      { name: "VS Code", iconLink: "/svgs/vscode.svg", url: "https://code.visualstudio.com/" },
      { name: "PyCharm", iconLink: "/svgs/pycharm.svg", url: "https://www.jetbrains.com/pycharm/" },
      { name: "ClaudeCode", iconLink: "/svgs/claudecode-color.svg", url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview" },
      { name: "Trae", iconLink: "/svgs/trae-color.svg", url: "https://www.trae.ai/" },
    ],
  }
];

export const technologies = categorizedTechnologies.flatMap(c => c.items);

export const sections = [
  { idRoute: "/#about", name: "About" },
  { idRoute: "/#experience", name: "Experience" },
  { idRoute: "/#projects", name: "Projects" },
  { idRoute: "/#activities", name: "Activities" },
  { idRoute: "/#awards", name: "Awards" },
  { idRoute: "/#contact", name: "Contact" },
];

export const companies = [
  "Walking Lab",
  "Positive Psychology Lab",
  "ZHIPU AI",
  "Nolibox",
  "Future Lab"
];

export const companiesInfo = [
  {
    title: "Research Assistant",
    company: "Tsinghua University - Walking Lab",
    companyUrl: "https://github.com/walkinglabs",
    location: "Shenzhen, China",
    duration: "Jan 2026 - Present",
    image: "/lab1.png",
    roles: [
      "Engaged in an open-source lab from THU SIGS focused on agentic AI, intelligent agents, and reinforcement learning (RL).",
      "Participate in core projects (such as tutorials) and take charge of the front-end development and content creation for the lab's website.",
      "Explore and build next-generation AI infrastructure, LLM systems, and embodied intelligence with the community."
    ],
  },
  {
    title: "Research Assistant & Data Analyst",
    company: "Tsinghua University - Positive Psychology Computing Lab",
    companyUrl: "https://mp.weixin.qq.com/s/6ET2g_rW0BTyzWK2sUKtCA",
    location: "Beijing, China",
    duration: "Sep 2024 - Present",
    image: "/lab2.jpg",
    roles: [
      "Take charge of core R&D and testing for major research projects at the intersection of Psychology, AI, and VR.",
      "Develop targeted digital interventions focusing on depression, ADHD, and psychological resilience for military personnel and general student populations.",
      "Independently manage the lab's official account (3000+ academic followers), translating cutting-edge Computational Positive Psychology (CPP) research into public content."
    ],
  },
  {
    title: "LLM Product & Developer Intern",
    company: "Beijing Zhipu Huazhang Technology (Zhipu AI)",
    companyUrl: "https://www.zhipuai.cn/",
    location: "Beijing, China",
    duration: "Oct 2024 – Feb 2025",
    image: "/svgs/zhipu.svg",
    roles: [
      "Contributed to the development of the AICO AI Agent Platform, focusing on product design, workflow structuring, and user-oriented feature development for enterprise and public sector clients.",
      "Led the redesign of the “Workflow Canvas” in AICO 2.0, improving usability and enabling users to build AI workflows more intuitively; developed key workflow tools such as document generation and data transformation modules using Python.",
      "Engaged in ToG (government-oriented) projects, supporting onboarding and training sessions for institutional users, including facilitating the adoption of AI workflow tools in large-scale organizations.",
      "Authored product documentation and user manuals, translating complex technical logic into accessible and structured guidance for diverse users.",
      "Conducted user research and competitive analysis to align product features with real-world needs and improve overall usability."
    ],
  },
  {
    title: "Creative Visual Design Intern",
    company: "Nolibox Computational Aesthetics Lab",
    companyUrl: "https://www.nolibox.com/",
    location: "Beijing, China",
    duration: "May 2024 – Sep 2024",
    image: "/svgs/nolibox.svg",
    roles: [
      "Focused on the visual application of Generative AI, responsible for building complex AI workflows via ComfyUI, as well as the local deployment, training, and prompt optimization of GenAI models.",
      "Actively contributed to product definition by authoring detailed Product Requirements Documents (PRDs), meticulously outlining the business logic and technical implementation for core features.",
      "Effectively bridged technical R&D and UX design by translating cutting-edge AI capabilities into actionable visual design solutions and structured documentation, boosting both visual impact and development efficiency."
    ],
  },
  {
    title: "E-Learning & UX Design Researcher",
    company: "Future Laboratory, Tsinghua University",
    companyUrl: "https://thfl.tsinghua.edu.cn/en/",
    location: "Beijing, China",
    duration: "2023 - 2024",
    image: "/svgs/futurelab.svg",
    roles: [
      "Participated in the R&D and validation of an innovative STEAM e-learning and intelligent teaching tool, integrating Arduino hardware and sensor technology.",
      "Led the visual UI/UX design of the educational platform to ensure a seamless and engaging learning experience.",
      "Conducted user testing and iteratively improved the system based on feedback."
    ],
  }
];

export const awards = [
  {
    title: "National Bronze & Multiple Provincial 1st/2nd Prizes",
    organization: "China International College Students' Innovation Competition",
    date: "",
    description: "Secured the National Bronze Award in the Red Journey Track, alongside multiple Beijing Municipal 1st and 2nd Prizes across the Main, Red Journey, and Industry tracks."
  },
  {
    title: "National 2nd Prize & Multiple Provincial 1st/2nd Prizes",
    organization: "National Digital Art, 3D Design & Media Creativity Competitions",
    date: "",
    description: "Awarded the National 2nd Prize at the 18th NCDA, Beijing Municipal 1st Prize in 3D Digital Innovation, and several other provincial awards in digital media and design competitions."
  },
  {
    title: "National 2nd Prize & Provincial Gold Award",
    organization: "IoT Technology & Entrepreneurship Plan Competitions",
    date: "",
    description: "Won the National 2nd Prize in the '3S Cup' IoT Technology Competition and the Gold Award in the Capital 'Challenge Cup' Entrepreneurship Plan Competition for innovative tech solutions."
  },
  {
    title: "Merit Student, Cultural & Sports Activist, & Multiple Scholarships",
    organization: "University Academic & Extracurricular Honors",
    date: "",
    description: "Recognized as a Merit Student and Active Participant in Cultural & Sports Activities, and awarded University Second-class and Third-class Scholarships for academic excellence."
  },
  {
    title: "Software Copyright, Municipal Project Grant & Excellent Proposal Award",
    organization: "Research, Innovation & Social Engagement",
    date: "",
    description: "Registered an independent Software Copyright, led a Municipal-level College Student Innovation Training Program, and won the Beijing Excellent Mock CPPCC Proposal Award."
  }
];

export const projects = [
  {
    name: "EASY-VIBE",
    type: "Open-Source AI Application Development Learning System",
    description:
      "A phenomenal open-source AI programming tutorial (5.1k+ GitHub Stars) backed by <a href='https://github.com/datawhalechina' target='_blank' class='text-secondary-color-3 hover:underline'>Datawhale</a> (GitHub Global Top 30) designed to empower everyone to build real products through conversation. I led the UI/UX design, frontend implementation, content creation, and early-stage requirement validation. Our tutorial has successfully helped a diverse range of learners—including rural teachers, college students, high school IT teachers, and even truck drivers—turn their ideas into launchable applications.",
    image: "/easyvibe.png",
    liveLink: "https://datawhalechina.github.io/easy-vibe/zh-cn/",
    githubLink: "https://github.com/datawhalechina/easy-vibe",
    stacks: ["Python", "Cursor", "Claude", "UI/UX", "Frontend", "Product Design"],
  },
  {
    name: "HELLOCLAW",
    type: "Open-Source OpenClaw AI Learning Framework",
    description:
      "As a Co-founder and core contributor of this project under <a href='https://github.com/datawhalechina' target='_blank' class='text-secondary-color-3 hover:underline'>Datawhale</a> (GitHub Global Top 30), I led the frontend and UI/UX design. The project quickly garnered 1.6k+ GitHub Stars. I was deeply involved in writing core content—specifically focusing on security—and successfully built customized AI agents based on the Lobster architecture. The tutorial empowers users from zero basics to advanced developers to adopt and build their own AI assistants.",
    image: "/helloclaw.png",
    liveLink: "https://datawhalechina.github.io/hello-claw/",
    githubLink: "https://github.com/datawhalechina/hello-claw",
    stacks: ["OpenClaw", "Datawhale", "Frontend", "UI/UX", "AI Agents", "Security"],
  },
  {
    name: "Yanzhi Research Assistant",
    type: "AI-Assisted Scientific Knowledge Management Tool",
    description:
      "As the Project Lead and Product Manager, I designed and developed this AI-powered research assistant to simplify literature management and knowledge structuring. I was responsible for the UI/UX design, frontend development, feature conceptualization, and API integration. The project won the 'Best Product Award' in a Tsinghua University course and secured 3rd Place in the Alibaba Hackathon.",
    image: "/yanzhi.png",
    liveLink: "https://github.com/ddddfrank/yanzhi",
    githubLink: "https://github.com/ddddfrank/yanzhi",
    stacks: ["Electron", "React", "OpenAI API", "Product Management", "UI/UX"],
  }
];

export const childrenProjects = [
  {
    name: "Azure",
    type: "Marine Ecosystem Simulation Game for Children",
    description: "An educational game where players balance ecological, social, and economic metrics through strategic card choices. Players manage relationships with NPCs (Farmer, Merchant, Government Official) and see the visual and textual outcomes of their ocean management. Independently designed and developed by me.",
    image: "/azure.png",
    stacks: ["Game Design", "Independent Development", "Education"]
  },
  {
    name: "STEAM E-Learning Tool",
    type: "Educational Platform for 8-14 Year Olds",
    description: "Participated in the R&D and validation of an innovative STEAM e-learning and intelligent teaching tool, integrating Arduino hardware and sensor technology to deliver personalized educational experiences. Led the visual UI/UX design of the educational platform, translating complex hardware logic into intuitive, user-friendly, and aesthetically pleasing interactive learning modules.",
    image: "/future.png",
    stacks: ["STEAM", "Arduino", "UI/UX", "Education"]
  },
  {
    name: "Ji Qing Si (寄清思)",
    type: "VR Qingming Theme Narrative Puzzle Game",
    description: "As the Technical Lead, I developed this 6-DoF educational VR puzzle game using Unity and Oculus. With the NPC 'Xiaoliang' as a guide, players solve puzzles to uncover the cultural codes of the Qingming Festival. I implemented core mechanics including collision detection, Moebius-style cel-shading (NPR), and dynamic UI tracking. The project won the National 2nd Prize and Beijing Provincial 2nd Prize in the 18th NCDA.",
    image: "/vr.png",
    stacks: ["Unity", "Oculus VR", "C#", "Shader", "Culture"]
  },
  {
    name: "Xiang Kang (享康)",
    type: "Smart Posture Monitoring Platform for Youth",
    description: "Targeting the high prevalence of prolonged sitting and poor posture among Chinese children, I co-developed this smart cushion to safeguard youth spinal development. As a core member, I integrated Arduino with vibration and pressure sensors to detect posture in real-time. Data is transmitted via HC-08 Bluetooth to a WeChat Mini Program, where Echarts visualizes health metrics. I also incorporated Mediapipe for skeletal extraction to guide correct exercise postures.",
    image: "/hardware.png",
    stacks: ["Arduino", "Hardware", "Mediapipe", "WeChat Mini Program", "Health Tech"]
  }
];

export const activities = [
  {
    title: "Founder & President",
    organization: "Intangible Cultural Heritage Association, Tsinghua SIGS",
    date: "Sep 2025 – Present",
    description: "Founded the association, completed instructor invitation, member recruitment, and full event system construction. Organized multiple 'ICH on Campus' events, covering over 300 Chinese and international students from Morocco, Brazil, Australia and other countries."
  },
  {
    title: "Deputy Head of Culture",
    organization: "Student Union, Tsinghua SIGS",
    date: "Sep 2025 – Present",
    description: "Planned and organized campus cultural events including Freshman Singer Competition, 129 Chorus Competition, and ICH Culture Festival, reaching nearly 4000 teachers and students."
  },
  {
    title: "Core Member",
    organization: "Rural Revitalization Research Program, Yangshuo Guangxi",
    date: "Jan 2026 – Feb 2026",
    description: "Conducted in-depth field research on the application and pain points of UAV technology and AI agricultural models in local agriculture and cultural tourism industries. Compiled a data-supported industrial development research report."
  },
  {
    title: "Deputy Leader",
    organization: "Chinese Traditional Orchestra, Tsinghua SIGS Art Troupe",
    date: "Sep 2025 – Feb 2026",
    description: "Organized daily rehearsals and campus aesthetic education events; taught traditional Chinese instrument Ruan to Brazilian international students one-on-one, and performed on stage with international members."
  },
  {
    title: "International Field Study",
    organization: "Intercultural Exchange, Japan",
    date: "June 2025",
    description: "Conducted an independent field study in Japan to observe the integration of technology and social governance in East Asian contexts, enhanced my intercultural observational skills and adaptability in diverse environments."
  },
  {
    title: "Principal",
    organization: "WeChat Official Account Operation & Science Popularization",
    date: "Sep 2024 – Present",
    description: "Independently manage the official account of the Positive Psychology Computing and Serious Game Lab, gaining over 3000+ vertical academic followers; Translate cutting-edge academic papers into reader-friendly content for full-platform distribution; conduct user portrait analysis and conversion optimization via data analytics tools."
  }
];
