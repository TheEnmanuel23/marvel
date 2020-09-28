const root = "/stories";

export default {
  Query: {
    async stories(_, { pagination = {} }, { request }) {
      const {
        body: { data },
      } = await request.get(root).query(pagination);

      return data;
    },
    async story(_, { id }, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${id}`);

      return results[0];
    },
  },
  Story: {
    thumbnail: (info) => {
      if (!info.thumbnail) {
        return "";
      }

      return `${info.thumbnail.path}.${info.thumbnail.extension}`;
    },
    async characters(info, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${info.id}/characters`);

      return results;
    },
    async comics(info, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${info.id}/comics`);

      return results;
    },
  },
};
