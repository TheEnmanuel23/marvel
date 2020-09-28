const root = "/characters";

export default {
  Query: {
    async characters(_, { filter = {}, desc, pagination = {} }, { request }) {
      let filters = {
        ...filter,
        ...pagination,
        orderBy: desc ? "-name" : "name",
      };

      const {
        body: { data },
      } = await request.get(root).query(filters);

      return data;
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
