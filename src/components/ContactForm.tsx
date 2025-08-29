import emailjs from 'emailjs-com';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = {
            email: form.email.value,
            name: form.name.value,
            question: form.question.value,
        };

        try {
            await emailjs.send(
                'your_service_id',
                'your_template_id',
                formData,
                'your_user_id'
            );
            alert('Email sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
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
                href="mailto:contact@magicraft.io"
                className="flex items-center text-white transition-colors "
              >
                <span className="mr-2">✉</span>
                contact@magicraft.io
              </a>
              <a
                href="mailto:marketing@magicraft.io"
                className="flex items-center text-white transition-colors "
              >
                <span className="mr-2">✉</span>
                marketing@magicraft.io
              </a>
            </div>
          </div>
        <div className="card-glass card-padding lg:-ml-20">
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex flex-col gap-element">
                    <label htmlFor="email" className="text-white font-medium">Your email</label>
                    <input
                        id="email"
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
                        placeholder="Enter here your Name"
                        required
                        className="rounded-lg border border-[#98FFF9]/30 bg-[rgba(152,255,249,0.05)] px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 focus:border-[#98FFF9] focus:outline-none focus:ring-2 focus:ring-[#98FFF9]/20"
                    />
                </div>
                <div className="flex flex-col gap-element">
                    <label htmlFor="question" className="text-white font-medium">Your Question</label>
                    <textarea
                        id="question"
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
            </form>
        </div>
         </div>
         </section>
    );
};

export default ContactForm;
