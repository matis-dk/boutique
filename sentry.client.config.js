import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

// const SENTRY_DSN_RELAY = "http://ba08b5a87d4843a78abeac34ee7b9d72@localhost:3000/5805836"
const DSN = "https://ba08b5a87d4843a78abeac34ee7b9d72@o813103.ingest.sentry.io/5805836"
Sentry.init({
  dsn: DSN,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});