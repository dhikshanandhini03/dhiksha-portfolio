import { motion } from "framer-motion";
import { about, stats } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono-custom text-sm tracking-widest text-cyan-400">01 · ABOUT ME</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Turning raw data into <span className="text-gradient">reliable systems</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 lg:col-span-3"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-slate-400">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {about.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 lg:col-span-2"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
            >
              <p className="text-2xl font-extrabold text-gradient sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-xs leading-snug text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
