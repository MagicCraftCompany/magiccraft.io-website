import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className="mb-[10px] gap-[30px] rounded-[20px] bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
        value="1"
      >
        <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl">
          WHAT IS MAGICCRAFT?
        </AccordionTrigger>
        <AccordionContent className="px-[30px] pb-[30px] text-lg md:text-2xl">
          MagicCraft is a comprehensive gaming platform that combines an
          action-packed game, a vibrant ecosystem of interconnected titles, and
          an expansive fantasy universe. MagicCraft leads as our live flagship
          battle arena, with established PvP and a newly released PvE system.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        className="mb-[10px] gap-[30px] rounded-[20px] bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
        value="2"
      >
        <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl">
          WHAT MODES AND PLATFORMS ARE AVAILABLE?
        </AccordionTrigger>
        <AccordionContent className="px-[30px] pb-[30px] text-lg md:text-2xl">
          MagicCraft is playable now on PC, Steam, iOS, and Android. Battle
          other players in established PvP modes including Capture the Point,
          Escort, and Skull Grab, or enter the new solo and co-op PvE adventure.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        className="mb-[10px] gap-[30px] rounded-[20px] bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
        value="3"
      >
        <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl">
          HOW DO I GET STARTED WITH MAGICCRAFT?
        </AccordionTrigger>
        <AccordionContent className="px-[30px] pb-[30px] text-lg md:text-2xl">
          You can download and start playing our game at any time. To become a
          part of our Web3 P2E gaming experience, set up your account on the{' '}
          <a
            className="underline"
            target="_blank"
            href="https://lobby.magiccraft.io/"
            rel="noreferrer noopener"
          >
            MagicCraft Lobby System
          </a>{' '}
          and join our{' '}
          <a
            className="underline"
            target="_blank"
            href="https://t.me/magiccraftgamechat"
            rel="noreferrer noopener"
          >
            Telegram
          </a>{' '}
          and{' '}
          <a
            className="underline"
            target="_blank"
            href="https://t.me/magiccraftgamechat"
            rel="noreferrer noopener"
          >
            Telegram
          </a>
          .
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        className="mb-[10px] gap-[30px] rounded-[20px] bg-[#11113A] data-[state=open]:mb-[30px] data-[state=open]:bg-gradient-to-l data-[state=open]:from-[#3D186D] data-[state=open]:to-[#2A0D4E]"
        value="4"
      >
        <AccordionTrigger className="p-[30px] text-left font-serif text-2xl font-bold text-[#C09AFF] data-[state=open]:text-white md:text-3xl">
          WHAT PLATFORMS DOES MAGICCRAFT SUPPORT?
        </AccordionTrigger>
        <AccordionContent className="px-[30px] pb-[30px] text-lg md:text-2xl">
          The MagicCraft game supports iOS, Android, and PC. New games in the
          MagicCraft Ecosystem will be mobile-only and will support both iOS and
          Android. <br />
          <br />
          Enjoy a complete Web3 P2E experience by setting up your account on the{' '}
          <a
            className="underline"
            target="_blank"
            href="https://lobby.magiccraft.io/"
            rel="noreferrer noopener"
          >
            MagicCraft Lobby System
          </a>
          .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqAccordion
