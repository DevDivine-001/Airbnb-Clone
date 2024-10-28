import getListingById from '@/app/actions/getListingByid';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';

interface ListingPageProps {
    params: { listingid: string }; // Define the type of params
}

const ListingPage = async ({ params }: ListingPageProps) => {
    const { listingid } = params; // Extract listingid from params

    const listing = await getListingById({ listingId:listingid }); 

    // Ensure the listing ID is valid
    if (!listing) {
        return (<ClientOnly>
            <EmptyState/>
        </ClientOnly>); // Handle the case of no ID
    }
        return (
           <div>{listing.title}{/* Render other listing details */} </div>
             
        );
 

 
};

export default ListingPage;