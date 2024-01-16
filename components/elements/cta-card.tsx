import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
const CTACard = () => {
  return (
    <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/30 to-white/30 z-10" />
            <Image
                fill
                alt="CTA Card Image"
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
                />
            <div className="relative z-20">
              <div className="font-medium text-lg">#exploretheworld</div>
              <h3 className="text-4xl font-semibold mt-3">Explore the world with me!</h3>
              <p className="mt-2 text-lg max-w-lg"> Explore the world with me! I'm travelling around the 🌍. I've visited
                most of the great cities of 🇺🇸 and currently I'm travelling in 🇪🇺 Join
                me!
              </p>
              <form className="mt-6 flex items-center gap-2 w-full">
                <input placeholder="Write your email." className="bg-white/80 text-base placeholder:text-sm rounded-md px-3 py-2 outline-none focus:ring-2 ring-neutral-600 w-full md:w-auto" />
                <button className="bg-neutral-900 rounded-md px-3 py-2 text-neutral-200 whitespace-nowrap">Sign Up</button>
              </form>
          </div>
    </div>
  )
}

export default CTACard