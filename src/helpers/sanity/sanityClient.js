import { createClient } from "@sanity/client";
import { SANITY_TOKEN, SANITY_PROJECTID } from "@env";

export const client = createClient({
  projectId: SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2023-04-13",
  useCdn: true,
  token: SANITY_TOKEN,
});
