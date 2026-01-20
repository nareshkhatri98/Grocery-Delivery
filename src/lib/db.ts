const mongodbUrl = process.env.MONGODB_URL

if(!mongodbUrl) {
    throw new Error("MONGODB_URL is not defined")
}

const cache = global.mongoose
if(!cache) {
    global.mongoose = { conn: null, promise: null }
}