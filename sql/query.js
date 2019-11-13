const changeCase = require('change-case')

const queryBranches = async (q, limit, offset, pool) => {
    q = changeCase.upperCase(q);
    const sql = `
    select * from branches where branch like '%${q}%'
    union
    select * from branches where address like '%${q}%'
    union
    select * from branches where district like '%${q}%'
    order by ifsc limit ${limit} offset ${offset}
    `
    // console.log("sql", sql);
    const result = await pool.query(sql)
    return result.rows;
}

const queryAutocomplete = async (q, limit, offset, pool) => {    
    const sql = `
    select * from branches 
    where branch like '%${q}%' 
    order by ifsc 
    limit ${limit} offset ${offset}
    `
    const result = await pool.query(sql)
    return result.rows;
}

module.exports = {
    queryBranches,
    queryAutocomplete,
}