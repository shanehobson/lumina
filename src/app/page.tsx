import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-lumina-cream pt-8 pb-6 relative overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="font-gelasio font-normal text-[31.32px] leading-none tracking-normal mb-2">
            LUMINA
          </h1>
          <div className="relative flex items-center justify-center">
            <span className="absolute left-0 right-0 top-1/2 h-px border-t border-dotted border-lumina-dark"></span>
            <span className="relative bg-lumina-cream px-4 font-readex font-normal text-[10.44px] leading-none tracking-[0.13em]">
              MODEL ACADEMY
            </span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-5 pt-4 pb-8">
          <div className="relative">
            {/* Model 1 - Top Left */}
            <div className="relative w-[42%] h-[165px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/assets/544df825c9e42ab22331a9c76bd700462f45384d.jpg"
                  alt="Young model with freckles and green hair streaks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-[8px] -left-[8px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
            </div>

            {/* Model 2 - Bottom Right */}
            <div className="absolute right-0 top-[65px] w-[37%] h-[165px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/assets/7fac15c95cf92e71d7ac4ecef5ebf32db1a9f9dc.jpg"
                  alt="Teen model in denim outfit smiling"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
              <div className="absolute -top-[8px] -right-[8px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
            </div>

            {/* Overlay Text with Background */}
            <div className="absolute left-0 right-0 top-[120px] z-10">
              <div className="bg-black/10 backdrop-blur-sm py-2">
                <h2 className="text-center font-gelasio font-semibold text-[30px] leading-none text-white">
                  MODEL SCHOOL FOR
                </h2>
              </div>
            </div>

            {/* Children & Teenagers text - positioned separately */}
            <p className="absolute left-0 top-[180px] font-readex font-normal text-[15px] leading-none text-lumina-dark">
              CHILDREN & TEENAGERS
            </p>
          </div>

          {/* We Provide Section */}
          <div className="mt-20 relative">
            <div className="flex items-start gap-6">
              {/* Left Image with border */}
              <div className="relative w-[40%]">
                <div className="relative h-[170px] overflow-hidden">
                  <Image
                    src="/assets/9ec7bb2f03d7b306c00e807cba726828cff54d1c.jpg"
                    alt="Model doing backbend in white studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-[-8px] left-[-8px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
                {/* We provide text overlay */}
                <h3 className="absolute top-4 -right-16 text-2xl font-serif">
                  We provide :
                </h3>
              </div>

              {/* Right side text */}
              <div className="flex-1 pt-14">
                <ul className="space-y-2 text-sm font-readex font-normal">
                  <li>Runway Photoposing</li>
                  <li>Choreography Model Etiquette</li>
                  <li>Makeup</li>
                  <li className="font-semibold pt-2 text-xs">
                    OFFICIAL CERTIFICATE OF COMPLETION
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Naples text bottom right */}
            <p className="absolute -bottom-16 right-0 font-gelasio font-normal text-[24px] leading-none">
              Naples
            </p>
          </div>
        </section>

        {/* Scrolling October 22nd Banner */}
        <div className="bg-lumina-dark py-3 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap inline-flex">
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">OCTOBER 22nd</span>
          </div>
        </div>

        {/* Our Founders Section */}
        <section className="px-5 py-12">
          <h2 className="text-2xl font-serif text-center mb-12">
            OUR FOUNDERS
          </h2>

          {/* Nadezda Poltashkova */}
          <div className="mb-12">
            <p className="text-xs text-lumina-gray mb-6">
              Originally from Minsk, Belarus and now based in Naples, Florida,
              Nadezda's journey from a small-town girl to an international model
              is inspiring, photographers and brands who are all captured by her
              undeniable presence. Each chapter has brought its own milestones,
              accomplishments...
            </p>
            <h3 className="text-xl font-serif tracking-wider mb-2">
              NADEZDA POLTASHKOVA
            </h3>
            <p className="text-sm text-lumina-gray mb-4">
              Demi Finalist
              <br />
              Supermodel Belarus
              <br />
              Modeling Teacher
            </p>

            <div className="relative w-full h-[400px] mb-4 overflow-hidden rounded-lg">
              <Image
                src="/assets/founder-nadezda.jpg"
                alt="Nadezda Poltashkova, founder and modeling teacher"
                fill
                className="object-cover"
              />
            </div>

            <ul className="text-xs text-lumina-gray space-y-1 mb-6">
              <li>★ the F.D.</li>
              <li>★</li>
              <li>★ Naples</li>
            </ul>

            <p className="text-xs text-lumina-gray">
              Nadezda's journey unfolds intriguingly marked by authenticity,
              dedication, self-empowerment and continuous evolution is true
              representation of the next generation of models and fashion
              modeling. When you're wearing the dress, the world is on the
              cutting edge of fashion...
            </p>
          </div>

          <div className="border-t border-lumina-dark"></div>

          {/* Julia Grace */}
          <div className="mt-12">
            <p className="text-xs text-lumina-gray mb-6">
              Originally from Italy, Grazia and now based in Naples, Julia's
              story is one of resilience and determination. Starting her career
              when she broke the standard mold of fashion in Italy at the time.
              Only 5 foot 6 inches tall, the was determined to prove that beauty
              and talent come in all forms...
            </p>
            <h3 className="text-xl font-serif tracking-wider mb-2">
              JULIA GRACE
            </h3>
            <p className="text-sm text-lumina-gray mb-4">
              Founder
              <br />
              Model
              <br />
              Community Leader
            </p>

            <div className="relative w-full h-[400px] mb-4 overflow-hidden rounded-lg">
              <Image
                src="/assets/founder-julia.jpg"
                alt="Julia Grace, founder and community leader"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs text-lumina-gray">
              Julia believes in modern, is not just about modeling, but about
              the is the development of your and unique voice. Julia's approach
              has always been holistic - she focuses on helping young models
              build not just their portfolios, but their confidence and
              self-worth...
            </p>

            <ul className="text-xs text-lumina-gray space-y-1 mt-4">
              <li>• Naples</li>
              <li>• Milan • Venice Lifestyle in Aisle Adders</li>
              <li>• This Is Why We Need Child Model Beauty</li>
              <li>• Etc</li>
            </ul>
          </div>
        </section>

        <div className="border-t border-lumina-dark mx-5"></div>

        {/* Naples Section */}
        <section className="px-5 py-12">
          <h2 className="text-6xl font-serif tracking-wider text-center mb-12">
            NAPLES
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src="/assets/naples-1.jpg"
                alt="Model in Naples location shoot"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg col-span-1 row-span-2">
              <Image
                src="/assets/naples-2.jpg"
                alt="Fashion shoot in Naples streets"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-32 overflow-hidden rounded-lg">
              <Image
                src="/assets/naples-3.jpg"
                alt="Black and white architectural shot"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg col-span-2">
              <Image
                src="/assets/naples-4.jpg"
                alt="Model portfolio shot in Naples"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-sm text-center mt-8 mb-4">OCTOBER 22nd 4:30pm</p>

          {/* CTA Button */}
          <div className="mt-8 mb-6">
            <button className="w-full bg-lumina-coral text-white py-4 px-6 rounded-full text-sm font-medium tracking-wider">
              SIGN UP FOR CASTING TEXT OR CALL
            </button>
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm">(239) 378-3487</p>
            <p className="text-sm">(601) 860-9657</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-lumina-dark text-lumina-cream px-5 py-4 text-center">
          <p className="text-xs tracking-wider">
            OCTOBER 22nd - OCTOBER 22nd - OCTOBER 22nd 4:30
          </p>
        </footer>
      </main>
    </>
  );
}
