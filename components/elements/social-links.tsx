import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Github } from "lucide-react"

const SocialLink = ({platform, link}:{
    platform: string,
    link: string
}) => {

    const getIcon = (platform: string) => {
        switch (platform) {
            case "facebook":
                return <Facebook size="20"/>
            case "instagram":
                return <Instagram size="20"/>
            case "twitter":
                return <Twitter size="20"/>
            case "youtube":
                return <Youtube size="20"/>
            case "linkedin":
                return <Linkedin size="20"/>
            case "github":
                return <Github size="20"/>
        }
    };

  return (
    <Link href={link}>{getIcon(platform)}</Link>
  )
}

export default SocialLink