import getCurrentUser from "./actions/getCurrentUser"
import { getListings, IListingsParams } from "./actions/getLisitings"
import ClientOnly from "./components/ClientOnly"
import Container from "./components/Container"
import EmptyState from "./components/EmptyState"
import ListingCard from "./components/Lisitings/ListingCard"

interface HomeProps{
  searchParams: IListingsParams
}

const page = async ({searchParams}: HomeProps) => {

  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  // const isEmpty = true

  if(listings.length == 0){
  return(
      <ClientOnly>
      <EmptyState showReset/>
    </ClientOnly>
  )
  }

  // throw new Error ('Something went wrong')
  return (
    <ClientOnly>
      <Container>
      <div className='
    pt-24
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap-8'>
      {listings.map((listing) =>{
        return(
          <ListingCard
          currentUser={currentUser}
          key={listing.id}
            data={listing}
            disabled   
         />

       
        )
      })}
    </div>
    </Container>
    </ClientOnly>
  )
}

export default page