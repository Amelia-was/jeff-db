const { User, Paper } = require('../models');

const resolvers = {
    Query: {
        papers: async (parent, { email }) => {
            const params = email ? { email } : {};
            return Paper.find(params).sort({ order: 1 });
        }
    }
};

module.exports = resolvers;