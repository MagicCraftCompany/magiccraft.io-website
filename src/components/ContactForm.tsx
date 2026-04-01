import { ArrowUpRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { buildContactMailto, CONTACT_EMAIL } from '@/lib/contactEmail';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = String(formData.get('email') || '').trim();
        const name = String(formData.get('name') || '').trim();
        const question = String(formData.get('question') || '').trim();

        try {
            window.location.href = buildContactMailto({
                email,
                name,
                message: question,
                subject: 'MagicCraft website inquiry',
            });
            setStatusMessage(`Your email app should open with a draft to ${CONTACT_EMAIL}.`);
            form.reset();
        } catch {
            setStatusMessage(`We couldn't open your email app. Please email ${CONTACT_EMAIL} directly.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-12" >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="-mt-[5em]  h-[280px] rounded-3xl border-2 border-[#98FFF9] bg-gradient-to-r from-[#173B52]  to-[#557e91] to-80% px-8 py-10">
            <h2 className="mb-8 text-3xl font-bold text-white">
              QUESTIONS &<br />
              SUGGESTIONS
            </h2>
            <div className="space-y-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center text-white transition-colors "
              >
                <span className="mr-2">✉</span>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        <div className="card-glass card-padding lg:-ml-20">
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex flex-col gap-element">
                    <label htmlFor="email" className="text-white font-medium">Your email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter here your email"
                        required
                        className="rounded-lg border border-[#98FFF9]/30 bg-[rgba(152,255,249,0.05)] px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                    />
                </div>
                <div className="flex flex-col gap-element">
                    <label htmlFor="name" className="text-white font-medium">Your Name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Enter here your Name"
                        required
                        className="rounded-lg border border-[#98FFF9]/30 bg-[rgba(152,255,249,0.05)] px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                    />
                </div>
                <div className="flex flex-col gap-element">
                    <label htmlFor="question" className="text-white font-medium">Your Question</label>
                    <textarea
                        id="question"
                        name="question"
                        placeholder="Enter here your questions or suggestions"
                        required
                        rows={4}
                        className="rounded-lg border border-[#98FFF9]/30 bg-[rgba(152,255,249,0.05)] px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20 resize-vertical"
                    />
                </div>
                <div className="flex items-center gap-element">
                    <input 
                        id="privacy" 
                        type="checkbox" 
                        required 
                        className="w-4 h-4 text-[#98FFF9] bg-transparent border-2 border-[#98FFF9]/30 rounded focus:ring-[#98FFF9] focus:ring-2"
                    />
                    <label htmlFor="privacy" className="text-small text-white/80">
                        I agree with Privacy Policy
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowUpRight className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {statusMessage && (
                    <p className="text-sm text-white/80">{statusMessage}</p>
                )}
            </form>
        </div>
         </div>
         </section>
    );
};

export default ContactForm;
