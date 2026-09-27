"use client";

import { useSyncExternalStore } from "react";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./Icons";
import { events, links, type ClubEvent } from "@/data/site";

// The site is a static export, so "today" must be checked in the visitor's
// browser — otherwise past events would stay up until the next deploy.
function todayInTampa() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}

const noopSubscribe = () => () => {};

function upcomingAsOf(today: string): ClubEvent[] {
  return events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleString("en-US", { day: "2-digit" }),
    weekday: d.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
  };
}

export function EventList({ buildDate }: { buildDate: string }) {
  // Server render (and hydration) use the build date; the browser then
  // switches to the visitor's actual date.
  const today = useSyncExternalStore(noopSubscribe, todayInTampa, () => buildDate);
  const upcoming = upcomingAsOf(today);

  if (upcoming.length === 0) {
    return (
      <Reveal className="mt-14 border border-dashed border-line p-10 text-center">
        <p className="font-display text-2xl font-extrabold uppercase">New events dropping soon</p>
        <p className="mt-2 text-paper/60">Follow us on Instagram or check Involve for the latest.</p>
      </Reveal>
    );
  }

  return (
    <ol className="mt-14 border-t border-line">
      {upcoming.map((e, i) => {
        const d = formatDate(e.date);
        return (
          <li key={`${e.date}-${e.title}`}>
            <Reveal delay={i * 80}>
              <article className="group grid grid-cols-[4.5rem_1fr] gap-x-5 gap-y-4 border-b border-line py-8 transition-colors hover:bg-ink sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-x-8 sm:px-4">
                <div className="font-display leading-none">
                  <p className="font-mono text-xs tracking-widest text-red">{d.month}</p>
                  <p className="mt-1 text-5xl font-black sm:text-6xl">{d.day}</p>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-widest text-paper/50">{d.weekday}</p>
                </div>
                <div>
                  <span className="inline-block border border-red/50 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-red">
                    {e.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                    {e.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-paper/65">{e.description}</p>
                  <p className="mt-3 font-mono text-xs text-paper/50">
                    {e.time} <span className="text-red">/</span> {e.location}
                  </p>
                </div>
                <a
                  href={e.rsvp ?? links.involve}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RSVP for ${e.title}`}
                  className="col-start-2 inline-flex w-fit items-center gap-2 border border-paper/30 px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide transition-colors group-hover:border-red group-hover:bg-red sm:col-start-3"
                >
                  RSVP <ArrowIcon className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
