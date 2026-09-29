import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl px-8 py-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">06 · CONTACT</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Let's build something <span className="text-gradient">reliable</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          I'm currently open to new data engineering roles and freelance pipeline work.
          Reach out and let's talk data.
        </p>

        <a
          href={profile.socials.email}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
        >
          <FiSend size={16} /> Say hello
        </a>

        <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-cyan-300">
            <FiGithub size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-cyan-300">
            <FiLinkedin size={20} />
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-colors hover:text-cyan-300">
            <FiTwitter size={20} />
          </a>
          <a href={profile.socials.email} aria-label="Email" className="transition-colors hover:text-cyan-300">
            <FiMail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
