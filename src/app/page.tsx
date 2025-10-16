import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-lumina-cream pb-6 relative overflow-hidden">
        <div className="lg-container:max-w-[1050px] lg-container:mx-auto">
          <div className="text-center relative z-20">
            <div className="relative inline-block">
              {/* White squiggles background - positioned relative to text */}
              <div className="absolute -top-8 -bottom-8 -left-16 -right-16 -z-30 flex items-center justify-center desktop:translate-y-[30px]">
                <Image
                  src="/assets/white_squiggles.svg"
                  alt=""
                  width={800}
                  height={200}
                  className="w-[400px] h-[200px] desktop:w-[1400px] desktop:h-[700px] object-contain"
                />
              </div>
              <h1
                className="font-gelasio font-normal text-[31.32px] min-[600px]:text-[33px] desktop:text-[52px] leading-none tracking-normal desktop:mb-0 desktop:pb-6 relative z-10 bg-lumina-cream lumina-heading"
                style={{ transform: "translateY(26px)" }}
              >
                LUMINA
              </h1>
              <div className="relative flex items-center justify-center">
                <span className="absolute left-[-50vw] right-[-50vw] top-1/2 desktop:top-[-15%] h-px border-t border-dotted border-lumina-dark"></span>
                <span className="relative bg-lumina-cream px-4 font-readex font-normal text-[10.44px] min-[600px]:text-[12px] desktop:text-[20px] leading-none tracking-[0.13em] z-10">
                  MODEL ACADEMY
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="lg-container:max-w-[1200px] lg-container:mx-auto px-5 pt-4 pb-8 desktop:px-8 desktop:pt-6 desktop:pb-12 desktop:ml-[30px] hero-section-container">
          <div className="relative">
            {/* Mobile/Tablet Layout (under 1050px) */}
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
                <p className="absolute left-0 min-[470px]:left-[7px] xs:left-[-10px] top-[calc(100%+25px)] min-[470px]:top-[calc(100%+15px)] font-readex font-normal text-[15px] min-[470px]:text-[20px] xs:text-[22px] min-[600px]:text-2xl sm:text-[26px] leading-none text-lumina-dark whitespace-nowrap">
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

            {/* Desktop Layout (1050px+) */}
            <div className="hidden desktop:block">
              {/* Centered container for images */}
              <div className="relative mx-auto w-full">
                {/* Images container with exact dimensions */}
                <div className="relative w-full h-[500px]">
                  {/* Model 1 - Top Left */}
                  <div className="absolute left-0 top-[-10px] w-[500px] h-[560px] hero-image-1">
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
                  <div className="absolute right-[0px] top-[30px] w-[500px] h-[580px] hero-image-2">
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
                  <p className="absolute left-[240px] top-[575px] font-readex font-normal text-[28px] leading-none text-lumina-dark whitespace-nowrap children-teenagers-text">
                    CHILDREN&nbsp;&amp;&nbsp;TEENAGERS
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay Text with Background - works for both layouts */}
            <div className="absolute left-0 right-0 top-[105px] max-[429px]:top-[100px] min-[470px]:top-[140px] min-[520px]:top-[160px] min-[690px]:top-[210px] desktop:left-[-600px] desktop:right-[-200px] desktop:top-[450px] z-10 model-school-text">
              <div className="desktop:max-w-[1033px] desktop:mx-auto">
                <div
                  className="
                   relative backdrop-blur-sm py-2
                   max-[1049px]:w-screen
                   max-[1049px]:mx-[calc(50%-50vw)]
                   max-[1049px]:left-[-35px]
                   desktop:mx-auto desktop:px-8 desktop:w-[min(1400px,100vw)]
                 "
                >
                  <h2 className="text-center font-gelasio font-semibold text-[30px] min-[470px]:text-[34px] min-[600px]:text-[36px] min-[690px]:text-[40px] desktop:text-[68px] desktop:font-[600] leading-none text-gray-200 whitespace-nowrap">
                    MODEL SCHOOL FOR
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Orange squiggles decoration with Naples text - Desktop only */}
          <div className="hidden desktop:block relative desktop:mt-[70px] desktop:mb-[80px]">
            <div className="relative flex justify-center">
              {/* Orange squiggles background */}
              <div className="relative w-[700px] h-[600px] -translate-x-[100px] -translate-y-[100px] -z-10 orange-squiggles-top">
                <Image
                  src="/assets/orange_squiggles.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Naples text positioned over squiggles */}
              <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 border-2 border-white px-6 py-3 z-10 naples-text-top">
                <h2 className="font-readex font-semibold text-[48px] leading-[94%]">
                  NAPLES
                </h2>
              </div>
            </div>
          </div>

          {/* We Provide Section - Mobile Only (before October banner) */}
          <div className="desktop:hidden mt-20 relative we-provide-mobile">
            <div className="flex items-start gap-6">
              {/* Left Image with border */}
              <div className="relative w-[40%] min-w-[150px] aspect-[4/5]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/9ec7bb2f03d7b306c00e807cba726828cff54d1c.jpg"
                    alt="Model doing backbend in white studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-[-8px] left-[-8px] w-full h-full border border-[#ff9045] pointer-events-none"></div>
                {/* We provide text overlay */}
                <h3 className="absolute top-4 -right-16 text-[32px] min-[600px]:text-[36px] font-serif">
                  <span className="backdrop-blur-sm px-0 py-0 inline-block">
                    We provide :
                  </span>
                </h3>
              </div>

              {/* Right side text */}
              <div className="flex-1 pt-20 max-w-xs">
                <ul className="space-y-2 text-[13px] min-[600px]:text-[15px] font-readex font-normal">
                  <li className="flex gap-4 sm:gap-8">
                    <span>Runway</span>
                    <span>Photoposing</span>
                  </li>
                  <li className="flex gap-4 sm:gap-8 flex-wrap">
                    <span>Choreography</span>
                    <span>Model Etiquette</span>
                  </li>
                  <li>Makeup</li>
                  <li
                    className="font-semibold text-xs min-[600px]:text-sm border-2 border-white px-2 py-1 inline-block whitespace-nowrap certificate-text-mobile"
                    style={{ transform: "translateY(10px)" }}
                  >
                    OFFICIAL&nbsp;CERTIFICATE&nbsp;OF&nbsp;COMPLETION
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scrolling October 22nd Banner */}
          <div className="desktop:hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-lumina-dark py-1.5 overflow-hidden -mt-[340px] october-banner-top">
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

          {/* We Provide Section - Desktop Only */}
          <div className="hidden desktop:block mt-20 desktop:-mt-[310px] relative we-provide-section">
            <div className="flex items-start gap-6 desktop:gap-40 desktop:justify-between desktop:max-w-fit desktop:mx-auto ">
              {/* Left Image with border */}
              <div className="relative w-[40%] min-w-[150px] aspect-[4/5] desktop:min-w-[360px] desktop:h-[460px] desktop:aspect-auto">
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
                <h3 className="absolute top-4 desktop:top-[11px] -right-16 desktop:right-[-95px] text-[32px] min-[600px]:text-[36px] desktop:text-[68px] font-serif desktop:whitespace-nowrap">
                  <span className="backdrop-blur-sm px-0 py-0 desktop:px-8 desktop:pl-[150px] inline-block">
                    We provide :
                  </span>
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
                    className="font-semibold text-xs min-[600px]:text-sm desktop:text-2xl border-2 border-white px-2 py-1 inline-block whitespace-nowrap certificate-text"
                    style={{ transform: "translateY(10px)" }}
                  >
                    OFFICIAL&nbsp;CERTIFICATE&nbsp;OF&nbsp;COMPLETION
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* October 22nd Scrolling Banner - Desktop Only */}
        <div className="hidden desktop:block w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-lumina-dark py-1.5 overflow-hidden desktop:mt-[35px]">
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

        {/* Naples text container */}
        <div className="lg-container:max-w-[1050px] lg-container:mx-auto relative pt-1 desktop:pt-[-8px] desktop:hidden naples-mobile-container">
          {/* Naples text with squiggles background */}
          <div className="absolute bottom-[20px] min-[600px]:bottom-[70px] desktop:bottom-[30px] right-0 desktop:right-[0px] naples-text-mobile">
            <div className="relative mr-5">
              {/* Orange squiggles background */}
              <div
                className="absolute -top-40 -bottom-60 -left-52 right-8 desktop:-top-60 desktop:-bottom-80 desktop:-left-80 desktop:-right-20 -z-20 orange-squiggles-mobile"
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
              <p className="relative z-10 font-gelasio font-semibold text-[24px] min-[600px]:text-[26px] desktop:text-[36px] leading-none border-2 border-white px-4 py-2 text-lumina-dark desktop:ml-[80px]">
                Naples
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-[70px]"></div>
        </div>

        {/* Lumina Academy Section */}
        <section className="lg-container:max-w-[1050px] lg-container:mx-auto px-5 pt-6 pb-10 desktop:pt-16 lumina-academy-section">
          <div className="text-center mb-8 desktop:mb-16 desktop:mt-12">
            <h2 className="text-2xl min-[600px]:text-[26px] desktop:text-[48px] font-serif border-2 border-white px-4 py-2 desktop:px-6 desktop:py-3 inline-block">
              LUMINA ACADEMY
            </h2>
          </div>
          <div className="p-2.5">
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
        <section className="lg-container:max-w-[1050px] lg-container:mx-auto px-5 pt-[18px] desktop:pt-2 pb-12">
          <div className="text-center mb-8 desktop:mb-16 desktop:mt-12">
            <h2 className="text-2xl min-[600px]:text-[26px] desktop:text-[48px] font-serif border-2 border-white px-4 py-2 desktop:px-6 desktop:py-3 inline-block">
              OUR FOUNDERS
            </h2>
          </div>

          {/* Nadezda Poltashkova */}
          <div className="mb-12">
            {/* Mobile/Tablet Layout (under 1050px) */}
            <div className="flex gap-6 min-[600px]:gap-8 desktop:hidden">
              {/* Left side - Image and name */}
              <div className="w-1/3 flex-shrink-0">
                <div className="relative w-full aspect-[100/150] mb-2">
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
                    NADZEYA
                    <br />
                    PALITSKAVAYA
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
              <div className="flex-1 w-2/3 founder-profile-text">
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

            {/* Desktop Layout (1050px and above) */}
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
                  NADZEYA PALITSKAVAYA
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
            {/* Mobile/Tablet Layout (under 1050px) */}
            <div className="flex gap-6 min-[600px]:gap-8 desktop:hidden">
              {/* Left side - Image and name */}
              <div className="w-1/3 flex-shrink-0">
                <div className="relative w-full aspect-[100/150] mb-2">
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
              <div className="flex-1 w-2/3 founder-profile-text">
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
                  <strong>
                    <span className="text-[#ff9045]">★</span> Mission
                  </strong>
                  <br />
                  Julia&apos;s mission is simple: to help others step into their
                  power, walk with confidence, and shine on every stage of life.
                </p>
              </div>
            </div>

            {/* Desktop Layout (1050px and above) */}
            <div className="hidden desktop:block">
              {/* Three images in a row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/assets/3ce74d2eee6b7ac2e10398b452885e82cffcb23a.jpg"
                    alt="Julia Grace portrait 1"
                    fill
                    sizes="(max-width: 1050px) 100vw, 33vw"
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

        {/* Naples Section */}
        <section className="lg-container:max-w-[1050px] lg-container:mx-auto px-5 pt-12 pb-0 min-[600px]:pb-24 min-[700px]:pb-40 max-[420px]:ml-[-10px] overflow-visible">
          {/* Overlapping images collage */}
          <div className="flex justify-center">
            <div className="relative w-[375px] min-[600px]:w-[450px] min-[700px]:w-[525px] desktop:w-[1200px] h-[600px] desktop:h-[1630px] mb-8 desktop:mb-20 z-[2] max-[420px]:max-w-[100vw] desktop:ml-[-25px] overflow-visible">
              {/* Top left image - moved down */}
              <div className="absolute top-[35px] desktop:top-[70px] left-0 max-[420px]:left-[20px] desktop:left-[25px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[350px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[450px] overflow-hidden z-[5]">
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
              <div className="absolute top-[30px] left-[205px] max-[420px]:left-[225px] min-[600px]:left-[250px] min-[700px]:left-[300px] desktop:left-[805px]">
                {/* Orange squiggles background */}
                <div
                  className="absolute -top-48 -bottom-60 -left-64 right-0 -z-10 desktop:translate-x-[200px]"
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
                <div className="relative z-10 border-2 border-white px-6 py-3 max-[420px]:relative max-[420px]:right-[40px]">
                  <h2 className="font-readex font-semibold text-[32px] min-[600px]:text-[34px] desktop:text-[48px] leading-[94%]">
                    NAPLES
                  </h2>
                </div>
              </div>

              {/* Second image - moved left with z-index between first and third */}
              <div className="absolute top-[120px] desktop:top-[195px] left-[75px] max-[420px]:left-[95px] desktop:left-[375px] w-[140px] min-[600px]:w-[168px] min-[700px]:w-[189px] desktop:w-[420px] h-[180px] min-[600px]:h-[216px] min-[700px]:h-[243px] desktop:h-[540px] overflow-hidden z-[15]">
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
              <div className="absolute top-[275px] desktop:top-[585px] left-0 max-[420px]:left-[20px] desktop:left-[55px] w-[120px] min-[600px]:w-[144px] min-[700px]:w-[162px] desktop:w-[450px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[520px] overflow-hidden z-20">
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
              <div className="absolute top-[335px] desktop:top-[546px] left-[265px] max-[420px]:left-[245px] min-[600px]:left-[320px] min-[700px]:left-[380px] desktop:left-[670px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[320px] h-[150px] min-[600px]:h-[180px] min-[700px]:h-[203px] desktop:h-[430px] overflow-hidden z-10 desktop:z-[16]">
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
              <div className="absolute bottom-[35px] min-[700px]:bottom-[-15px] desktop:bottom-[-75px] left-[180px] max-[420px]:left-[160px] min-[600px]:left-[210px] min-[700px]:left-[240px] desktop:left-[155px] w-[120px] min-[600px]:w-[144px] min-[700px]:w-[162px] desktop:w-[380px] h-[140px] min-[600px]:h-[168px] min-[700px]:h-[189px] desktop:h-[450px] overflow-hidden z-[25] desktop:z-[31]">
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
              <div className="absolute bottom-[-45px] min-[600px]:bottom-[-105px] min-[700px]:bottom-[-155px] desktop:bottom-[15px] left-[265px] max-[420px]:left-[245px] min-[600px]:left-[320px] min-[700px]:left-[380px] desktop:left-[475px] w-[110px] min-[600px]:w-[132px] min-[700px]:w-[149px] desktop:w-[460px] h-[130px] min-[600px]:h-[156px] min-[700px]:h-[176px] desktop:h-[550px] overflow-hidden z-[30]">
                <Image
                  src="/assets/2e903d3b27c832f8fdbb7848f80df8f7b93731f3-md.jpg"
                  alt="Model portrait 5"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* October 22nd text overlay with orange squiggles - Desktop only. */}
              <div className="hidden desktop:block absolute desktop:bottom-[-220px] desktop:right-[10px] desktop:left-auto z-[35]">
                {/* Orange squiggles background */}
                <div
                  className="absolute -top-52 -bottom-24 -left-32 -right-32 desktop:-top-100 desktop:-left-100 desktop:-right-100 desktop:-bottom-100 -z-10"
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
                <div className="relative z-10 border-2 border-white px-3 py-3 top-[-50px]">
                  <p className="text-sm min-[600px]:text-lg desktop:text-2xl font-semibold desktop:font-bold">
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
            <div className="absolute -inset-x-16 -inset-y-12 -z-10">
              <Image
                src="/assets/orange_squiggles.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {/* October text */}
            <div className="relative z-10 border-2 border-white px-3 py-3">
              <p className="text-sm font-bold">OCTOBER 22ND 4:30pm</p>
            </div>
          </div>
        </div>
      </main>

      {/* Orange Footer */}
      <footer className="bg-[#ff9045] text-white py-6 text-center">
        <div className="lg-container:max-w-[1050px] lg-container:mx-auto px-5">
          <p className="font-readex font-semibold text-[15px] leading-[150%] mb-2">
            SIGN UP FOR CASTING : TEXT OR CALL
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="font-readex font-semibold text-[15px] leading-[150%]">
              (239) 378-8887 &nbsp;&nbsp; (801) 560-9637
            </p>
            <a
              href="https://www.instagram.com/lumina.academy.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:scale-105 transition-transform cursor-pointer relative z-10"
              style={{ pointerEvents: "auto" }}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
