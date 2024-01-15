export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        github: string;
        youtube: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and lovely travel blog which shares experiences and citiest around the world!",
    currentlyAt: "Limoges",
    socialLinks: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        youtube: "https://www.youtube.com/",
    }
};

export default siteConfig;