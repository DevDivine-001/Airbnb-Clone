import getListingById from '@/app/actions/getListingByid';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface ListingPageProps {
    params: { listingid: string }; // Define the type of params
}

const ListingPage = async ({ params }: ListingPageProps) => {
    const { listingid } = params; // Extract listingid from params

    const listing = await getListingById({ listingId:listingid }); 
    const currentUser = await getCurrentUser()

    // Ensure the listing ID is valid
    if (!listing) {
        return (<ClientOnly>
            <EmptyState/>
        </ClientOnly>); // Handle the case of no ID
    }
        return (
           <ClientOnly>


              <ListingClient
            listing={listing}
            currentUser={currentUser}
            /> 

            {/* Render other listing details */} </ClientOnly>
             
        );
 

 
};

export default ListingPage;