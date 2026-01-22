import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'lp0opx9i', // Ensure this matches exactly!
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  // If the product has no image, return a blank object instead of crashing
  if (!source) return { url: () => '' }; 
  return builder.image(source);
};