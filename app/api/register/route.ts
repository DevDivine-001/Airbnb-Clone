import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/primadb'; // Import your Prisma client

// Define the POST method handler
export async function POST(request: Request) {
    const { email, name, password } = await request.json(); // Parse JSON body

    try {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            },
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

