import { useState } from "react";
import { Download, ExternalLink, Mail, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/** Edit these to match your real links / files */
const CONTACT = {
  email: "machadodion0@gmail.com",
  github: "https://github.com/SOmerandomdev-ui",
  linkedin: "https://www.linkedin.com/in/dion-machado",
  resume: "/resume.pdf",
};

const links = [
  {
    id: "github",
    label: "GitHub",
    hint: "Code & repos",
    href: CONTACT.github,
    external: true,
    Icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    hint: "Connect with me",
    href: CONTACT.linkedin,
    external: true,
    Icon: FaLinkedin,
  },
  {
    id: "resume",
    label: "Resume",
    hint: "PDF download",
    href: CONTACT.resume,
    download: true,
    Icon: Download,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative mr-30 z-20 flex min-h-screen items-center justify-end px-12"
    >
      {/* Glass background — same as Home, pinned right */}
      <div className="absolute right-0 z-[-1] h-[500px] w-[700px] rounded-2xl bg-black/20 backdrop-blur-md animate-fadein" />

      <div className="relative max-w-2xl text-left text-white animate-fadein">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s talk
        </h1>

        <p className="mt-5 text-base leading-relaxed text-gray-300">
          Reach out by email, or find me on GitHub and LinkedIn. Resume is a
          one-click download.
        </p>

        {/* Email */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Gmail
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex min-h-11 max-w-full cursor-pointer items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <Mail size={18} className="shrink-0" aria-hidden />
              <span className="truncate font-medium">{CONTACT.email}</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              {copied ? (
                <>
                  <Check size={16} aria-hidden />
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-col gap-3">
          {links.map(({ id, label, hint, href, external, download, Icon }) => (
            <a
              key={id}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(download ? { download: true } : {})}
              aria-label={download ? `Download ${label}` : `Open ${label}`}
              className="group flex min-h-14 cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:border-cyan-400/35 hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300">
                <Icon size={18} aria-hidden />
              </span>

              <div className="min-w-0 flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    {label}
                  </span>
                  {external && (
                    <ExternalLink
                      size={13}
                      className="text-cyan-300/50 transition group-hover:text-cyan-300"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="text-xs text-gray-400">{hint}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
