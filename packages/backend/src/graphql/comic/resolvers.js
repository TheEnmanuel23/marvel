const root = "/comics";

export default {
  Query: {
    async comics(_, { filter, orderBy, pagination = {} }, { request }) {
      const filters = { ...filter, orderBy, ...pagination };

      const {
        body: { data },
      } = await request.get(root).query(filters);

      return data;
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
  ComicSort: {
    TITLE: "title",
    ISSUE_NUMBER: "issueNumber",
  },
  IssueFormat: {
    COMIC: "comic",
    MAGAZINE: "magazine",
    TRADE_PAPERBACK: "trade paperback",
    HARDCOVER: "hardcover",
    DIGEST: "digest",
    GRAPHIC_NOVEL: "graphic novel",
    DIGITAL_COMIC: "digital comic",
    INFINITE_COMIC: "infinite comic",
  },
};
