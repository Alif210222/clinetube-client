import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 py-20 relative z-10">

        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              CineVerse
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Discover trending movies, trusted ratings,
              premium streaming and endless entertainment.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="/movies">Movies</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>

            <ul className="space-y-3 text-slate-400">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

            <div className="flex gap-3">

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition">
                <FaFacebookF className="w-5 h-5" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 transition">
                <FaInstagram className="w-5 h-5" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition">
                <FaTwitter className="w-5 h-5" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition">
                <FaYoutube className="w-5 h-5" />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between">

          <p className="text-slate-500 text-sm">
            © 2026 CineVerse. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Crafted for movie lovers worldwide 🎬
          </p>

        </div>
      </div>
    </footer>
  );
}