export const userQuery = (username, password) => {
  const query = `*[_type == 'user' && username == '${username}' && password == '${password}']`;
  return query;
};

export const musicsQuery = (category = null) => {
  const query = category
    ? `*[_type == 'music' && '${category}' in categories[] -> name]{
      name,
      description,
      imageUrl,
      categories[],
      creator ->,
      musicFile {
        asset -> {
          _id,
          url
        },
  }
    }`
    : `*[_type == 'music']{...}`;

  return query;
};

export const categoriesQuery = () => {
  const query = `*[_type == 'category']`;
  return query;
};
