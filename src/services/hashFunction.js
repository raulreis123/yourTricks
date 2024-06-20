const crypto = require('crypto');

async function hashCode(data){
    let hash = crypto.createHash('SHA-256').update(data).digest('hex');
    return hash;
}

module.exports = hashCode;