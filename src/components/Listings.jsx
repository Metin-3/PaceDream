// Frontend - React, Redux, Tailwind CSS, Ant Design

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "./redux/listingSlice";
import { Card, Button, Spin } from "antd";
import "tailwindcss/tailwind.css";

const Listings = () => {
    const dispatch = useDispatch();
    const { listings, loading } = useSelector((state) => state.listings);

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Available Listings</h1>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map((listing) => (
                        <Card
                            key={listing._id}
                            title={listing.title}
                            className="shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={listing.images[0]}
                                alt={listing.title}
                                className="w-full h-48 object-cover mb-3 rounded"
                            />
                            <p className="text-gray-600">{listing.location}</p>
                            <p className="font-bold text-lg">${listing.price} per month</p>
                            <Button type="primary" className="mt-2 w-full">
                                View Details
                            </Button>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Listings;
