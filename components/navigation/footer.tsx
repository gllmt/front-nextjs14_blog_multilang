import siteConfig from "@/config/site"
import PaddingContainer from "../layout/padding-container";
import Link from 'next/link'
import SocialLink from "../elements/social-links"

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
        <PaddingContainer>
            <div>
                <h2>
                    <Link className="text-3xl font-bold" href="/">{siteConfig.siteName}</Link>
                </h2>
                <p className="max-w-md mt-2 text-neutral-700 text-lg">{siteConfig.description}</p>
            </div>
            <div className="mt-6 flex justify-between gap-4 flex-wrap">
                <div>
                    <div className="font-medium text-lg">#exploretheworld</div>
                    <div className="flex items-center gap-3 text-neutral-600 mt-2">
                        <SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin} />
                        <SocialLink platform="twitter" link={siteConfig.socialLinks.twitter} />
                        <SocialLink platform="instagram" link={siteConfig.socialLinks.instagram} />
                        <SocialLink platform="facebook" link={siteConfig.socialLinks.facebook} />
                        <SocialLink platform="youtube" link={siteConfig.socialLinks.youtube} />
                        <SocialLink platform="github" link={siteConfig.socialLinks.github} />
                    </div>
                </div>
                <div>
                    <div className="text-sm text-neutral-400">Currently At</div>
                    <div className="bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2">
                        <div className="bg-emerald-600 rounded-full w-2 h-2" />
                        {siteConfig.currentlyAt}
                    </div>
                </div>
            </div>
            <div className="border-t py-3 flex items-center gap-4 flex-wrap justify-between mt-16">
                <div className="text-sm text-neutral-400">All rights are reserved | Copyright {new Date().getFullYear()}</div>
                <div className="text-sm">Made with love by <Link className="underline underline-offset-4" href="https://www.pierreguillemot.com/">@Gllmt</Link></div>
            </div>
        </PaddingContainer>
    </div>
  )
}

export default Footer