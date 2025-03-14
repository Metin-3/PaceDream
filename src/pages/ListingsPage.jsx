import React from 'react'
import Header from '../components/layouts/Header'
import HotelCard from '../components/HotelCard'
import BookingComponent from '../components/BookingComponent'

const ListingsPage = () => {
    return (
        <>
            <Header />
            <HotelCard />
            <BookingComponent />
        </>
    )
}

export default ListingsPage