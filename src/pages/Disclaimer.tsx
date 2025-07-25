import styled from "styled-components";
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: initial;
  max-width: 70rem;
  gap: 1rem;
  padding-inline: 2rem;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-block: 2rem;
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #4457B84D;
  color: #98FFF9;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #4457B860;
    transform: translateX(-2px);
  }
  
  &:active {
    transform: translateX(-1px);
  }
`;

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
  const canonical = 'https://www.magiccraft.io/disclaimer';
  
  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Disclaimer - MagicCraft</title>
        <meta name="description" content="MagicCraft Disclaimer. Important information about risks, legal obligations, and limitations when using MagicCraft services." />
        <meta name="keywords" content="MagicCraft, disclaimer, risks, legal, MCRT, NFT, cryptocurrency" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Disclaimer - MagicCraft" />
        <meta property="og:description" content="Important disclaimer information about risks and legal obligations when using MagicCraft services." />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <Wrapper className="text-slate-100">
        <InnerWrapper>
          <BackButton onClick={handleBack}>
            ← Back
          </BackButton>
          
          <h1>MAGICCRAFT DISCLAIMER</h1>
          
          {/* Last Updated Notice */}
          <div style={{ 
            width: 'fit-content',
            borderRadius: '12px',
            background: '#4457B84D',
            padding: '16px',
            fontSize: '14px',
            color: '#98FFF9',
            marginBottom: '24px'
          }}>
            Last updated: 31st March 2023
          </div>

          {/* Disclaimer Content */}
          {disclaimerSections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

