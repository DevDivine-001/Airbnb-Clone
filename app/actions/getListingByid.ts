

import prisma from "@/app/libs/primadb";

interface IParams {
    listingId?: string; // Ensure this matches the case used in the route
}

export default async function getListingById(params: IParams) {
    try {
        const { listingId } = params;

        if (!listingId) {
            throw new Error("No listing ID provided in params");
        }

        const listing = await prisma.listing.findUnique({
            where: { id: listingId },
            include: { user: true }
        });

        if (!listing) {
            return null; // Handle the case of no listing found
        }

        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ...listing.user,
                created: listing.user.created.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVerified: listing.user.emailVerified?.toISOString() || null
            }
        };
    } catch (error: any) {
        console.error("Error fetching listing:", error.message || error); // Enhanced error logging
        throw new Error(error.message || "An error occurred while fetching the listing");
    }
}
