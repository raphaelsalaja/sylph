import { gray } from "@radix-ui/colors";
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: gray.gray4,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          padding: 2,
        }}
      >
        <div
          style={{
            background: gray.gray12,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
