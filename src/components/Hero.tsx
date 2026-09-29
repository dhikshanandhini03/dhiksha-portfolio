import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from "react-icons/fi";
import { profile } from "../data/portfolioData";

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.rotatingRoles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1 font-mono-custom text-xs tracking-widest text-cyan-300">
            OPEN TO NEW OPPORTUNITIES
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <div className="mt-3 h-10 font-mono-custom text-xl font-semibold text-slate-300 sm:text-2xl">
            I build{" "}
            <span className="text-emerald-400">
              {typed}
              <span className="animate-blink">|</span>
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              View Projects
            </Link>
            <a
              href={profile.resumeUrl}
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              Download Résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-slate-400">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="animate-float"
        >
          <div className="glass mx-auto w-full max-w-md rounded-2xl p-1 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono-custom text-xs text-slate-400">pipeline.py</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono-custom text-xs leading-relaxed text-slate-300 sm:text-sm">
<code>{`from airflow.decorators import dag, task

@dag(schedule="@hourly", catchup=False)
def clickstream_pipeline():

    @task
    def extract():
        return kafka.consume("events")

    @task
    def transform(events):
        return spark.sessionize(events)

    @task
    def load(sessions):
        snowflake.write("fact_sessions", sessions)

    load(transform(extract()))

clickstream_pipeline()`}</code>
            </pre>
          </div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-80}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-slate-500 transition-colors hover:text-cyan-300"
        aria-label="Scroll to About section"
      >
        <FiArrowDown className="animate-bounce" size={22} />
      </Link>
    </section>
  );
}
