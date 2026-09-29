import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">03 · EXPERIENCE</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Where I've <span className="text-gradient">shipped data</span>
        </h2>
      </motion.div>

      <div className="relative border-l border-slate-700/60 pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[35px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-950" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  {exp.role} · <span className="text-cyan-300">{exp.company}</span>
                </h3>
                <span className="font-mono-custom text-xs text-slate-400">{exp.period}</span>
              </div>
              <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                <FiMapPin size={12} /> {exp.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-400">
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-slate-800/60 px-2.5 py-1 text-xs text-emerald-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
