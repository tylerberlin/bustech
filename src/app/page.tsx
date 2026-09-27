import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/LogoMark";
import { ArrowIcon, DiscordIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { EventList } from "@/components/EventList";
import { about, basePath, club, links, officers } from "@/data/site";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-red">
      <span className="h-px w-8 bg-red" />
      {index} / {children}
    </p>
  );
}

export default function Home() {
  const socials = [
    { label: "Instagram", href: links.instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
    { label: "Discord", href: links.discord, Icon: DiscordIcon },
    { label: "Email", href: `mailto:${club.email}`, Icon: MailIcon },
  ].filter((s) => s.href);

  return (
    <>
      <Nav />

      <main id="top">
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-red/25 blur-[140px]" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20">
            <p className="rise mb-8 font-mono text-xs uppercase tracking-[0.25em] text-paper/60">
              {club.school} <span className="text-red">·</span> Est. Spartans
              <span className="cursor-blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-red" />
            </p>

            <h1 className="font-display font-black uppercase leading-[0.86] tracking-tight">
              <span className="rise block text-[clamp(2.4rem,12.5vw,10.5rem)]" style={{ animationDelay: "80ms" }}>
                Business &amp;
              </span>
              <span
                className="rise block text-[clamp(2.4rem,12.5vw,10.5rem)] text-red"
                style={{ animationDelay: "180ms" }}
              >
                Technology
              </span>
              <span
                className="rise flex items-center gap-4 text-[clamp(2rem,6vw,5rem)] sm:gap-6"
                style={{ animationDelay: "280ms" }}
              >
                <span className="h-1 w-12 bg-red sm:w-24" />
                Club
                <span className="h-1 flex-1 bg-red" />
              </span>
            </h1>

            <div
              className="rise mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
              style={{ animationDelay: "420ms" }}
            >
              <p className="max-w-md text-lg leading-relaxed text-paper/75">{club.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={links.involve}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-red px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide transition-colors hover:bg-red-bright"
                >
                  Become a Member
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center border border-paper/30 px-6 py-4 font-display text-base font-extrabold uppercase tracking-wide transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  See Events
                </a>
              </div>
            </div>
          </div>

          <Ticker />
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <SectionLabel index="01">About</SectionLabel>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
                Not a business club. <span className="text-red">Not a tech club.</span> Both.
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-paper/85">{about.lede}</p>
              {about.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-paper/65">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={150} className="lg:col-span-5 lg:pt-16">
              <div className="border border-line bg-ink-2 p-6 font-mono text-sm">
                <div className="mb-5 flex items-center justify-between border-b border-line pb-3 text-xs uppercase tracking-widest text-paper/50">
                  <span>club.status</span>
                  <span className="flex items-center gap-2 text-emerald-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> live
                  </span>
                </div>
                <dl className="space-y-3">
                  {[
                    ["meets", club.meeting],
                    ["open_to", "All majors · All years"],
                    ["dues", "Free to join"],
                    ["signup", "Involve"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[6rem_1fr] gap-3">
                      <dt className="text-red">{k}</dt>
                      <dd className="text-paper/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px bg-line sm:grid-cols-3">
            {about.pillars.map((p, i) => (
              <Reveal key={p.code} delay={i * 120} className="h-full">
                <div className="group relative h-full bg-ink p-8 transition-colors hover:bg-ink-2">
                  <span className="absolute left-0 top-0 h-1 w-0 bg-red transition-all duration-500 group-hover:w-full" />
                  <p className="font-mono text-xs tracking-widest text-red">[{p.code}]</p>
                  <h3 className="mt-6 font-display text-3xl font-black uppercase">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── EVENTS ─── */}
        <section id="events" className="border-y border-line bg-ink-2">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel index="02">Upcoming Events</SectionLabel>
                <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
                  On the <span className="text-red">calendar</span>
                </h2>
              </div>
              <a
                href={links.involve}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/70 underline-offset-4 hover:text-paper hover:underline"
              >
                Full calendar on Involve <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </Reveal>

            <EventList buildDate={new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" })} />
          </div>
        </section>

        {/* ─── OFFICERS ─── */}
        <section id="officers" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionLabel index="03">Leadership</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
              Meet the <span className="text-red">board</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {officers.map((o, i) => (
              <Reveal key={`${o.role}-${i}`} delay={(i % 3) * 100} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-ink-2 transition-colors hover:border-red/70">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    {o.photo ? (
                      <Image
                        src={`${basePath}${o.photo}`}
                        alt={`${o.name}, ${o.role}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="grid-bg absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-7xl font-black text-paper/10 transition-colors group-hover:text-red/40">
                          {initials(o.name)}
                        </span>
                      </div>
                    )}
                    <span className="absolute left-0 top-4 bg-red px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider">
                      {o.role}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-black uppercase">{o.name}</h3>
                    <p className="mt-1 font-mono text-xs text-paper/50">
                      {o.major} <span className="text-red">·</span> {o.year}
                    </p>
                    <p className="mt-4 flex-1 leading-relaxed text-paper/70">{o.bio}</p>
                    {o.linkedin && (
                      <a
                        href={o.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${o.name} on LinkedIn`}
                        className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/60 hover:text-red"
                      >
                        <LinkedInIcon className="h-4 w-4" /> LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CONNECT ─── */}
        <section id="connect" className="relative overflow-hidden bg-red">
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(-45deg,transparent_0_18px,rgb(0_0_0/0.5)_18px_20px)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink">04 / Connect</p>
              <h2 className="font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
                Your seat is <span className="text-ink">open.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-paper/90">
                Register on Involve to get meeting reminders, event invites, and first dibs on company visits.
              </p>
              <a
                href={links.involve}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 bg-ink px-8 py-5 font-display text-lg font-extrabold uppercase tracking-wide transition-transform hover:-translate-y-0.5"
              >
                Join us on Involve
                <ArrowIcon className="h-5 w-5 text-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>

            <Reveal delay={150}>
              <ul className="grid grid-cols-2 gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col justify-between gap-8 border-2 border-ink bg-ink/10 p-5 transition-colors hover:bg-ink"
                    >
                      <Icon className="h-7 w-7" />
                      <span className="flex items-center justify-between font-display text-lg font-extrabold uppercase">
                        {label}
                        <ArrowIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-auto" />
            <div>
              <p className="font-display text-sm font-black uppercase">{club.name}</p>
              <p className="font-mono text-xs text-paper/50">{club.school}</p>
            </div>
          </div>
          <p className="font-mono text-xs text-paper/40">
            © {new Date().getFullYear()} {club.shortName}. A registered student organization.
          </p>
        </div>
      </footer>
    </>
  );
}
