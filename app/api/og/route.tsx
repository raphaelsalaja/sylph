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
    const inter = fetch(new URL("/public/assets/inter/medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          padding: 64,
          backgroundColor: "#FCFCFC",
          fontSize: 32,
          justifyContent: "space-between",
          letterSpacing: "-0.69px",
          lineHeight: "24px",
        }}
      >
        <div
          style={{
            color: "#202020",
            fontWeight: 500,
            height: 64,
          }}
        >
          Next.js Portfolio Starter
        </div>

        {title && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 8,
            }}
          >
            <div
              style={{
                color: "#838383",
                fontWeight: 500,
                height: 32,
              }}
            >
              {parameters.title}
            </div>
          </div>
        )}
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: await inter,
            weight: 500,
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
