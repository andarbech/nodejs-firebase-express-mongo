const mongoose = require('mongoose');

function connection() {
    return mongoose.connect('mongodb://localhost:27017/chaniteo', {
        autoIndex:true,
    })
}
module.exports=connection
