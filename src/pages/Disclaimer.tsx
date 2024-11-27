import Header from "@/components/Header/Header"

const disclaimerSections = [
  {
    title: "No Financial Advice",
    content: "Any information provided by MagicCraft, its officers, or representatives through any social media channel, communication platform, website, or other medium is solely meant for informational purposes and is not intended as financial advice. No representation or guarantee is provided by MagicCraft with respect to the accuracy, completeness, or fitness for a particular purpose of any information communicated through any platform. If you intend to make a financial decision by purchasing any MagicCraft good or service, we recommend you do so only on the consultation and advice of a concerned professional who can independently advise you on the risks that"
  },
  {
    title: "Obligation to Seek Legal Advice",
    content: "MagicCraft does not offer its goods or services, including the $MCRT crypto-token and NFTs sold through the MagicCraft marketplace, in any jurisdiction where such sale may be considered illegal. If you intend to purchase any MagicCraft goods or service through a third party, please consult a legal professional in your jurisdiction before doing so. Your country may have laws and regulations that penalize the holding of certain types of crypto-tokens and digital assets. Please use the following link for a list of countries where MagicCraft does not presently offer its goods or services."
  },
  {
    title: "$MCRT Only a Utility Token",
    content: "MagicCraft does not offer, represent, or hold out $MCRT as a financial investment. $MCRT is only intended to serve as a utility token that enables you to access the MagicCraft metaverse, make purchases in the MagicCraft game, and conduct transactions on the MagicCraft Marketplace. The fitness of $MCRT as an investment is categorically and specifically disclaimed by MagicCraft, its officers, and representatives."
  },
  {
    title: "Lack of Experience or Skill",
    content: "If you are new to the crypto space and do not have experience in trading digital assets, we recommend that you only purchase $MCRT and any NFTs sold through the MagicCraft Marketplace on the advice of a seasoned professional who can advise you on the financial, legal, and technical risks that you will take on as a result of such decision. If you purchase any goods or services made available to you through MagicCraft, you represent and warrant that you have read our risk statement and disclaimer contained in our Whitepaper."
  },
  {
    title: "No Adequate or Suitable Remedy",
    content: "The legal remedies available to you for recovering any losses are completely dependent on the legal framework in the jurisdiction where you reside. If you suffer any loss as a result of purchasing, holding, or selling $MCRT or any NFTs made available through the MagicCraft Marketplace, you acknowledge that you may not have any adequate or efficacious legal or other remedy to recover your losses."
  },
  {
    title: "Jurisdiction and Regulatory Risk",
    content: "The laws and regulations of certain countries penalise the purchase and holding of certain types of cryptocurrencies, tokens, and digital assets. Depending on your jurisdiction, the sale of $MCRT and MagicCraft NFTs may be in conflict with financial securities and other laws. MagicCraft presently does not offer any services in the following list of countries. If you are a resident of any of these countries, you are requested not to avail MagicCraft's services without the advice of a legal professional well-versed in the laws of your jurisdiction."
  },
  {
    title: "Taxes",
    content: "Depending on the laws of your jurisdiction, your purchase of $MCRT or MagicCraft NFTs may be subject to taxation. It is your duty to consult a tax professional to seek advice regarding the applicability of any taxes to your purchase."
  },
  {
    title: "NFTs and Intellectual Property",
    content: "MagicCraft will not be responsible for any losses that arise from the removal of any NFT uploaded by you that bears overt and obvious visual similarity to a pre-existing NFT. MagicCraft will carefully and thoroughly review any complaints alleging the violation of intellectual property or copyright law with respect to an NFT sold through the MagicCraft marketplace."
  }
]

export default function Disclaimer() {
  return (
    <div className="min-h-dvh w-full text-white bg-[#0C0C29]">
      <Header />

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Frame_307520_ute5lk.webp"
          className="hidden lg:block"
          alt="Disclaimer banner"
          width={1920}
          height={500}
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696204/Image_3_wtr574.webp"
          className="hidden md:block lg:hidden"
          alt="Disclaimer banner"
          width={1024}
          height={700}
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Image_2_qgwr9m.webp"
          className="block md:hidden"
          alt="Disclaimer banner"
          width={375}
          height={500}
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            DISCLAIMER
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="-mt-20 flex justify-center px-4">
        <main className="z-10 flex h-full w-full max-w-[65em] flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:p-10">
          <div className="mx-auto max-w-4xl">
            {/* Last Updated Notice */}
            <div className="mb-8 w-fit rounded-full bg-[#4457B84D] px-6 py-3 text-sm text-[#98FFF9]">
              Last updated: 31st March 2023
            </div>

            {/* Disclaimer Content */}
            <div className="space-y-6">
              {disclaimerSections.map((section, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-[#0C0C29] p-6 md:p-10 space-y-4"
                >
                  <h2 className="text-xl font-semibold text-[#98FFF9]">
                    {section.title}
                  </h2>
                  <p className="leading-relaxed text-white/80">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

