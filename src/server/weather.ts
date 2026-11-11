import "server-only";

export type Weather = { temperature: number; label: string };

// San Salvador. Open-Meteo needs no key and receives only these coordinates.
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=13.6929&longitude=-89.2182&current=temperature_2m,weather_code&timezone=America%2FEl_Salvador";

/** WMO weather codes, grouped into the few words the widget has room for. */
function describe(code: number): string {
  if (code === 0) return "Clear";
  if (code <= 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code <= 48) return "Fog";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Showers";
  if (code <= 86) return "Snow showers";
  return "Thunderstorm";
}

/** Current conditions, cached for 15 minutes. Null if the service is down. */
export async function getWeather(): Promise<Weather | null> {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      current?: { temperature_2m?: number; weather_code?: number };
    };
    const temperature = data.current?.temperature_2m;
    const code = data.current?.weather_code;
    if (typeof temperature !== "number" || typeof code !== "number") {
      return null;
    }
    return { temperature: Math.round(temperature), label: describe(code) };
  } catch {
    return null;
  }
}
