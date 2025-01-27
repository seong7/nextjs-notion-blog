module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '098bba12be3947a69e9c9055c80bb026',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '184a32f9-15eb-4ae1-bb74-6be35f92214b',

  // basic site info (required)
  name: 'SEONGJINKIM',
  domain: 'notion-blog-seong7.vercel.app',
  author: 'Seongjin Kim',

  // open graph metadata (optional)
  description: "Seongjin's Tech Blog",
  socialImageTitle: 'Seongjin Kim',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  github: 'seong7',
  linkedin: 'seongjin-kim-b3651312a',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'seong7/nextjs-notion-blog',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
};
