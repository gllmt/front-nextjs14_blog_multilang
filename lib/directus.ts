import { createDirectus, staticToken, rest } from '@directus/sdk';

// const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string).with(staticToken(process.env.ADMIN_TOKEN as string));

const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
  .with(staticToken(process.env.ADMIN_TOKEN as string))
  .with(rest());

// const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
//   .with(staticToken(process.env.ADMIN_TOKEN as string))
//   .with(rest());

// import { createDirectus, rest, withToken, readItems } from '@directus/sdk';

// const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string).with(rest());

// const request = await directus.request(
//   withToken(process.env.ADMIN_TOKEN as string, readItems('post'))
// );

export default directus;

// const directus = new createDirectus(process.env.NEXT_PUBLIC_API_URL as string, {
//     authentication: {
//         staticToken: process.env.ADMIN_TOKEN as string,
//     },
// });

// const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string, {
//     authentication: {
//         staticToken: process.env.ADMIN_TOKEN as string,
//     },
// });

