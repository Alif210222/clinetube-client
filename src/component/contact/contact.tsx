"use client";

import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { use, useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);


  const form = useRef<HTMLFormElement>(null);



  // email sending 
     // FIX 2
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_qxa9d96",
        "template_y7oiagp",
        form.current,
        {
          publicKey:
            "FC-gvKBOwB1xuZSyl",
        }
      );

      toast.success(
        "Email sent successfully!"
      );

      form.current.reset();
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to send email"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Contact & Support
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have questions or need help? We're here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT - Contact Info */}
          <div className="space-y-6">

            <div className="p-6 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <Mail className="text-pink-500" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    alifsarkerrony@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-500" />
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    +8801994677977
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-500" />
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Extra Info */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-white/10">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                Support Hours
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Saturday - Thursday: 9:00 AM - 10:00 PM <br />
                Friday: Closed
              </p>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="p-8 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/10">

            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Send us a message
            </h3>




            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent outline-none"
              />

              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}