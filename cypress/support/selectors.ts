export const SELECTORS = {
  posts: 'app-post',
  post: (num: number) => `app-post:nth-child(${num})`,
  postFront: (num: number) => `app-post:nth-child(${num}) .PostComponent-front`,
  postBack: (num: number) => `app-post:nth-child(${num}) .PostComponent-back`,
};
