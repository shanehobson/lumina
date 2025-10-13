import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-lumina-cream pt-8 pb-6 relative overflow-hidden">
        <div className="lg-container:max-w-[1000px] lg-container:mx-auto">
          <div className="text-center relative z-20">
            <div className="relative inline-block">
              {/* White squiggles background - positioned relative to text */}
              <div className="absolute -top-8 -bottom-8 -left-16 -right-16 -z-10 flex items-center justify-center">
                <Image
                  src="/assets/white_squiggles.svg"
                  alt=""
                  width={800}
                  height={200}
                  className="w-[400px] h-[200px] desktop:w-[1200px] desktop:h-[600px] object-contain"
                />
              </div>
              <h1 className="font-gelasio font-normal text-[31.32px] min-[600px]:text-[33px] desktop:text-[42px] leading-none tracking-normal mb-2">
                LUMINA
              </h1>
              <div className="relative flex items-center justify-center">
                <span className="absolute left-[-50vw] right-[-50vw] top-1/2 desktop:top-[25%] h-px border-t border-dotted border-lumina-dark"></span>
                <span className="relative bg-lumina-cream px-4 font-readex font-normal text-[10.44px] min-[600px]:text-[12px] desktop:text-[16px] leading-none tracking-[0.13em]">
                  MODEL ACADEMY
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="lg-container:max-w-[1000px] lg-container:mx-auto px-5 pt-4 pb-8 desktop:px-8 desktop:pt-6 desktop:pb-12 desktop:ml-[30px]">
          <div className="relative">
            {/* Mobile/Tablet Layout (under 900px) */}
            <div className="desktop:hidden">
              {/* Model 1 - Top Left */}
              <div className="relative w-[42%] aspect-[158/165]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/544df825c9e42ab22331a9c76bd700462f45384d.jpg"
                    alt="Young model with freckles and green hair streaks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-[8px] -left-[8px] desktop:-top-[16px] desktop:-left-[16px] w-full h-full border border-[#ff9045] pointer-events-none"></div>

                {/* Children & Teenagers text - anchored to this image */}
                <p className="absolute left-0 min-[470px]:left-[7px] xs:left-[-10px] top-[calc(100%+35px)] min-[470px]:top-[calc(100%+15px)] font-readex font-normal text-[15px] min-[470px]:text-[20px] xs:text-[22px] min-[600px]:text-2xl sm:text-[26px] leading-none text-lumina-dark whitespace-nowrap">
                  CHILDREN&nbsp;&amp;&nbsp;TEENAGERS
                </p>
              </div>

              {/* Model 2 - Bottom Right */}
              <div className="absolute right-0 top-[65px] w-[37%] aspect-[139/165]">
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
                <div className="absolute -top-[8px] -right-[8px] desktop:-top-[16px] desktop:-right-[16px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
              </div>
            </div>

            {/* Desktop Layout (900px+) */}
            <div className="hidden desktop:block">
              {/* Centered container for images */}
              <div className="relative mx-auto w-fit">
                {/* Images container with exact dimensions */}
                <div className="relative w-[1000px] h-[430px]">
                  {/* Model 1 - Top Left */}
                  <div className="absolute left-0 top-0 w-[410px] h-[380px]">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src="/assets/544df825c9e42ab22331a9c76bd700462f45384d.jpg"
                        alt="Young model with freckles and green hair streaks"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -top-[8px] -left-[8px] desktop:-top-[16px] desktop:-left-[16px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
                  </div>

                  {/* Model 2 - Bottom Right - further apart on desktop */}
                  <div className="absolute right-[0px] top-[80px] w-[420px] h-[450px]">
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
                    <div className="absolute -top-[8px] -right-[8px] desktop:-top-[16px] desktop:-right-[16px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
                  </div>

                  {/* Children & Teenagers text - positioned relative to first image */}
                  <p className="absolute left-[70px] top-[420px] font-readex font-normal text-[28px] leading-none text-lumina-dark whitespace-nowrap">
                    CHILDREN&nbsp;&amp;&nbsp;TEENAGERS
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay Text with Background - works for both layouts */}
            <div className="absolute left-0 right-0 top-[120px] min-[470px]:top-[140px] min-[520px]:top-[160px] min-[690px]:top-[210px] desktop:left-[-32px] desktop:right-[-97px] desktop:top-[302px] z-10">
              <div className="desktop:max-w-[1033px] desktop:mx-auto">
                <div className="bg-black/10 backdrop-blur-sm py-2 -mx-5 desktop:mx-0 desktop:px-8">
                  <h2 className="text-center font-gelasio font-semibold text-[30px] min-[470px]:text-[34px] min-[600px]:text-[36px] min-[690px]:text-[40px] desktop:text-[62px] desktop:font-[600] leading-none text-white whitespace-nowrap">
                    MODEL SCHOOL FOR
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* We Provide Section */}
          <div className="mt-20 desktop:mt-[110px] relative">
            <div className="flex items-start gap-6 desktop:gap-40 desktop:justify-between desktop:max-w-fit desktop:mx-auto ">
              {/* Left Image with border */}
              <div className="relative w-[40%] min-w-[150px] aspect-[4/5] desktop:min-w-[280px] desktop:h-[380px] desktop:aspect-auto">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/9ec7bb2f03d7b306c00e807cba726828cff54d1c.jpg"
                    alt="Model doing backbend in white studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-[-8px] left-[-8px] desktop:bottom-[-16px] desktop:left-[-16px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
                {/* We provide text overlay */}
                <h3 className="absolute top-4 desktop:top-[11px] -right-16 desktop:right-[-95px] text-[32px] min-[600px]:text-[36px] desktop:text-[60px] font-serif desktop:whitespace-nowrap">
                  We provide :
                </h3>
              </div>

              {/* Right side text */}
              <div className="flex-1 pt-20 desktop:pt-[115px] max-w-xs desktop:max-w-none">
                <ul className="space-y-2 desktop:space-y-8 text-[13px] min-[600px]:text-[15px] desktop:text-[22px] desktop:leading-[100%] font-readex font-normal desktop:font-[200]">
                  <li className="flex gap-4 sm:gap-8 desktop:gap-16">
                    <span>Runway</span>
                    <span>Photoposing</span>
                  </li>
                  <li className="flex gap-4 sm:gap-8 desktop:gap-16 flex-wrap desktop:flex-nowrap">
                    <span>Choreography</span>
                    <span className="desktop:ml-0 desktop:whitespace-nowrap">
                      Model Etiquette
                    </span>
                  </li>
                  <li>Makeup</li>
                  <li
                    className="font-semibold text-xs min-[600px]:text-sm desktop:text-2xl border border-white px-2 py-1 inline-block desktop:whitespace-nowrap"
                    style={{ transform: "translateY(10px)" }}
                  >
                    OFFICIAL CERTIFICATE OF COMPLETION
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Naples text and October 22nd Banner container */}
        <div className="lg-container:max-w-[1200px] lg-container:mx-auto relative pt-1 desktop:pt-12">
          {/* Naples text with squiggles background */}
          <div className="absolute bottom-[20px] min-[600px]:bottom-[70px] desktop:bottom-[30px] right-0 desktop:right-[-40px]">
            <div className="relative mr-5">
              {/* Orange squiggles background */}
              <div
                className="absolute -top-40 -bottom-60 -left-52 right-8 desktop:-top-60 desktop:-bottom-80 desktop:-left-80 desktop:-right-20 -z-10"
                style={{ transform: "translateY(-10px)" }}
              >
                <Image
                  src="/assets/orange_squiggles.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Naples text */}
              <p className="relative z-10 font-gelasio font-semibold text-[24px] min-[600px]:text-[26px] desktop:text-[36px] leading-none border border-white px-4 py-2 text-lumina-dark desktop:ml-[120px]">
                Naples
              </p>
            </div>
          </div>

          {/* Spacer before scrolling banner */}
          <div className="h-[70px]"></div>
        </div>

        {/* Scrolling October 22nd Banner */}
        <div className="bg-lumina-dark py-1.5 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap inline-flex">
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl min-[600px]:text-2xl mx-8">
              OCTOBER 22nd
            </span>
          </div>
        </div>

        {/* Lumina Academy Section */}
        <section className="lg-container:max-w-[1000px] lg-container:mx-auto px-5 pt-6 pb-10">
          <div className="p-2.5">
            <h2 className="font-gelasio font-semibold text-lg min-[600px]:text-xl desktop:text-[40px] leading-none mb-4 desktop:mb-16 desktop:mt-12 desktop:relative desktop:w-fit">
              {/* Oval gradient background - desktop only */}
              <div
                className="hidden desktop:block desktop:absolute desktop:inset-0 desktop:-inset-x-28 desktop:-inset-y-10 desktop:rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255, 144, 69, 0.3) 0%, rgba(255, 144, 69, 0.15) 50%, transparent 100%)",
                  filter: "blur(16px)",
                }}
              ></div>
              <span className="desktop:relative desktop:z-10">
                Lumina Academy
              </span>
            </h2>

            <p className="font-gelasio font-normal text-sm min-[600px]:text-base desktop:text-[18px] leading-none mb-4">
              A premier modeling school for children and teens, guiding them to
              become confident, professional models. Our expert-designed program
              includes:
            </p>

            <ul className="font-gelasio font-normal text-sm min-[600px]:text-base desktop:text-[18px] leading-none space-y-2 mb-4">
              <li>
                • Runway walk, choreography, posing, etiquette, and stage
                presence
              </li>
              <li>• Master classes with industry professionals</li>
              <li>• Participation in fashion shows and beauty contests</li>
              <li>• Professional portfolio and certificate upon graduation</li>
            </ul>

            <p className="font-gelasio font-normal text-sm min-[600px]:text-base desktop:text-[18px] leading-none mb-4">
              Students gain real-world experience, confidence, and skills to
              pursue modeling—or shine in any path they choose.
            </p>

            <p className="font-gelasio font-bold italic text-sm min-[600px]:text-base desktop:text-[18px] leading-none">
              Where talent meets opportunity, and dreams take the runway.
            </p>
          </div>
        </section>

        {/* Our Founders Section */}
        <section className="lg-container:max-w-[1000px] lg-container:mx-auto px-5 pt-2 pb-12">
          <div className="text-center mb-8 desktop:mb-16 desktop:mt-12">
            <h2 className="text-2xl min-[600px]:text-[26px] desktop:text-[48px] font-serif border border-white px-4 py-2 desktop:px-6 desktop:py-3 inline-block">
              OUR FOUNDERS
            </h2>
          </div>

          {/* Nadezda Poltashkova */}
          <div className="mb-12">
            {/* Mobile/Tablet Layout (under 900px) */}
            <div className="flex gap-6 min-[600px]:gap-8 desktop:hidden">
              {/* Left side - Image and name */}
              <div className="w-1/3 flex-shrink-0 mt-[50px] min-[500px]:mt-0">
                <div className="relative w-full aspect-[120/150] mb-2">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/assets/7e5a3f8cd13208fbc2d6eb8605b3bb05e3245940.jpg"
                      alt="Nadezda Poltashkova, founder and modeling teacher"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute left-0 bottom-0 w-full h-full border border-[#ff9045] pointer-events-none"
                    style={{
                      transform: "rotate(-5deg)",
                      transformOrigin: "center",
                    }}
                  ></div>
                </div>
                <div className="relative">
                  {/* White squiggles background for name section */}
                  <div className="absolute -top-16 -bottom-16 -left-16 -right-16 -z-10">
                    <Image
                      src="/assets/white_squiggles.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm min-[600px]:text-base font-serif tracking-wider mb-1 relative z-10">
                    NADEZDA
                    <br />
                    POLTASHKOVA
                  </h3>
                  <p className="text-xs min-[600px]:text-sm text-lumina-gray relative z-10">
                    Demi Finalist
                    <br />
                    Supermodel Belarus
                    <br />
                    Modeling Teacher
                  </p>
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="flex-1 w-2/3">
                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%] mb-4">
                  Originally from Minsk, Belarus and now based in Naples,
                  Florida, Nadzeya Palitskavaya is an accomplished ballet
                  dancer, choreographer, and model with over 20 years of
                  experience in performing arts, fashion, film, and academia.
                </p>

                <ul className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%] space-y-1 mb-4">
                  <li>
                    • Graduate of the Belarusian State University of Culture and
                    Arts
                  </li>
                  <li>
                    • Former Ballet Dancer at the Belarusian State Academic
                    Musical Theater
                  </li>
                  <li>
                    • Ballet Master & Choreography Teacher with 21 years of
                    experience
                  </li>
                  <li>• PhD in Art History</li>
                  <li>• Actress in films and artistic productions</li>
                  <li>• Former national TV sports host</li>
                  <li>• 25 years of international modeling experience</li>
                  <li>
                    • Featured in fashion shows and commercial campaigns across
                    Europe & the U.S.
                  </li>
                </ul>

                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%]">
                  <strong>Mission</strong>
                  <br />
                  Nadzeya combines artistry, scholarship, and professional
                  experience to mentor the next generation of artists and
                  models—helping them unlock creativity, master their craft, and
                  shine on stage, on camera, and in life.
                </p>
              </div>
            </div>

            {/* Desktop Layout (900px and above) */}
            <div className="hidden desktop:block">
              {/* Three images in a row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/e44e148af8eb7d92a918181db0fc80f0f568d728.jpg"
                    alt="Nadezda Poltashkova portrait 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/7e5a3f8cd13208fbc2d6eb8605b3bb05e3245940.jpg"
                    alt="Nadezda Poltashkova portrait 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/2ff58669f716d69a0d736cf6d298647b467d2a26.jpg"
                    alt="Nadezda Poltashkova portrait 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name and titles */}
              <div className="text-left mb-6 relative">
                {/* White squiggles background */}
                <div className="absolute -top-32 -bottom-32 -left-32 right-32 -z-10">
                  <Image
                    src="/assets/white_squiggles.svg"
                    alt=""
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-2xl font-readex tracking-wider mb-2 text-[#ff9045] relative z-10">
                  NADZEYA POLTASHKOVA
                </h3>
                <p className="text-lg text-lumina-dark font-bold relative z-10">
                  Ballet Master • Choreographer • Model • Creative Visionary
                </p>
              </div>

              {/* Description text */}
              <div className="text-left">
                <p className="font-readex text-base leading-relaxed mb-6">
                  Originally from Minsk, Belarus and now based in Naples,
                  Florida, Nadzeya Palitskavaya is an accomplished ballet
                  dancer, choreographer, and model with over 20 years of
                  experience in performing arts, fashion, film, and academia.
                </p>

                <ul className="font-readex text-base leading-relaxed space-y-2 mb-6">
                  <li>
                    • Graduate of the Belarusian State University of Culture and
                    Arts
                  </li>
                  <li>
                    • Former Ballet Dancer at the Belarusian State Academic
                    Musical Theater
                  </li>
                  <li>
                    • Ballet Master & Choreography Teacher with 21 years of
                    experience
                  </li>
                  <li>• PhD in Art History</li>
                  <li>• Actress in films and artistic productions</li>
                  <li>• Former national TV sports host</li>
                  <li>• 25 years of international modeling experience</li>
                  <li>
                    • Featured in fashion shows and commercial campaigns across
                    Europe & the U.S.
                  </li>
                </ul>

                <p className="font-readex text-base leading-relaxed">
                  <strong>
                    <span className="text-[#ff9045]">★</span> Mission
                  </strong>
                  <br />
                  Nadzeya combines artistry, scholarship, and professional
                  experience to mentor the next generation of artists and
                  models—helping them unlock creativity, master their craft, and
                  shine on stage, on camera, and in life.
                </p>
              </div>
            </div>
          </div>

          {/* Julia Grace */}
          <div className="mt-12">
            {/* Mobile/Tablet Layout (under 900px) */}
            <div className="flex gap-6 min-[600px]:gap-8 desktop:hidden">
              {/* Left side - Image and name */}
              <div className="w-1/3 flex-shrink-0 mt-[50px] min-[500px]:mt-0">
                <div className="relative w-full aspect-[120/150] mb-2">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/assets/3ce74d2eee6b7ac2e10398b452885e82cffcb23a.jpg"
                      alt="Julia Grace, fashion innovator and mentor"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div
                    className="absolute left-0 bottom-0 w-full h-full border border-[#ff9045] pointer-events-none"
                    style={{
                      transform: "rotate(-5deg)",
                      transformOrigin: "center",
                    }}
                  ></div>
                </div>
                <div className="relative">
                  {/* White squiggles background for name section */}
                  <div className="absolute -top-16 -bottom-16 -left-16 -right-16 -z-10">
                    <Image
                      src="/assets/white_squiggles.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm min-[600px]:text-base font-serif tracking-wider mb-1 relative z-10">
                    JULIA GRACE
                  </h3>
                  <p className="text-xs min-[600px]:text-sm text-lumina-gray relative z-10">
                    Fashion Innovator
                    <br />
                    Mentor
                    <br />
                    Community Leader
                  </p>
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="flex-1 w-2/3">
                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%] mb-4">
                  Originally from Kyiv, Ukraine and now based in Naples,
                  Florida, Julia Grace is an international fashion designer
                  whose couture collections have appeared on runways in New
                  York, Paris, Milan, Dubai, and Miami. She is also Regional
                  Director for Smart Swimsuits, a leader in innovative,
                  sustainable swimwear.
                </p>

                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%] mb-4">
                  As a Casting Director for Miss Earth USA, Julia empowers young
                  women to step into confidence, discover their strengths, and
                  use their voices with purpose.
                </p>

                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%] mb-4">
                  For modeling students, Julia is a trusted guide—teaching
                  casting prep, runway skills, professionalism, and personal
                  branding. Her daughter, Valeria, an international model and
                  pageant titleholder at just 11, reflects Julia&apos;s belief
                  that passion and discipline know no age limits.
                </p>

                <p className="font-readex font-medium text-[10px] min-[600px]:text-xs desktop:text-[16px] leading-[150%]">
                  <strong>Mission</strong>
                  <br />
                  Julia&apos;s mission is simple: to help others step into their
                  power, walk with confidence, and shine on every stage of life.
                </p>
              </div>
            </div>

            {/* Desktop Layout (900px and above) */}
            <div className="hidden desktop:block">
              {/* Three images in a row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/3ce74d2eee6b7ac2e10398b452885e82cffcb23a.jpg"
                    alt="Julia Grace portrait 1"
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    quality={100}
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/f030e442d74eef1ed6e618fbb67521958d049670.jpg"
                    alt="Julia Grace portrait 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/de0db9190bcdf4a514134b18a0687b8d3e5b080e.jpg"
                    alt="Julia Grace portrait 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name and titles */}
              <div className="text-left mb-6 relative">
                {/* White squiggles background */}
                <div className="absolute -top-32 -bottom-32 -left-32 right-32 -z-10">
                  <Image
                    src="/assets/white_squiggles.svg"
                    alt=""
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-2xl font-readex tracking-wider mb-2 text-[#ff9045] relative z-10">
                  JULIA GRACE
                </h3>
                <p className="text-lg text-lumina-dark font-bold relative z-10">
                  Fashion Innovator • Mentor • Community Leader
                </p>
              </div>

              {/* Description text */}
              <div className="text-left">
                <p className="font-readex text-base leading-relaxed mb-6">
                  Originally from Kyiv, Ukraine and now based in Naples,
                  Florida, Julia Grace is an international fashion designer
                  whose couture collections have appeared on runways in New
                  York, Paris, Milan, Dubai, and Miami. She is also Regional
                  Director for Smart Swimsuits, a leader in innovative,
                  sustainable swimwear.
                </p>

                <p className="font-readex text-base leading-relaxed mb-6">
                  As a Casting Director for Miss Earth USA, Julia empowers young
                  women to step into confidence, discover their strengths, and
                  use their voices with purpose.
                </p>

                <p className="font-readex text-base leading-relaxed mb-6">
                  For modeling students, Julia is a trusted guide—teaching
                  casting prep, runway skills, professionalism, and personal
                  branding. Her daughter, Valeria, an international model and
                  pageant titleholder at just 11, reflects Julia&apos;s belief
                  that passion and discipline know no age limits.
                </p>

                <p className="font-readex text-base leading-relaxed">
                  <strong>
                    <span className="text-[#ff9045]">★</span> Mission
                  </strong>
                  <br />
                  Julia&apos;s mission is simple: to help others step into their
                  power, walk with confidence, and shine on every stage of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling October 22nd Banner */}
        <div className="bg-lumina-dark py-1.5 overflow-hidden relative z-50">
          <div className="animate-scroll whitespace-nowrap inline-flex">
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
            <span className="text-[#ff9045] font-gelasio font-bold text-xl mx-8">
              OCTOBER 22nd
            </span>
          </div>
        </div>

        {/* Naples Section */}
        <section className="lg-container:max-w-[1000px] lg-container:mx-auto px-5 pt-12 pb-0 min-[600px]:pb-24 min-[700px]:pb-40 max-[420px]:ml-[-10px] overflow-visible">
          {/* Overlapping images collage */}
          <div className="flex justify-center">
            <div className="relative w-[375px] min-[600px]:w-[450px] min-[700px]:w-[525px] desktop:w-[900px] h-[600px] desktop:h-[1200px] mb-8 desktop:mb-20 z-[2] max-[420px]:max-w-[100vw] desktop:ml-0 overflow-visible">
              {/* Top left image - moved down */}
              <div className="absolute top-[35px] left-0 max-[420px]:left-[20px] desktop:left-[20px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[280px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[350px] overflow-hidden z-[5]">
                <Image
                  src="/assets/f8dda8fbc43efbacd643a90300fda8c4d067dce1-md.jpg"
                  alt="Model portrait 1"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Naples text with orange squiggles background */}
              <div className="absolute top-[30px] left-[205px] max-[420px]:left-[225px] min-[600px]:left-[250px] min-[700px]:left-[300px] desktop:left-[800px]">
                {/* Orange squiggles background */}
                <div
                  className="absolute -top-48 -bottom-60 -left-64 right-0 z-[1] desktop:translate-x-[200px]"
                  style={{ transform: "translateX(0px)" }}
                >
                  <Image
                    src="/assets/orange_squiggles.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Naples text */}
                <div className="relative z-10 border border-white px-6 py-3 max-[420px]:relative max-[420px]:right-[40px]">
                  <h2 className="font-readex font-semibold text-[32px] min-[600px]:text-[34px] leading-[94%]">
                    NAPLES
                  </h2>
                </div>
              </div>

              {/* Second image - moved left with z-index between first and third */}
              <div className="absolute top-[120px] left-[75px] max-[420px]:left-[95px] desktop:left-[240px] w-[140px] min-[600px]:w-[168px] min-[700px]:w-[189px] desktop:w-[340px] h-[180px] min-[600px]:h-[216px] min-[700px]:h-[243px] desktop:h-[440px] overflow-hidden z-[15]">
                <Image
                  src="/assets/3e5d93c5d36628709ac63a0a9ad919a1f4cba5c0-md.jpg"
                  alt="Model portrait 2"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Third image (was left middle) */}
              <div className="absolute top-[275px] desktop:top-[470px] left-0 max-[420px]:left-[20px] desktop:left-[0px] w-[120px] min-[600px]:w-[144px] min-[700px]:w-[162px] desktop:w-[360px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[420px] overflow-hidden z-20">
                <Image
                  src="/assets/893c5ce8c741400650fafef713b441ac02119527-md.jpg"
                  alt="Model portrait 3"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Right studio image (black and white) - made skinnier and taller */}
              <div className="absolute top-[335px] desktop:top-[451px] left-[265px] max-[420px]:left-[245px] min-[600px]:left-[320px] min-[700px]:left-[380px] desktop:left-[500px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[250px] h-[150px] min-[600px]:h-[180px] min-[700px]:h-[203px] desktop:h-[340px] overflow-hidden z-10 desktop:z-[16]">
                <Image
                  src="/assets/cd5358401bb7dbdc13c3574b403166f057edf3cf-md.jpg"
                  alt="Studio equipment"
                  fill
                  className="object-cover grayscale"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Bottom center image - moved down 25px more and right 60px */}
              <div className="absolute bottom-[35px] min-[700px]:bottom-[-15px] desktop:bottom-[-145px] left-[180px] max-[420px]:left-[160px] min-[600px]:left-[210px] min-[700px]:left-[240px] desktop:left-[20px] w-[120px] min-[600px]:w-[144px] min-[700px]:w-[162px] desktop:w-[300px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[350px] overflow-hidden z-[25] desktop:z-[31]">
                <Image
                  src="/assets/cba1061db087e28bcec2d3212ce7cac7c93623d7-md.jpg"
                  alt="Model portrait 4"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Bottom right image - moved down 30px more and right 40px */}
              <div className="absolute bottom-[-45px] min-[600px]:bottom-[-105px] min-[700px]:bottom-[-155px] desktop:bottom-[-85px] left-[265px] max-[420px]:left-[245px] min-[600px]:left-[320px] min-[700px]:left-[380px] desktop:left-[285px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[380px] h-[130px] min-[600px]:h-[156px] min-[700px]:h-[176px] desktop:h-[450px] overflow-hidden z-[30]">
                <Image
                  src="/assets/2e903d3b27c832f8fdbb7848f80df8f7b93731f3-md.jpg"
                  alt="Model portrait 5"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* October 22nd text overlay with orange squiggles - Desktop only */}
              <div className="hidden desktop:block absolute desktop:bottom-[-200px] desktop:right-[-20px] desktop:left-auto z-[35]">
                {/* Orange squiggles background */}
                <div
                  className="absolute -top-24 -bottom-24 -left-32 -right-32 desktop:-top-68 desktop:-left-68 desktop:-right-64 z-[1]"
                  style={{ transform: "translateX(-60px)" }}
                >
                  <Image
                    src="/assets/orange_squiggles.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                {/* October text */}
                <div className="relative z-10 border border-white px-3 py-3">
                  <p className="text-sm min-[600px]:text-lg font-semibold desktop:font-bold">
                    OCTOBER 22ND 4:30pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* October 22nd text overlay with orange squiggles - Mobile only */}
        <div className="desktop:hidden relative -mt-6 mb-4 ml-4">
          <div className="relative inline-block">
            {/* Orange squiggles background */}
            <div className="absolute -inset-x-16 -inset-y-12 z-[1]">
              <Image
                src="/assets/orange_squiggles.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {/* October text */}
            <div className="relative z-10 border border-white px-3 py-3">
              <p className="text-sm font-bold">OCTOBER 22ND 4:30pm</p>
            </div>
          </div>
        </div>
      </main>

      {/* Orange Footer */}
      <footer className="bg-[#ff9045] text-white py-6 text-center">
        <div className="lg-container:max-w-[1000px] lg-container:mx-auto px-5">
          <p className="font-readex font-semibold text-[15px] leading-[150%] mb-2">
            SIGN UP FOR CASTING : TEXT OR CALL
          </p>
          <p className="font-readex font-semibold text-[15px] leading-[150%]">
            (239) 378-8887 &nbsp;&nbsp; (801) 560-9637
          </p>
        </div>
      </footer>
    </div>
  );
}
