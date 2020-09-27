export default {
  Story: {
    thumbnail: (info) => {
      if (!info.thumbnail) {
        return "";
      }

      return `${info.thumbnail.path}.${info.thumbnail.extension}`;
    },
  },
};
