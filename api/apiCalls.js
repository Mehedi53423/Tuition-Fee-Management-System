import sanityClient from "./client.js";

const functions = {};

functions.getProfile = (user) => {
  return sanityClient.fetch(
    `*[_type == "user" && userid == $userid]{
            ...,
            photo{
                asset->{
                    _id,
                    url
                }
            }
        }`,
    { userid: user }
  );
};

/*functions.getAllPosts = (user) => {
  return sanityClient.fetch(`*[_type == "tuitionFee"]{
    ...,
    "username": author->username,
    photo{
      asset->{
        _id,
        url
      }
    }
  }`);
};*/

functions.getFees = (user) => {
  return sanityClient.fetch(
    `*[_type == "tuitionFee" && userid == $userid]{
    ...,
  }`,
    { userid: user }
  );
};

/*export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
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
      } `;*/

export default functions;
