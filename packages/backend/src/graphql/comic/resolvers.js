export default {
  Comic: {
    thumbnail: (info) => `${info.thumbnail.path}.${info.thumbnail.extension}`,
  },
};
