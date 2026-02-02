import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/users_api_aventura';

if (!MONGO_URI) {
    throw new Error('Por favor proporciona una URI de MongoDB');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        process.exit(1);
    }
}