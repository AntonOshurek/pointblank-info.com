import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "PointBlank Info",
      social: {
        github: "https://github.com/AntonOshurek/pointblank-info.com",
      },
      sidebar: [
        {
          label: "Info",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "info/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
