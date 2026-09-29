import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCode,
  FiActivity,
  FiGitBranch,
  FiCloud,
  FiDatabase,
  FiHardDrive,
  FiTerminal,
  FiBarChart2,
} from "react-icons/fi";
import { skillCategories } from "../data/portfolioData";

const ICONS: Record<string, IconType> = {
  code: FiCode,
  stream: FiActivity,
  workflow: FiGitBranch,
  cloud: FiCloud,
  warehouse: FiDatabase,
  database: FiHardDrive,
  devops: FiTerminal,
  chart: FiBarChart2,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">02 · SKILLS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          My <span className="text-gradient">tech stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => {
          const Icon = ICONS[cat.icon] ?? FiCode;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-300 transition-colors group-hover:text-emerald-300">
                <Icon size={20} />
              </div>
              <h3 className="mb-3 font-semibold text-slate-100">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
