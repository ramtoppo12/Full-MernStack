const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://ram:FGYoCx3bnN57EdL8@cluster0.cl84n.mongodb.net/ramdb?retryWrites=true&w=majority";


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
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