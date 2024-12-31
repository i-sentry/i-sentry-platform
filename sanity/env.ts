export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-11-10";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  `Missing environment variable: NEXT_PUBLIC_SANITY_DATASET`,
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pt7qa29o",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
