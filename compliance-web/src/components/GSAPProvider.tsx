"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return null; // no UI, just setup
}
