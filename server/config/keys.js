//keys prod

if (process.env.NODE_ENV === 'production') {
    //we are on prod
    module.exports = require('./prod');
} else {
    //we are on dev
    module.exports = require('./dev');
}