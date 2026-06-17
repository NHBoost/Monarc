"use client";

import { useReveal } from "@/hooks/useReveal";
import { useTimelineGate } from "@/hooks/useTimelineGate";

/**
 * Mounts the timeline gate and IntersectionObserver-based reveal logic once.
 * Renders nothing — it just attaches global side effects on the client.
 */
export default function RevealRunner() {
  useTimelineGate();
  useReveal();
  return null;
}
