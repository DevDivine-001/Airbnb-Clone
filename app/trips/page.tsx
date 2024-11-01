import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import TripsClient from "./TripsClient"




const TripsPages = async () =>{
    const currentUser = await getCurrentUser()
    
    if(!currentUser){

    return(

        <ClientOnly>
            <EmptyState
            title="Unauthorized"
            subtitle="Please login"
            />
            </ClientOnly>
    )
    }

const reservations = await getReservations({
    userId: currentUser.id
})

if(reservations.length == 0 ){
    return(
        <ClientOnly>
            <EmptyState
            title="No tips found"
            subtitle="Looks like you have not reserved any trips"
            
            />
        </ClientOnly>
    )

}
return(
    <ClientOnly>
        <TripsClient
        reservations={reservations}
        currentUser={currentUser}
        />

    </ClientOnly>
)
}

export default TripsPages