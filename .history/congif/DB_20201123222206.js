const mongoose = require('mongoose');
const MONGO_URI = "<Your MOngo DB cridentials>";


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology:true
        });
        console.log(`Mongodb connected :${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`ERROR:${error.message}`.red);
        process.exit(1);
    }
}
module.exports = connectDB;