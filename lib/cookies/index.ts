"use server";

import { cookies } from "next/headers";

export async function setFirstTimeCookie() {
  const cookieStore = cookies();
  if (cookieStore.has("firstTime")) {
    return false;
  }

  cookieStore.set("firstTime", "true", {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  return true;
}
