import { connectDB } from "@/lib/connectDB";
import bcrypt from 'bcrypt'
export const POST = async (request) => {
    try {
        const newUser = await request.json()
        const db = connectDB()
        const userCollection = await db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'user is existed' }, { status: 304 })
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({ ...newUser, password: hashPassword })
        return Response.json({ message: 'user is created' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'something went wron', error }, { status: 500 })
    }

}