import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/helper/server-helper";
// import prisma from "@/prisma";
// import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  //   const data = await req.json();
  //   console.log(data);
  try {
    const { name, phone, password } = await req.json();

    if (!name || !phone || !password) {
      return NextResponse.json({ message: "Invalid data" }, { status: 401 });
    }

    console.log(name, phone, password);

    // const hashedPassword = await bcrypt.hash(password, 12);
    // console.log(hashedPassword);

    // await connectToDatabase();

    // const customer = await prisma.client.create({
    //   data: {
    //     name,
    //     phone,
    //     password: hashedPassword,
    //   },
    // });

    // return NextResponse.json({ customer }, { status: 201 });
  } catch (error) {
    console.log(error);
    // return NextResponse.json(
    //   { message: "Server side error", error },
    //   { status: 500 }
    // );
  } finally {
    // await prisma.$disconnect();
  }
};

// export const GET = async () => {
//   try {
//     await connectToDatabase();

//     const customer = await prisma.customer.findMany();

//     return NextResponse.json({ customer }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "server side error", error },
//       { status: 201 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// };
