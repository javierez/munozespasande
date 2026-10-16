

export type SocialLink = {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok";
  url: string;
  previewImage?: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "facebook",
  "url": "https://www.facebook.com/p/Dobleese-Multigestion-100063586771892/",
  "previewImage": undefined
}, {
  "platform": "instagram",
  "url": "https://www.instagram.com/dobleese_inmobiliaria/",
  "previewImage": undefined
}];
}