// Portfolio configuration and personal information
// Single source of truth for all personal data, links, and contact information

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  mapUrl: string;
}

export interface ProfessionalInfo {
  name: string;
  title: string;
  shortTitle: string;
  education: {
    institution: string;
    years: string;
    degree: string;
  };
}

export interface Images {
  avatar: string;
}

export interface PortfolioConfig {
  personal: ProfessionalInfo;
  contact: ContactInfo;
  social: SocialLinks;
  images: Images;
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Salahuddin',
    title: 'Software Developer',
    shortTitle: 'developer',
    education: {
      institution: 'Stellenbosch University',
      years: '2021-2023',
      degree: 'Bachelor of Mathematics & Computer Science',
    },
  },
  contact: {
    email: 'salahuddinsaiet.10@gmail.com',
    location: 'Cape Town, South Africa',
    mapUrl: 'https://maps.google.com/?q=Cape+Town,+South+Africa',
  },
  social: {
    github: 'https://github.com/saiby100',
    linkedin: 'https://www.linkedin.com/in/salahuddin-saiet-2a7190241',
    instagram: 'https://instagram.com/_salah_btw',
  },
  images: {
    avatar: '/me.png',
  },
};

// Convenience exports
export const { personal, contact, social, images } = portfolioConfig;
