import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { geolocation } from "@vercel/functions";

export async function GET(request: NextRequest) {
  try {
    const { city, country } = geolocation(request) || {};
    return NextResponse.json({ city, country });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to retrieve geolocation data" },
      { status: 500 },
    );
  }
}
