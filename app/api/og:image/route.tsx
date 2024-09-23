import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  width?: number;
  height?: number;
  title?: string;
};

const regular = fetch(new URL("/public/assets/inter/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const medium = fetch(new URL("/public/assets/inter/medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const [regularFontData, boldFontData] = await Promise.all([regular, medium]);

  try {
    const { searchParams } = new URL(request.url);
    const parameters: Parameters = Object.fromEntries(searchParams);
    const title = searchParams.has("title");

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "#FCFCFC",
          fontSize: 32,
          letterSpacing: "-0.69px",
          lineHeight: "48px",
          padding: 48,
        }}
      >
        <div
          style={{
            backgroundColor: "#BDEE63",
            height: 32,
            width: 32,
            borderRadius: 100,
            marginBottom: 16,
          }}
        />
        <div
          style={{
            color: "#202020",
            fontWeight: 500,
          }}
        >
          Full Name
        </div>
        {title && (
          <div
            style={{
              color: "#838383",
              fontWeight: 400,
            }}
          >
            {parameters.title}
          </div>
        )}
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: regularFontData,
            weight: 400,
          },
          {
            name: "Inter",
            data: boldFontData,
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
