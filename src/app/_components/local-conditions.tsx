"use client";

import { useEffect, useState } from "react";

import type { Weather } from "~/server/weather";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/El_Salvador",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Where the designer is right now: local time and weather in San Salvador. */
export function LocalConditions({ weather }: { weather: Weather | null }) {
  // The time is only known in the browser, so it starts empty and fills in.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(clock.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <dl className="conditions" aria-label="San Salvador, right now">
      <div>
        <dt>Location</dt>
        <dd>San Salvador</dd>
      </div>
      <div>
        <dt>Local time</dt>
        <dd className="conditions-time" suppressHydrationWarning>
          {time ?? "--:--:--"} <span>CST</span>
        </dd>
      </div>
      {weather ? (
        <div>
          <dt>Weather</dt>
          <dd>
            {weather.temperature}°C <span>{weather.label}</span>
          </dd>
        </div>
      ) : null}
    </dl>
  );
}
