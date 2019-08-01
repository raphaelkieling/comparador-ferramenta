import bcrypt from 'bcrypt'

export default {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.db.User.findAll();
    }
  },
  Mutation: {
    addUser: (root, { user }, { dataSources }) => {
      return dataSources.db.User.create(user)
    },
    auth: async (root, { user }, { dataSources }) => {
      console.log(user)
      const userFound = dataSources.db.User.findOne({
        where: { email: user.email }
      })

      console.log(userFound)

      let valid = await bcrypt.compare(user.password, userFound.password);

      if (!valid) {
        return new Error('User not founded');
      }

      return userFound;
    }
  }
}
