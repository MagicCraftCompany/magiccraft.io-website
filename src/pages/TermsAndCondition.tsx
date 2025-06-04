import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: initial;
  max-width: 70rem;
  gap: 1rem;
  padding-inline: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-block: 2rem;
`;

export default function TermsAndConditions() {
  return (
    <Wrapper className="text-slate-100">
      <InnerWrapper>
        <h1>MAGICCRAFT LOBBY SYSTEM TERMS AND CONDITIONS</h1>
        <h2>1. Overview</h2>
        <p>
          Welcome to MagicCraft's lobbies! We are excited to offer you the opportunity to participate in the creation and entry of lobbies,
          creating teams with other players, and earning winnings paid in MCRT tokens ("MCRT"). We are also thrilled to offer you the opportunity to
          compete in various matches hosted on our lobby system, through which you can showcase your skills and earn winnings paid in MCRT, BTC, SOL
          and other cryptocurrencies that may be introduced by MagicCraft in the future ("Lobby System", "Lobbies", or "Lobby").
        </p>
        <p>
          MagicCraft may also host tournaments, organized manually or through automated means, for its community members and the public at large ("Tournament").
        </p>
        <p>
          However, before you start, it is important that you carefully read and
          understand the following Terms ("Terms"). These Terms set forth the
          rules and guidelines that govern your use of the Lobby System hosted by MagicCraft. By using the Lobby System,
          you agree to be bound by these Terms,
          which constitute a legally binding agreement between you and
          MagicCraft.
        </p>
        <p>
          If you do not agree to these Terms, you may not use the Lobby System. Please take a moment to read
          these Terms carefully to ensure that you understand your rights and
          obligations.
        </p>
        <h2>2. LOBBY SYSTEM.</h2>
        <h3>2.1. Waiver of Liability.</h3>
        <p>
          PLEASE NOTE THAT THE LOBBY SYSTEM IS CURRENTLY IN THE BETA TESTING
          STAGE. THERE MAY BE BUGS, CYBERSECURITY RISKS, AND OTHER ISSUES THAT
          HAVE NOT BEEN DISCOVERED. YOU ACKNOWLEDGE AND AGREE THAT IF YOU INCUR
          ANY LOSS AS A RESULT OF YOUR USE OF THE LOBBY SYSTEM, WHETHER CAUSED
          BY BUGS, SECURITY BREACHES, OR OTHER ISSUES, MAGICCRAFT WILL NOT BE
          LIABLE FOR ANY CLAIMS, DAMAGES, OR LOSSES ARISING FROM SUCH LOSS.
        </p>
        <p>
          YOU ACKNOWLEDGE AND AGREE THAT YOU ARE USING THE LOBBY SYSTEM AT YOUR
          OWN RISK AND THAT MAGICCRAFT WILL NOT BE RESPONSIBLE FOR ANY DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES
          ARISING FROM YOUR USE OF THE LOBBY SYSTEM.
        </p>
        <p>
          BY USING THE LOBBY SYSTEM, YOU AGREE TO WAIVE ANY AND ALL CLAIMS
          AGAINST MAGICCRAFT, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES,
          AGENTS, AND LICENSORS ARISING FROM YOUR USE OF THE LOBBY SYSTEM. YOU
          AGREE TO BEAR ALL RISKS ASSOCIATED WITH THE USE OF THE LOBBY SYSTEM
          AND TO HOLD MAGICCRAFT HARMLESS FROM ANY CLAIMS, DAMAGES, OR LOSSES
          ARISING FROM YOUR USE OF THE LOBBY SYSTEM.
        </p>
        <h3>2.2. Registration and Wallet Connection.</h3>
        <p>
          To use the Lobby System, you must connect a digital wallet that
          supports MCRT. You acknowledge that you are solely responsible for the
          security of your digital wallet and any transactions made through it.
          MagicCraft is not responsible for any loss or damage caused by your
          use of a digital wallet.
        </p>
        <p>
          To connect your digital wallet to the Lobby System, you may be
          required to sign transactions using your digital wallet to confirm your
          identity and authorise transactions within the Lobby System.
        </p>
        <h3>2.3. Funding your Wallet with MCRT.</h3>
        <p>
          Lobbies may be configured to require an entry fee to be paid in MCRT.
          You agree to pay all fees and bear all risks associated with the use of MCRT within the
          Lobby System. You must ensure that you have sufficient MCRT in your
          digital wallet to pay any entry fee for a Lobby.
        </p>
        <p>
          You acknowledge that you are solely responsible for any fees or
          charges associated with transferring MCRT to your digital wallet.
          MagicCraft is not responsible for any loss or damage caused by your
          use of a digital wallet or any fees or charges associated with
          transferring MCRT to your digital wallet.
        </p>
        <h3>2.4. Distribution of Entry Fee.</h3>
        <p>
          When a team wins a game in a lobby, the
          entry fee collected (if applicable) from each player will be distributed to the players
          in the winning team, subject to a percentage fee charged by MagicCraft. The distribution of the entry fee will be automatic
          and based on the outcome of the game. MagicCraft is not responsible
          for any errors or inaccuracies in the distribution of the entry fee.
        </p>
        <p>
          Please be advised that any errors or inaccuracies in the distribution
          of entry fees resulting in loss shall not render MagicCraft liable for
          any damages, losses, or expenses incurred by the players. MagicCraft
          endeavors to ensure that the distribution of entry fees is accurate
          and efficient; however, unforeseen technical issues may cause
          discrepancies in the distribution of funds. It is hereby acknowledged
          by the players that MagicCraft shall not be held liable for any
          errors, bugs, or inaccuracies in the automatic distribution of entry
          fees. By participating in the game, players agree to be bound by these
          Terms, including the automatic distribution of entry fees.
        </p>
        <h3>2.5. Termination of Access, Disqualification, and Forfeiture of Rewards.</h3>
        <p>
          MagicCraft reserves the right to terminate or suspend access to the
          Lobby System, in whole or in part, at any time and for any reason
          without notice. In particular, MagicCraft may terminate or suspend an
          account if it determines, in its sole discretion, you are exploiting
          or attempting to exploit any bugs, errors or vulnerabilities in the
          Lobby System or are engaging in any illegal or fraudulent activity
          related to the use of the system. Such termination or suspension may be immediate,
          without notice to you, and may result in the forfeiture of rewards or other funds
          that you have earned through your participation in the Lobby System or Tournament. In the event of any
          termination or suspension, MagicCraft shall not be liable for any
          damages, losses, or expenses incurred by you.
        </p>
        <p>
          Specific circumstances in which MagicCraft may terminate, suspend, or disqualify you from participation
          in the Lobby System resulting in the forfeiture of your rewards include, but are not limited to, the following:
        </p>
        <ul>
          <li>Changing your connected wallet address during the withdrawal process.</li>
          <li>Playing more than twelve (12) Lobbies per day using multiple accounts linked to the same IP address.</li>
          <li>Swapping NFTs between accounts to access the Lobbies from a different wallet.</li>
          <li>Repeated AFK (Away From Keyboard) behavior from one account while another account in the same Lobby continues to actively participate.</li>
        </ul>
        <h2>3. TOURNAMENTS.</h2>
        <h3>3.1. Eligibility.</h3>
        <p>
          To be eligible to participate in the Tournament, participants must
          possess a valid Binance Smart Chain ("BSC") address that has been
          approved by MagicCraft. During registration, it is the responsibility
          of the participants to ensure that their BSC address has been
          accurately submitted for approval to MagicCraft.
        </p>
        <h3>3.2. Tournament Format.</h3>
        <p>
          The Tournament format may vary depending on the event, and MagicCraft
          reserves the right to modify the format at any time without prior
          notice. Participants will be notified of any changes to the Tournament
          format through MagicCraft's social media channels or other forms of
          communication. By participating in the Tournament, participants
          acknowledge and accept that the Tournament format may be subject to
          change and that MagicCraft shall not be held liable for any such
          changes.
        </p>
        <h3>3.3. Rewards.</h3>
        <p>
          The rewards for participating in the Tournament shall be as announced
          by MagicCraft through its social media channels or other forms of
          communication prior to the start of the Tournament. While MagicCraft
          endeavours to provide the announced rewards to participants who have
          met the stated criteria, MagicCraft reserves the right to modify the
          rewards or the reward structure at any time without prior notice.
          Participants acknowledge and agree that the rewards for participating
          in the Tournament may be subject to change and that MagicCraft shall
          not be held liable for any such changes. Upon conclusion of the
          Tournament, the rewards for the winners will be distributed by
          MagicCraft within reasonable time. The rewards may be in MCRT tokens
          or any other currency as determined by MagicCraft in its sole
          discretion. MagicCraft shall not be held liable for any errors or
          delays in the distribution of rewards.
        </p>
        <h3>3.4. Disqualification.</h3>
        <p>
          Participants may be disqualified from the Tournament at any time,
          without prior notice, for violating these Terms or engaging in any
          behaviour that MagicCraft deems to be inappropriate, including but not
          limited to insulting or abusive language, racism, cheating, taunting,
          mocking, exploiting bugs, crashing the system, or any other conduct
          that MagicCraft considers to be detrimental to the Tournament or its
          participants. Additionally, participants who are more than five (5)
          minutes late for a scheduled match may be disqualified. MagicCraft
          reserves the right to investigate any suspected violations of these
          Terms and to take appropriate action, including disqualifying
          participants and withholding rewards, in its sole discretion.
        </p>
        <h3>3.5. Technical Issues.</h3>
        <p>
          MagicCraft shall not be held liable for any technical issues or
          problems that prevent participants from accessing or participating in
          the Tournament, including but not limited to internet connectivity
          issues, hardware or software malfunctions, or other technical
          problems. Participants acknowledge and agree that the Tournament may
          be subject to occasional interruptions or disruptions, and that
          MagicCraft shall not be held liable for any losses or damages arising
          from such interruptions or disruptions.
        </p>
        <p>
          Participants are solely responsible for ensuring that they have access
          to the necessary technology and equipment to participate in the
          Tournament, including but not limited to a stable internet connection,
          a compatible device, and any required software or applications.
          MagicCraft shall not be held liable for any issues arising from
          participants' failure to comply with the technical requirements of the
          Tournament.
        </p>
        <p>
          Participants acknowledge and agree that MagicCraft shall not be held
          liable for any errors or inaccuracies in the Tournament results or any
          delay in the distribution of rewards due to technical issues or other
          problems. Participants further acknowledge and agree that MagicCraft
          reserves the right to cancel, modify, or suspend the Tournament in the
          event of any technical issues or other unforeseeable circumstances
          beyond MagicCraft's control.
        </p>
        <h2>4. GENERAL.</h2>
        <h3>4.1. Dispute Resolution.</h3>
        <p>
          Any dispute arising out of or in connection with these Terms or
          participation in the Tournament shall be resolved exclusively through
          good faith negotiation between you and MagicCraft. You waive any right
          to bring any dispute on a class action basis or in a purported
          representative capacity. You agree that this dispute resolution clause
          constitutes a complete waiver of any rights the user may have to
          resolve disputes through any other means, including but not limited to
          mediation, arbitration, private dispute resolution services or trial.
          The decision of the negotiation process shall be final and binding on
          the user and MagicCraft.
        </p>

        <h3>4.2. Indemnification.</h3>
        <p>
          You agree to indemnify, defend and hold harmless MagicCraft, its
          affiliates, and their respective officers, directors, employees,
          contractors, and agents from and against any and all claims, damages,
          obligations, losses, liabilities, costs, debts, or expenses (including
          but not limited to attorneys' fees) arising out of or related to your
          use of the Lobby System, violation of these Terms, or any other act or
          omission by you that results in a loss or damage to MagicCraft, its
          affiliates, or any third party. You shall cooperate with MagicCraft in
          the defence of any such claim. MagicCraft reserves the right to assume
          the exclusive defense and control of any matter subject to
          indemnification by you, in which event you shall have no further
          obligation to indemnify MagicCraft.
        </p>
        <h3>4.3. Miscellaneous.</h3>
        <p>
          These Terms, together with any additional terms or policies referenced
          herein, constitute the entire agreement between the user and
          MagicCraft with respect to the use of the Lobby System and
          participation in a Tournament and supersede all prior or
          contemporaneous communications and proposals, whether oral or written,
          between the user and MagicCraft. If any provision of these Terms is
          found to be invalid or unenforceable, the remaining provisions shall
          remain in full force and effect. The failure of MagicCraft to enforce
          any right or provision of these Terms shall not be deemed a waiver of
          such right or provision. The user may not assign or transfer these
          Terms, or any rights or obligations hereunder, without the prior
          written consent of MagicCraft. Any notices or other communications
          required or permitted hereunder shall be in writing and shall be
          deemed given upon receipt when delivered personally or by courier, or
          upon receipt of an email transmission or facsimile transmission. The
          section headings in these Terms are for convenience only and shall not
          affect the interpretation of these Terms. Any provisions of these
          Terms that by their nature should survive termination or expiration
          shall survive any termination or expiration of these Terms. MagicCraft
          reserves the right to modify these Terms at any time without notice.
          The user's continued use of the Lobby System after any such
          modifications shall constitute acceptance of the modified Terms.
          Finally, MagicCraft shall not be liable for any delay or failure to
          perform its obligations under these Terms if such delay or failure
          arises from any cause beyond its reasonable control, including but not
          limited to acts of God, war, terrorism, natural disasters, or
          technical difficulties.
        </p>
      </InnerWrapper>
    </Wrapper>
  );
}
