import React from "react";
import { Card, Tag, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const hotelData = [
    {
        id: 1,
        name: "Cozy Loft in Downtown",
        address: "789 Pine Street, New York, New York City, USA",
        image: "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683423.jpg?t=st=1741950286~exp=1741953886~hmac=7ddff06dd7f1fe105cb20b2ae0a6e121cbb69d8923d94a8991d8c5b0446bec9b&w=1380",
        tags: [
            { label: "Love Hotel", color: "purple" },
            { label: "Hourly Basis Available", color: "green" }
        ]
    },
];

const HotelCard = () => {
    return (
        <div className="container">
            {hotelData && hotelData.map((hotel) => (
                <div key={hotel.id} className="w-full mx-auto p-4">
                    <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 transition duration-300 w-[100px] py-2 px-2 rounded-xl">
                        <ArrowLeftOutlined className="text-lg cursor-pointer" />
                        <span className="ml-2 text-lg font-semibold">Back</span>
                    </div>
                    <Card
                        className="rounded-2xl overflow-hidden shadow-lg"
                        cover={
                            <div className="w-full h-[300px] md:h-[400px] rounded-t-2xl">
                                <img alt={hotel.name} src={hotel.image} className="w-full h-full object-cover" />
                            </div>
                        }
                    >
                        <divc className="flex justify-between flex-wrap">
                            <div>
                                <div className="flex space-x-2 mb-2">
                                    {hotel.tags.map((tag, index) => (
                                        <Tag key={index} color={tag.color}>{tag.label}</Tag>
                                    ))}
                                </div>
                                <h2 className="text-2xl font-bold mb-1">{hotel.name}</h2>
                                <p className="text-gray-500 mb-4">{hotel.address}</p>
                            </div>
                            <button type="primary" ghost className="border border-colorPrimary rounded-lg h-[40px] px-7 text-colorPrimary font-medium transition duration-300 hover:bg-colorPrimary hover:bg-opacity-10 hover:border-transparent">
                                See all Photos
                            </button>
                        </divc>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default HotelCard;
