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
        {userid: user}
    );
};

export default functions;