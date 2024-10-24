import { NextResponse } from "next/server"

import prisma from "@/app/libs/primadb"
import getCurrentUser from "@/app/actions/getCurrentUser"

export async function POST(
    request: Request
) {

    const currentUser = await getCurrentUser()
    if (!currentUser) {

        return NextResponse.error()
    }

    const body = await request.json()
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price
    } = body

    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    })
    return NextResponse.json(listing)
}


// import { NextResponse } from "next/server"
// import prisma from "@/app/libs/primadb"
// import getCurrentUser from "@/app/actions/getCurrentUser"

// export async function POST(
//     request: Request
// ) {
//     const currentUser = await getCurrentUser()
//     if (!currentUser) {
//         return NextResponse.error()
//     }

//     const body = await request.json()
//     const {
//         title,
//         description,
//         imageSrc,
//         category,
//         roomCount,
//         bathroomCount,
//         guestCount,
//         location,
//         price
//     } = body

//     // Check if location and location.value exist
//     if (!location || !location.value) {
//         return NextResponse.json({ error: "Location is required" }, { status: 400 })
//     }

//     const listing = await prisma.listing.create({
//         data: {
//             title,
//             description,
//             imageSrc,
//             category,
//             roomCount,
//             bathroomCount,
//             guestCount,
//             locationValue: location.value,  // Ensure location.value exists
//             price: parseInt(price, 10),
//             userId: currentUser.id
//         }
//     })

//     return NextResponse.json(listing)
// }
