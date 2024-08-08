// import { connectDB } from "@/lib/connectDB"
// import { ObjectId } from "mongodb";


// export const GET = async (request,{params}) => {
//  const db=await connectDB()
//  const servicesCollection=db.collection('services')

//  try {
//     const service= await servicesCollection.findOne({_id:new ObjectId(params.id)});
//     return Response.json({service})
//  } catch (error) {
//     console.log(error);
    
//  }
// }

import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const servicesCollection = db.collection('services');

  try {
    const service = await servicesCollection.findOne({ _id: new ObjectId(params.id) });
    return new Response(JSON.stringify({ service }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'Error fetching service' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
