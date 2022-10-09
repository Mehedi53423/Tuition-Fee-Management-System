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

functions.getFees = (user) => {
  return sanityClient.fetch(
    `*[_type == "tuitionFee" && userid == $userid]{
    ...,
  }`,
    { userid: user }
  );
};

functions.payFee = (id) => {
  return sanityClient.patch(id).set({ payed: true }).commit();
};

export default functions;
