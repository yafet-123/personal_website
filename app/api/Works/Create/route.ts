// import Works from "@/models/works";
// import { connectToDB } from "@/utils/database";
// import { NextApiRequest, NextApiResponse } from "next";

// export const POST = async (request:NextApiRequest) => {
//     try {
//         await connectToDB();
//         const newworks = new Works({
//             title: "FRAGILE",
//             descreption:`UV photographic print on aluminium dibond
//                         173 x 145 cm
//                         edition of 3 plus 1 artist proofs
//                         Series: Fragile`,
//             exhibitions:`SP ARTE 2022 solo show`,
//             image:"http://res.cloudinary.com/df7hlpjcj/image/upload/v1686995415/Portfolio/warriors_lqgqoe.jpg"
//         });

//         await newworks.save();
//         return new Response(JSON.stringify(newworks), { status: 201 })
//     } catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }
