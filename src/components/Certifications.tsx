import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certifications, education } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">05 · CREDENTIALS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Certifications & <span className="text-gradient">education</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="glass flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-300">
              <FiAward size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">{cert.name}</h3>
              <p className="mt-1 text-xs text-slate-400">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass mt-6 rounded-2xl p-6 text-center"
      >
        <h3 className="text-sm font-semibold text-slate-100">{education.degree}</h3>
        <p className="mt-1 text-xs text-slate-400">
          {education.school} · {education.period}
        </p>
      </motion.div>
    </section>
  );
}
