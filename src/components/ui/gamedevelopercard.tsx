
export default function OpenSourceFeatures() {
  return (
    <div className=" bg-[#11113A] max-w-6xl mx-auto rounded-[30px] text-white p-6 md:pt-12 z-20 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Character Skins Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
              OPEN-SOURCE CHARACTER SKINS
            </h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p>
              We’re making select MagicCraft character models publicly available so that 3D artists can download them, create unique skins, and submit their work back to us. Once a submitted skin is approved, we’ll mint it as an NFT, integrate it directly into our game, and list it on our marketplace.              </p>
              <p>
              Creators earn from each sale, while players enjoy a growing selection of community-driven cosmetics. This approach requires minimal effort on our part, beyond supplying the model and integrating completed skins, and delivers maximum creative freedom and earning opportunities for the community.              </p>
            </div>
          </div>
          <div className="relative ">
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1734081608/Frame_427319616_kjrurz.webp"
              alt="Character skin examples showing different warrior and animal-like characters"
              
              className="object-contain rounded-lg md:mt-12"
              
            />
          </div>
        </section>

        {/* Maps Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 relative  ">
            <img
              src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1734081705/Frame_427319616_1_n2cjgn.webp"
              alt="Game map examples showing fantasy environments"
              className="object-contain rounded-lg"
              
            />
          </div>
          <div className="order-1 lg:order-2 space-y-4 ">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
              OPEN-SOURCE MAPS
            </h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p>
              We will soon enable creators to design and submit custom maps using our proprietary environment assets and Unity development framework.              </p>
              <p>
              Approved submissions will be integrated into the game’s ecosystem, deployed on the marketplace, and monetized through player activity, allowing developers to actively shape the MagicCraft metaverse while earning rewards.              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

