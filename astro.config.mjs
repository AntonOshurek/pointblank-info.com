import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "PointBlank Info",
      social: {
        github: "https://github.com/AntonOshurek/pointblank-info.com",
        linkedin: "https://www.linkedin.com/in/anton-oshurek/",
      },
      sidebar: [
        {
          label: "Карты",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Люксвиль", slug: "maps/luxvile" },
            { label: "Деловой центр", slug: "maps/dc" },
            { label: "Мидтаун", slug: "maps/midtown" },
            { label: "Взрыв в городе", slug: "maps/wwg" },
            { label: "Метро", slug: "maps/metro" },
            { label: "Буря в пустыне", slug: "maps/sand-storm" },
            { label: "Прованс", slug: "maps/provance" },
            { label: "Убежище", slug: "maps/shelter" },
            { label: "Наблюдательный пост", slug: "maps/observation-post" },
            { label: "Пригород Багдада", slug: "maps/suburb-of-baghdad" },
          ],
        },
        {
          label: "Звания",
          autogenerate: { directory: "ranks" },
        },
      ],
    }),
  ],
});
