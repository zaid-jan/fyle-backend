const queryAutocomplete = require('../sql/query').queryAutocomplete

const autocomplete = (params, pool) => {
    const { q, limit, offset } = params
    return queryAutocomplete(q, limit, offset, pool)
}

module.exports = {
    autocomplete,
}