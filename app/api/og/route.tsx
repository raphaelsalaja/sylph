import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

const inter = fetch(new URL("/public/assets/inter/medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const [font] = await Promise.all([inter]);

  try {
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const title = searchParams.has("title");

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
            data: font,
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
