import type React from "react";

import { ImageResponse } from "next/og";

export const runtime = "edge";

type Parameters = {
  title?: string;
};

const inter = fetch(new URL("/public/assets/inter/medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

const Logo = () => (
  <div
    style={{
      backgroundImage: "linear-gradient(45deg, #BDEE63, #97be4d)",
      height: 32,
      width: 32,
      borderRadius: 100,
      marginBottom: 8,
    }}
  />
);

const Name = ({ children }: React.HTMLProps<HTMLDivElement>) => (
  <div
    style={{
      color: "#202020",
      fontWeight: 500,
      height: 32,
    }}
  >
    {children}
  </div>
);

const Title = ({ children }: React.HTMLProps<HTMLDivElement>) => (
  <div
    style={{
      color: "#838383",
      fontWeight: 500,
      height: 32,
    }}
  >
    {children}
  </div>
);

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
          padding: 48,
          backgroundColor: "#FCFCFC",
          fontSize: 24,
          justifyContent: "space-between",
          letterSpacing: "-0.47px",
          lineHeight: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "32px",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Logo />
          <Name>Sylph</Name>
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
            <Title>{parameters.title}</Title>
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
