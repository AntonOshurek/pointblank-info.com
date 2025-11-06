import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://pointblank-info.com",
    integrations: [
        starlight({
            title: "PointBlank Info",
            social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/AntonOshurek/pointblank-info.com' },
            { icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/in/anton-oshurek/' },
            ],
            locales: {
                root: { label: 'Русский', lang: 'ru' },
            },
            defaultLocale: 'root',
            sidebar: [
                {
                  label: "Карты",
                  items: [
                    // Each item here is one entry in the navigation menu.
                    { label: "Люксвиль", link: "maps/luxvile" },
                    { label: "Деловой центр", link: "maps/dc" },
                    { label: "Мидтаун", link: "maps/midtown" },
                    { label: "Взрыв в городе", link: "maps/wwg" },
                    { label: "Метро", link: "maps/metro" },
                    { label: "Буря в пустыне", link: "maps/sand-storm" },
                    { label: "Прованс", link: "maps/provance" },
                    { label: "Убежище", link: "maps/shelter" },
                    { label: "Наблюдательный пост", link: "maps/observation-post" },
                    { label: "Пригород Багдада", link: "maps/suburb-of-baghdad" },
                  ],
                },
                {
                  label: "Звания",
                  autogenerate: { directory: "ranks" },
                },
                {
                  label: "Скилы",
                  autogenerate: { directory: "skills" },
                },
                {
                  label: "Кланы",
                  autogenerate: { directory: "clans" },
                },
            ],
        }),
    ],
});
