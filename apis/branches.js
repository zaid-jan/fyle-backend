const queryBranches = require('../sql/query').queryBranches

const branches =  (params, pool) => {
    const { q, limit, offset } = params
    return queryBranches(q, limit, offset, pool)
}

module.exports = {
    branches,
}