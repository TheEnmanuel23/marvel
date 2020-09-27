const root = "/characters";

export default {
  Query: {
    async characters(_, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(root);

      return results;
    },
    async character(_, { id }, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${id}`);

      return results[0];
    },
  },
  Character: {
    thumbnail: (info) => `${info.thumbnail.path}.${info.thumbnail.extension}`,
    async comics(info, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${info.id}/comics`);

      return results;
    },
    async stories(info, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${info.id}/stories`);

      return results;
    },
  },
};
