import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-8 text-center">
      <p className="font-mono-custom text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
