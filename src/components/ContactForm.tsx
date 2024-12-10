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
        <section className="mx-auto w-full max-w-6xl px-4 py-12" id="contact-us">
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
        <div className="rounded-3xl bg-[#11113A] p-8 lg:-ml-20">
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-white">Your email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter here your email"
                        required
                        className="rounded-md border border-[#202660] bg-[rgba(68,87,184,0.10)] px-4 py-2 text-[#98FFF9] backdrop-blur-sm"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-white">Your Name</label>
                    <input
                        id="name"
                        placeholder="Enter here your Name"
                        required
                        className="rounded-md border border-[#202660] bg-[rgba(68,87,184,0.10)] px-4 py-2 text-[#98FFF9] backdrop-blur-sm"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="question" className="text-white">Your Question</label>
                    <textarea
                        id="question"
                        placeholder="Enter here your questions or suggestions"
                        required
                        className="rounded-md border border-[#202660] bg-[rgba(68,87,184,0.10)] px-4 py-2 text-[#98FFF9] backdrop-blur-sm"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input id="privacy" type="checkbox" required />
                    <label htmlFor="privacy" className="text-sm text-gray-400">
                        I agree with Privacy Policy
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-[19px] w-full rounded-md bg-[#98FFF9] py-4 font-bold text-[#11113A] flex flex-row items-center justify-center"
                >
                                  <ArrowUpRight />
                                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
         </div>
         </section>
    );
};

export default ContactForm;
