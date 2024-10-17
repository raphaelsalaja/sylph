import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

/*
 * To assist with generating dynamic Open Graph (OG) images, you can use the Vercel @vercel/og library to compute and generate social card images using Vercel Edge Functions.
 * @see: https://vercel.com/docs/functions/og-image-generation
 *
 * You can use the following code sample to explore using parameters and different content types with next/og.
 * @see: https://vercel.com/guides/dynamic-text-as-image
 *
 * For this example we are going to generate a simple social card image with a dynamic title.
 */
export async function GET(request: Request) {
  try {
    /*
     * Next we are going to extract the parameters from the request URL.
     */
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const { title } = parameters;
    console.log(parameters);

    /*
     * Finally we are fetching the font file from the public directory.
     */
    const inter = fetch(new URL("/public/assets/inter/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <div
        style={{
          /* layout */
          display: "flex",
          width: "100%",
          height: "100%",

          /* box */
          padding: "40px",

          /* style */
          fontSize: "24px",
          letterSpacing: "-0.47px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "24px",
            gap: 12,
          }}
        >
          <div style={{ color: "rgba(255, 255, 255, 0.92)" }}>next-sylph-portfolio</div>
          {title && <div style={{ color: "rgba(255, 255, 255, 0.39)" }}>/</div>}
          {title ? (
            <div style={{ color: "rgba(255, 255, 255, 0.39)" }}>{title.toLowerCase()}</div>
          ) : (
            <svg width="16" viewBox="0 0 75 65" fill="white">
              <path d="M37.59.25l36.95 64H.64l36.95-64z" />
            </svg>
          )}
        </div>
      </div>,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: await inter,
            weight: 400,
          },
        ],
      },
    );
  } catch {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
