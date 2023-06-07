import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 't3fjkndk',
  dataset: 'production',
  apiVersion: '2022-11-25',
  useCdn: false,
  token:
    'skkQ4bZLmyZYBvZ46daH2MNzDzkfyh0TdhDR3ewoKdeS9voWYdF8mAZfsAGa9YoSbWkzWkzHjs9nB1jjUixYjllNAW2oX491Lm4jNKrvWssuqtLmVveGLlFZhXt7PyOXtbe5n5t0L4ondihsvr7iFvw2yH3mIVg2HwEwSnUpW6eUihNB0GBY',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
