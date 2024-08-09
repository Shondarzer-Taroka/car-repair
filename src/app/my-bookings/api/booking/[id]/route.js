import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
      const resp = await bookingsCollection.deleteOne({
        _id: new ObjectId(params.id),
      });
      return Response.json({ message: "deleted the booking", response: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };
export const PATCH = async (request, { params }) => {
    const updatedDoc =await request.json()
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
      const resp = await bookingsCollection.updateOne({_id: new ObjectId(params.id)},
      {
        $set:{
          ...updatedDoc
        }
      },
      {
        upsert:true
      }
    
    );
      return Response.json({ message: "find the booking", response: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };
export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
      const resp = await bookingsCollection.findOne({
        _id: new ObjectId(params.id),
      });
      return Response.json({ message: "find the booking", data: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };