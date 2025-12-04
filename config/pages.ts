import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Rodney Roy Gitonga's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Rodney Roy Gitonga's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Rodney Roy Gitonga's projects in data analytics and automation.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Rodney Roy Gitonga.",
    },
  },
  contributions: {
    title: "Certifications",
    description: "Professional licenses and certifications.",
    metadata: {
      title: "Certifications",
      description:
        "Rodney Roy Gitonga's professional licenses and certifications.",
    },
  },
  resume: {
    title: "Resume",
    description: "Rodney Roy Gitonga's resume.",
    metadata: {
      title: "Resume",
      description: "Rodney Roy Gitonga's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Rodney Roy Gitonga's professional journey and experience timeline.",
    },
  },
};
