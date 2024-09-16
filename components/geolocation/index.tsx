"use client";

import { useEffect } from "react";

export const Geolocation = () => {
  useEffect(() => {
    const footprint = sessionStorage.getItem("footprint");

    const fetchGeo = async () => {
      const res = await fetch("/api/geolocation");
      const { city, country } = await res.json();

      console.log(`You are in ${city}, ${country}`);
    };

    if (footprint !== "true") {
      fetchGeo();
      sessionStorage.setItem("footprint", "true");
    }
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
    </div>
  );
};
