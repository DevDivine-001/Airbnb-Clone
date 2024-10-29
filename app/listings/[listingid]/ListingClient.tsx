
"use client";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from '@/app/types/inex';
import { categories } from '@/app/components/navbar/Categories';
import Container from '@/app/components/Container';
import ListingHead from '@/app/components/Lisitings/ListingHead';
import ListingInfo from '@/app/components/Lisitings/ListingInfo';
import useLoginModal from '@/app/components/hooks/useLoginModal';
import { useRouter } from 'next/navigation';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';
import axios from 'axios';
import toast from 'react-hot-toast';
import ListingReservation from '@/app/components/Lisitings/ListingReservation';
import { Range } from 'react-date-range';

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
};

interface ListingClientProps {
    reservations?: Reservation[];
    listing: SafeListing & { user: SafeUser } | any;
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    reservations = [],
    currentUser
}) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    // Calculate disabled dates based on reservations
    const disabledDates = useMemo(() => {
        let dates: Date[] = [];

        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            });
            dates = [...dates, ...range]; // Add each day in the range to the array
        });

        return dates;
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        setIsLoading(true);
        axios.post('/api/reservations', {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })
        .then(() => {
            toast.success("Listing reserved!");
            setDateRange(initialDateRange); // Reset the date range
            router.refresh(); // Refresh the page
        })
        .catch(() => {
            toast.error('Something went wrong');
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [
        totalPrice,
        dateRange,
        listing?.id,
        router,
        currentUser,
        loginModal
    ]);

    // Update total price based on selected dates
    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            // Multiply the number of days by the listing's daily price
            if (dayCount > 0 && listing.price)  {
                setTotalPrice(dayCount * listing.price);
            } else {
                setTotalPrice(listing.price); // Reset to base price if no days are selected
            }
        }
    }, [dateRange, listing.price]);

    const category = useMemo(() => {
        return categories.find((item) => item.label === listing.category);
    }, [listing.category]);

    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className='grid grid-cols-1 md:grid-cols-7 md:grid-10 mt-6 md:gap-10'>
                     
                    <ListingInfo
                        user={listing.user}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        guestCount={listing.guestCount}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValues}
                    />
                    
                    <div className='order-first mb-10 md:order-last md:col-span-3'>
                        <ListingReservation
                            price={listing.price}
                            totalPrice={totalPrice}
                            onChangeDate={(value) => setDateRange(value)}
                            dateRange={dateRange}
                            onSubmit={onCreateReservation}
                            disabled={isLoading}
                            disabledDates={disabledDates} // Pass disabled dates
                            />
                            </div>
                            </div>
                </div>
            </div>
        </Container>
    );
}

export default ListingClient;