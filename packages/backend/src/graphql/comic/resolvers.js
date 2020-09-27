const root = "/comics";

export default {
  Query: {
    async comics(_, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(root);

      return results;
    },
    async comic(_, { id }, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${id}`);

      return results[0];
    },
  },
  Comic: {
    thumbnail: (info) => `${info.thumbnail.path}.${info.thumbnail.extension}`,
    async characters(info, args, { request }) {
      const {
        body: {
          data: { results },
        },
      } = await request.get(`${root}/${info.id}/characters`);

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
