import { DocumentNode } from "apollo-link";

export const toggleFavorite = ({
  query,
  entity,
  cache,
  entityName,
}: {
  query: DocumentNode;
  entity: any;
  cache: any;
  entityName: string;
}) => {
  const previous = cache.readQuery({ query });
  const newEntity = { ...entity, isFavorite: !entity.isFavorite };

  let favoriteList = [];

  if (entity.isFavorite) {
    favoriteList = previous[entityName].filter(
      (fav: any) => fav.id !== newEntity.id
    );
  } else {
    favoriteList = [...previous[entityName], newEntity];
  }

  cache.writeQuery({
    query,
    data: { [entityName]: favoriteList },
  });

  localStorage.setItem(entityName, JSON.stringify(favoriteList));

  return newEntity;
};
