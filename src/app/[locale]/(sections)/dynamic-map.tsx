"use client";

import useToggle from "@/app/hooks/toggle";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Map = dynamic(() => import("./map"), { ssr: false });

const GoogleMap = () => {
  const [isLoaded, toggle] = useToggle();
  useEffect(() => {
    const controller = new AbortController();
    const onLoad = () => {
      toggle();
    };
    window.addEventListener("load", onLoad, { signal: controller.signal });

    return () => controller.abort();
  }, [toggle]);

  return isLoaded && <Map />;
};

export default GoogleMap;
