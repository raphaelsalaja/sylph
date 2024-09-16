import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const geo = geolocation(request);
  return new Response(`<h1>You are in ${geo}</h1>`, {
    headers: { "content-type": "text/html" },
  });
}
