export const userQuery = (userid) => {
  const query = `*[_type == "user" && userid == $userid]`;
  return query;
};

export const userCreatedPinsQuery = (userid) => {
  const query = `*[_type == "tuitionFee" && userid == $userid] | order(_createdAt desc){
      ...,
    }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};
