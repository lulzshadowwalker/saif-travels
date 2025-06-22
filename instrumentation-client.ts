import posthog from "posthog-js";

if (process.env.NODE_ENV !== "development") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST + "/ingest",
    ui_host: "https://us.posthog.com",
    capture_pageview: 'history_change',
    capture_pageleave: true, // Enable pageleave capture
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    // debug: process.env.NODE_ENV === "development",
    debug: false,
  });
}

