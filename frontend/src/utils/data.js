export const userQuery = (userid) => {
  const query = `*[_type == "user" && userid == $userid]`;
  return query;
};
