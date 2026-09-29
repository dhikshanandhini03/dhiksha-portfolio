import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">04 · PROJECTS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Things I've <span className="text-gradient">built</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40 ${
              proj.featured ? "md:col-span-2" : ""
            }`}
          >
            {proj.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-cyan-400/10 px-3 py-1 font-mono-custom text-[10px] tracking-widest text-cyan-300">
                FEATURED
              </span>
            )}
            <h3 className="pr-20 text-lg font-semibold text-slate-100">{proj.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{proj.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              {proj.metrics.map((m) => (
                <span key={m} className="font-mono-custom text-xs text-emerald-400">
                  ▲ {m}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-slate-700/50 pt-4">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-cyan-300"
              >
                <FiGithub size={16} /> Code
              </a>
              {proj.demoUrl && (
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-cyan-300"
                >
                  <FiExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
