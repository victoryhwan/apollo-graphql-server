import user from "../db/models/user";
import StatusCode from "../constants/statusCode";

const resolvers = {
  Query: {
    users: async () => {
      const result = await user.selectAll();
      return result.data;
    },
    user: async (_, {email}) => {
      const result = await user.find(email);
      return result.data[0];
    },
  },

  Mutation: {
    addUser: async (_, { name, email }) => {
      const result = await user.insert(name, email);
      return result.code === StatusCode.OK ? true : false;
    },
  },
};

export default resolvers;