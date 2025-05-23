export const SITE = {
  website: "https://devlobo.github.io/blog/", // replace this with your deployed domain
  author: "Franco Hernández",
  profile: "https://devlobo.github.io/blog",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "https://github.com/yousef8/astro-paper-i18n/edit/main/",
  },
  dynamicOgImage: false,
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "America/Mexico_City", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
