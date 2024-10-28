// route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/libs/primadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request, { params }: { params: { listingid: string } }) {
    console.log("POST Request Params:", params); // Log the params to check their values

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        console.error("No current user found");
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const { listingid } = params; // Change this line
    if (!listingid) {
        console.error("Invalid listing ID:", listingid); // Log invalid IDs
        return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
    }

    try {
        const favoriteIds = [...(currentUser.favoriteIds ?? []), listingid];
        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error updating favorites:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}



export async function DELETE(request: Request, { params }: { params: { listingid: string } }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        console.error("No current user found");
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const { listingid } = params; // Change this line
    if (!listingid) {
        console.error("Invalid listing ID:", listingid);
        return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
    }

    try {
        const favoriteIds = (currentUser.favoriteIds ?? []).filter((id) => id !== listingid);
        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds },
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error removing favorite:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

