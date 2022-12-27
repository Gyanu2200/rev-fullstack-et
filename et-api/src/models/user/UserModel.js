import UserSchema from "./UserSchema.js";

// now on this userSchema we gonna do queries, what are the queries we need:

// create user
// login user
// if they want to delete the account - delete user
// if they want to do password update... may it could be abit complexity, we will do it on bigger project
// so lets create the queries:

// create user
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

// login user
