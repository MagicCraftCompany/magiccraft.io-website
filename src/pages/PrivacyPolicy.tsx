import Header from '@/components/Header/Header'
function PrivacyPolicy() {
  return (
    <div className="min-h-dvh w-full text-white">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="relative">
        {/* Desktop Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Frame_307520_ute5lk.webp"
          className="hidden h-[500px] w-full object-cover lg:block"
          alt=""
        />

        {/* Tablet Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696204/Image_3_wtr574.webp"
          className="hidden h-[700px] w-full object-cover md:block lg:hidden"
          alt=""
        />

        {/* Mobile Image */}
        <img
          src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732696195/Image_2_qgwr9m.webp"
          className="block h-[500px] w-full object-cover md:hidden"
          alt=""
        />

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            PRIVACY POLICY
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="-mt-20 flex justify-center">
        <main className="z-10 flex h-full max-w-[100em] flex-col gap-[30px] rounded-[30px] bg-[#11113A] p-6 lg:p-10">
          {/* Privacy Policy Content */}
          <div className="mx-auto max-w-4xl">
            {/* Last Updated Notice */}
            <div className="mb-4 w-fit rounded-4xl bg-[#4457B84D] p-4 text-sm text-[#98FFF9]">
              Last updated: 31st March 2023
            </div>

            {/* Policy Sections */}
            <div className="space-y-6 rounded-3xl bg-[#0C0C29] p-6 md:p-10">
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p className="leading-relaxed text-white/80">
                  At MagicCraft, we respect your privacy and are committed to
                  protecting your personal information. This Privacy Policy
                  outlines our practices for collecting, using, maintaining,
                  protecting, and disclosing the information we collect from you
                  or that you provide when you access or use our mobile game,
                  "MagicCraft" (the "Game"), and any related content, features,
                  or services (collectively, the "Services").
                </p>
                <p className="leading-relaxed text-white/80">
                  Please read this Privacy Policy carefully to understand our
                  policies and practices regarding your information and how we
                  will treat it. By accessing or using our Services, you agree
                  to this Privacy Policy. If you do not agree with our policies
                  and practices, your choice is not to use our Services. This
                  Privacy Policy may change from time to time (see "Changes to
                  This Privacy Policy"), and your continued use of our Services
                  after we make changes is deemed to be acceptance of those
                  changes. Therefore, we encourage you to review this Privacy
                  Policy periodically for updates.
                </p>
                <p className="leading-relaxed text-white/80">
                  If you have any questions or concerns about our privacy
                  practices, please contact us using the contact information
                  provided at the end of this Privacy Policy.
                </p>
              </section>

              {/* Scope of the Policy */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                  2. Scope of this Privacy Policy
                </h2>

                <p className="leading-relaxed text-white/80">
                  This Privacy Policy applies to all information collected about
                  you by MagicCraft when you access or use our Game and related
                  Services, regardless of how you access or use them, including
                  through mobile devices, computers, or any other means. This
                  Privacy Policy also covers our collection, use, and disclosure
                  of your information in connection with any communication
                  between you and MagicCraft, such as email correspondence,
                  customer support inquiries, or any other interactions related
                  to the Game and Services.
                </p>
                <p className="leading-relaxed text-white/80">
                  his Privacy Policy does not apply to information collected
                  by:a. MagicCraft through any other means, including on any
                  other website or application operated by MagicCraft or any
                  third party (including our affiliates and subsidiaries); orb.
                  Any third party (including our affiliates and subsidiaries),
                  including through any application or content (including
                  advertising) that may link to or be accessible from or on our
                  Game and Services.
                </p>
                <p className="leading-relaxed text-white/80">
                  Please note that the Game and Services may contain links to
                  other websites, applications, or online services operated by
                  third parties. We are not responsible for the privacy
                  practices or the content of those third-party websites,
                  applications, or services, and this Privacy Policy does not
                  apply to your use of them. We encourage you to review the
                  privacy policies of any third-party websites, applications, or
                  services you may access or use to understand their data
                  collection and use practices.
                </p>
              </section>

              {/* Information We Collect */}
               {/* Scope of the Policy */}
               <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                3. Information We Collect                
                </h2>

                <p className="leading-relaxed text-white/80">
                We collect various types of information from and about you when you access or use our Game and Services, which can be broadly categorized into personal information and non-personal information.
                </p>
                <p className="leading-relaxed text-white/80">
                a. Personal Information:Personal information refers to any information that can be used to identify you as an individual, either directly or indirectly. Examples of personal information we may collect include, but are not limited to, your name, email address, username, password, date of birth, and any other information you choose to provide when creating an account, interacting with our customer support, or participating in promotions or surveys.
                </p>
                <p className="leading-relaxed text-white/80">
                b. Non-Personal Information:Non-personal information refers to any information that cannot be used to directly identify you as an individual. Examples of non-personal information we may collect include, but are not limited to, device information (such as device type, operating system, and unique device identifiers), usage data (such as game progress, scores, achievements, and user preferences), and information collected through cookies and other tracking technologies (such as IP addresses, browser types, and access times).
                </p>
                <p className="leading-relaxed text-white/80">
                c. Information from Third-Party Sources:We may also obtain information about you from third-party sources, such as social media platforms or other third-party services, when you choose to link or connect your MagicCraft account with those platforms or services. The information we receive from these third-party sources may include your name, username, profile picture, email address, and any other information you have made publicly available or have authorized the third party to share with us. We may combine this information with the personal and non-personal information we collect directly from you to help personalize and improve your experience with our Game and Services.                
                </p>
              </section>

               {/* Section 4 */}
               <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. How We Collect Information</h2>
                <p className="leading-relaxed text-white/80">
                  We collect information about you in various ways when you access or use our Game and Services, including:
                </p>
                <p className="leading-relaxed text-white/80">
                  <strong>a. Information You Provide:</strong> We collect personal information that you voluntarily provide to us when you create an account, participate in promotions or surveys, interact with our customer support, or otherwise communicate with us. This may include information such as your name, email address, username, password, date of birth, and any other information you choose to provide.
                </p>
                <p className="leading-relaxed text-white/80">
                  <strong>b. Information Collected Automatically:</strong>When you access or use our Game and Services, we automatically collect certain non-personal information about your device, usage, and interactions with our Game and Services. This may include device information (such as device type, operating system, and unique device identifiers), usage data (such as game progress, scores, achievements, and user preferences), and information collected through cookies and other tracking technologies (such as IP addresses, browser types, and access times).
                </p>
                <p className="leading-relaxed text-white/80">
                  <strong>c. Cookies and Tracking Technologies:</strong> We use various tracking technologies, such as cookies, web beacons, and similar technologies, to collect information about your use of our Game and Services, to improve the user experience, and to personalize content and advertising. Cookies are small data files stored on your device that help us recognize you and remember your preferences. Web beacons (also known as pixel tags or clear GIFs) are small transparent images embedded in web pages, emails, or other communications that help us track your interactions with our Game and Services. You can control the use of cookies and similar technologies through your browser settings, but please note that some features of our Game and Services may not function properly if you disable cookies.
                </p>
                <p className="leading-relaxed text-white/80">
                We may also work with third-party service providers, such as analytics and advertising partners, who use cookies and other tracking technologies to collect information about your use of our Game and Services and to provide personalized advertising based on your interests. Some of these third-party service providers may participate in industry frameworks, such as the Digital Advertising Alliance (DAA) and the Network Advertising Initiative (NAI), which provide tools for opting out of targeted advertising. To learn more about your options and how to opt-out, visit the DAA's website at www.aboutads.info/choices and the NAI's website atwww.networkadvertising.org/choices.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. How We Use Your Information</h2>
                <p className="leading-relaxed text-white/80">
                We use the information we collect about you for various purposes, including to:                
                </p>
                <p className="leading-relaxed text-white/80">
                a. Provide and maintain our Game and Services, including to create and manage your account, process in-game transactions, and respond to your inquiries and support requests;                </p>
                <p className="leading-relaxed text-white/80">
                b. Improve, personalize, and enhance your experience with our Game and Services by understanding your preferences, customizing content and advertising, and providing you with relevant recommendations and offers;              
                </p>
                <p className="leading-relaxed text-white/80">
                c. Monitor and analyze usage trends and user behavior to improve the performance, functionality, and security of our Game and Services;               
                 </p>
                 <p className="leading-relaxed text-white/80">
                c. Monitor and analyze usage trends and user behavior to improve the performance, functionality, and security of our Game and Services;               
                 </p>
                 <p className="leading-relaxed text-white/80">
                 d. Communicate with you about updates, promotions, surveys, events, and other news related to our Game and Services, as well as those of our affiliates and partners, where you have opted-in to receive such communications;                 
                 </p>
                 <p className="leading-relaxed text-white/80">
                 e. Detect, investigate, and prevent fraudulent or unauthorized activities, violations of our Terms and Conditions, and other potential threats to the security and integrity of our Game and Services;                
              </p>
              <p className="leading-relaxed text-white/80">
              f. Comply with legal obligations, resolve disputes, and enforce our agreements, including our Terms and Conditions and this Privacy Policy;                
               </p>
               <p className="leading-relaxed text-white/80">
               g. Conduct research and analysis to develop new features, products, and services, and to improve our understanding of user preferences and interests;               </p>
               <p className="leading-relaxed text-white/80">
               h. Enable social sharing and interaction features, such as the ability to connect with friends, participate in leaderboards, and share your game progress on social media platforms;               
               </p>
              
               <p className="leading-relaxed text-white/80">
               i. For any other purpose with your consent or as otherwise described when we collect the information.               
               </p>
               <p className="leading-relaxed text-white/80">
               By accessing or using our Game and Services, you consent to the processing of your information for the purposes described in this Privacy Policy. If you do not agree with these purposes, you should not access or use our Game and Services.              
                </p>

              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. Data Retention and Security</h2>
                <p className="leading-relaxed text-white/80">
                a. Data Retention:<br/>We retain your information for as long as necessary to fulfill the purposes for which it was collected, including to provide our Game and Services, comply with legal obligations, resolve disputes, and enforce our agreements. The specific retention period for your information may vary depending on the nature of the information and the purposes for which it was collected. When your information is no longer required for these purposes, we will securely delete or anonymize it in accordance with applicable laws and regulations.               
                 </p>
                 <p className="leading-relaxed text-white/80">
                 b. Security:<br/>We take the security of your information seriously and have implemented appropriate technical and organizational measures to protect it from unauthorized access, disclosure, alteration, or destruction. These measures may include encryption, access controls, and other security technologies. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.                 </p>
                 <p className="leading-relaxed text-white/80">
                 To help maintain the security of your account and personal information, we recommend that you use a strong and unique password, enable any available security features, such as two-factor authentication, and regularly update your account information. You should also be cautious when sharing your personal information with others, and avoid using public or unsecured networks when accessing our Game and Services.                 
                 </p>
                 <p className="leading-relaxed text-white/80">
                 If you believe that your account or personal information has been compromised, please contact us immediately using the contact information provided at the end of this Privacy Policy.                
                  </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. Your Rights and Choices</h2>
                <p className="leading-relaxed text-white/80">
                As a user of our Game and Services, you have certain rights and choices regarding your information and how it is used. These rights and choices may vary depending on your jurisdiction and applicable data protection laws. They may include the following:                </p>
                <p className="leading-relaxed text-white/80">
                a. Access, Update, or Delete Your Information:You have the right to access, update, or request the deletion of your personal information at any time. You can manage and update your account information through the settings in our Game or by contacting our customer support. If you wish to delete your account, please note that some information may be retained for a certain period to comply with legal obligations, resolve disputes, enforce our agreements, or for other legitimate purposes.                
                </p>
                <p className="leading-relaxed text-white/80">
                b. Opt-Out of Targeted Advertising:You may opt-out of targeted advertising by adjusting your device settings, such as turning off ad tracking or resetting your advertising identifier. Additionally, you can opt-out of targeted advertising from certain third-party service providers who participate in industry frameworks, such as the Digital Advertising Alliance (DAA) and the Network Advertising Initiative (NAI), by visiting their respective websites at www.aboutads.info/choices andwww.networkadvertising.org/choices.                </p>
                <p className="leading-relaxed text-white/80">
                c. Do Not Track:Some browsers offer a "Do Not Track" (DNT) feature that allows you to express your preference not to be tracked across websites. Since there is no common understanding of how to interpret DNT signals, we currently do not respond to them. However, you can still exercise control over your information and opt-out of targeted advertising as described above.                </p>

                <p className="leading-relaxed text-white/80">
                If you are located in certain jurisdictions, such as the European Union or California, you may have additional rights under applicable data protection laws, such as the right to data portability, the right to restrict or object to the processing of your personal information, and the right to lodge a complaint with a supervisory authority. To exercise these rights or make a request related to your information, please contact us using the contact information provided at the end of this Privacy Policy.                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. Third-Party Links and Services</h2>
                <p className="leading-relaxed text-white/80">
                Our Game and Services may contain links to, or be accessible from, third-party websites, applications, or online services that are not owned or controlled by MagicCraft. These third-party links and services may include, but are not limited to, social media platforms, advertising networks, and analytics providers. We are not responsible for the privacy practices or the content of these third-party websites, applications, or services, and this Privacy Policy does not apply to your use of them.                </p>
                <p className="leading-relaxed text-white/80">
                When you access or use third-party links and services, you may be subject to the privacy policies and terms of use of those third parties. We encourage you to review the privacy policies and terms of use of any third-party websites, applications, or services you may access or use to understand their data collection and use practices.                </p>
                <p className="leading-relaxed text-white/80">
                Please note that your interactions with third-party services, such as social media platforms or payment processors, may be subject to the privacy policies and terms of use of those third parties. We are not responsible for the privacy practices or the content of these third-party services, and this Privacy Policy does not apply to your use of them. We encourage you to review the privacy policies and terms of use of any third-party services you may access or use to understand their data collection and use practices.                </p>
                
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">9. International Data Transfers and Processing</h2>
                <p className="leading-relaxed text-white/80">
                MagicCraft operates globally, and your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country, and in some cases, may not be as protective.                </p>
                <p className="leading-relaxed text-white/80">
                We take appropriate measures to ensure that your information is treated securely and in accordance with this Privacy Policy, regardless of where it is processed. These measures may include the use of contractual clauses, such as the Standard Contractual Clauses approved by the European Commission, to protect the transfer of your information to countries outside the European Economic Area.                </p>
                <p className="leading-relaxed text-white/80">
                By accessing or using our Game and Services, you consent to the transfer, storage, and processing of your information in countries outside your country of residence, as described in this Privacy Policy. If you do not agree with these international data transfers and processing, you should not access or use our Game and Services.                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">10. Children's Privacy</h2>
                <p className="leading-relaxed text-white/80">
                MagicCraft is committed to protecting the privacy of children. Our Game and Services are not directed at or intended for use by children under the age of 13 (or the age of consent in their respective jurisdiction, if higher), and we do not knowingly collect personal information from children under this age.                </p>
                <p className="leading-relaxed text-white/80">
                If we become aware that we have inadvertently collected personal information from a child under the age of 13 (or the age of consent in their respective jurisdiction, if higher), we will take appropriate steps to delete such information from our records as soon as possible. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us using the contact information provided at the end of this Privacy Policy, and we will work to delete the information and terminate the child's account, as applicable.                </p>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">11. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed text-white/80">
                We may update this Privacy Policy from time to time to reflect changes in our practices, the Game and Services, or applicable laws and regulations. When we make changes to this Privacy Policy, we will revise the "Last Updated" date at the top of this policy and post the updated version on our website and within our Game, as applicable. We may also notify you of significant changes through other means, such as by sending an email or displaying a notice within our Game and Services.                </p>
                <p className="leading-relaxed text-white/80">
                Your continued access or use of our Game and Services after any changes to this Privacy Policy have been posted constitutes your acceptance of those changes. If you do not agree with any changes to this Privacy Policy, you should discontinue your access or use of our Game and Services.                </p>
                <p className="leading-relaxed text-white/80">
                We encourage you to review this Privacy Policy periodically to stay informed about our privacy practices and how we protect your information. If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us using the contact information provided at the end of this Privacy Policy.                </p>
              </section>

              {/* Section 12 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">12. Contact Us</h2>
                <p className="leading-relaxed text-white/80">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please feel free to contact us Email:{' '}
                  <a href="mailto:legal@magiccraft.io" className="text-[#98FFF9] underline">
                    legal@magiccraft.io
                  </a>
                  .
                </p>
                <p className="leading-relaxed text-white/80">We are committed to addressing any inquiries, concerns, or requests you may have in a timely and efficient manner. Your privacy is important to us, and we will make every effort to resolve any issues or provide the necessary information to you.</p>
              </section>
               
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default PrivacyPolicy
