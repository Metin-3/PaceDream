import React, { useState } from "react";
import { Button, Card, Tabs, DatePicker, Row, Col, Rate, Input, Avatar } from "antd";
import { CheckCircleOutlined, DropboxOutlined, RiseOutlined, StarFilled, ThunderboltOutlined, WifiOutlined } from "@ant-design/icons";

const bookingData = [
    {
        id: 1,
        pricePerMonth: 20,
        months: 5,
        initialPayment: 103,
        duePayment: 102
    },
];

const listingData = [
    {
        id: 2,
        host: { name: "Divash Upadhay" },
        description: "A stylish and modern loft in the heart of NYC, ideal for students and professionals.",
        amenities: ["WiFi", "Gym", "Elevator", "Laundry"],
        location: {
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48576.5652101264!2d49.7437462!3d40.4523551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1741958935594!5m2!1sen!2saz",
            description: "A very dynamic and appreciated district with many historical monuments."
        }
    },
];


const reviewsData = [
    {
        id: 1,
        name: "Robert Fox",
        avatar: "https://i.pravatar.cc/40?img=1",
        rating: 5,
        date: "February 27, 2025, 05:17 PM",
        review:
            "Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum."
    },
    {
        id: 2,
        name: "Esther Howard",
        avatar: "https://i.pravatar.cc/40?img=2",
        rating: 5,
        date: "February 27, 2025, 05:17 PM",
        review:
            "Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum."
    }
];
const BookingComponent = () => {
    const [activeTab, setActiveTab] = useState("withoutRoommates");
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (dates) => {
        setSelectedDates(dates);
    };



    // rating
    const [reviews, setReviews] = useState(reviewsData);
    const [rating, setRating] = useState(4);
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = () => {
        if (!reviewText) return;
        const newReview = {
            id: reviews.length + 1,
            name: "Anonymous",
            avatar: "https://i.pravatar.cc/40",
            rating,
            date: new Date().toLocaleString(),
            review: reviewText
        };
        setReviews([newReview, ...reviews]);
        setReviewText("");
        setRating(4);
    };


    return (
        <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="lg:flex-row flex-col-reverse">
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    {listingData && listingData.map((data) => (
                        <Card key={data.id} className="max-w-2xl mx-auto p-6 border-none rounded-2xl">
                            <div className="flex flex-wrap gap-3 items-center space-x-4">
                                <div className="flex gap-2">
                                    <CheckCircleOutlined className="text-blue-500 text-2xl" />
                                    <div>
                                        <h3 className="text-sm sm:text-lg font-bold">Hosted by {data.host.name}</h3>
                                        <p className="text-gray-500">Identity Verified</p>
                                    </div>
                                </div>
                                <Button type="primary" className="ml-auto bg-purple-600 hover:bg-purple-700">
                                    View Profile
                                </Button>
                            </div>

                            <p className="text-gray-600 mt-4">
                                To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">Description</h3>
                            <p className="text-gray-700">{data.description}</p>

                            <h3 className="text-xl font-semibold mt-6">Amenities</h3>
                            <div className="flex gap-3">
                                <p className="text-purple-600"> <WifiOutlined title="WiFi" /> WiFi</p>
                                <p className="text-purple-600"> <ThunderboltOutlined title="Gym" /> Gym</p>
                                <p className="text-purple-600">  <RiseOutlined title="Elevator" /> Elevator</p>
                                <p className="text-purple-600">  <DropboxOutlined title="Laundry" /> Laundry</p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6">Where you'll be</h3>
                            <div className="mt-4">
                                <iframe
                                    src={data.location.mapUrl}
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: "20px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <p className="text-gray-600 mt-2">{data.location.description}</p>
                        </Card>
                    ))}

                    <div className="max-w-2xl mx-auto p-4">
                        <h2 className="text-xl font-bold mb-2">{reviews.length} Reviews</h2>
                        <div className="flex items-center gap-1 text-orange-500 mb-4">
                            <StarFilled className="text-lg" />
                            <span className="text-lg font-semibold">5.0</span>
                        </div>
                        <Card className="mb-4 p-0 bg-gray-50 !border-none">
                            <Rate value={rating} onChange={setRating} className="mb-2" />
                            <Input.TextArea
                                rows={3}
                                placeholder="Share your thoughts ..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="custom-textarea mb-2 !bg-gray-50"
                            />
                            <Button type="primary" className="bg-colorPrimary text-white" onClick={handleSubmit}>
                                Submit Review
                            </Button>
                        </Card>
                        {reviews.map((review) => (
                            <Card key={review.id} className="mb-4 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Avatar src={review.avatar} />
                                    <div>
                                        <h3 className="font-semibold">{review.name}</h3>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <Rate value={review.rating} disabled className="mb-2" />
                                <p>{review.review}</p>
                            </Card>
                        ))}
                    </div>
                </Col>


                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    {bookingData && bookingData.map((data) => (
                        <Card key={data.id} className="w-full mx-auto p-6 shadow-lg rounded-2xl">
                            <h2 className="text-2xl font-bold mb-8">${data.pricePerMonth} /Month</h2>
                            <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
                                <Tabs.TabPane tab="With Roommates" key="withRoommates" />
                                <Tabs.TabPane tab="Without Roommates" key="withoutRoommates" />
                            </Tabs>

                            <h3 className="text-lg font-semibold text-center my-2">Select Dates</h3>
                            <DatePicker.RangePicker onChange={handleDateChange} className="w-full" />

                            <div className="mt-4">
                                <p className=" flex justify-between py-1">
                                    <span className="text-gray-600">${data.pricePerMonth * data.months} X {data.months} Months</span>
                                    <strong>$250</strong></p>
                                <p className=" flex justify-between py-1">
                                    <span className="text-gray-600">Discount:</span>
                                    <strong>$0</strong>
                                </p>
                            </div>

                            <div className="border rounded-lg p-3 bg-gray-50 mt-2">
                                <p className="py-2 flex justify-between">
                                    <span className="font-medium">You Have To Pay Now:</span>
                                    <strong>${data.initialPayment}</strong>
                                </p>
                                <hr />
                                <p className="py-2 flex justify-between">
                                    <span className="font-medium">Due Payment:</span>
                                    <strong>${data.duePayment}</strong>
                                </p>
                            </div>

                            <h3 className="text-xl flex justify-between font-bold mt-4">
                                <span>Total: </span>
                                <span>${data.pricePerMonth * data.months}</span>
                            </h3>
                            <Button type="primary" block className="mt-4 bg-colorPrimary">
                                Submit Proposal
                            </Button>
                        </Card>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default BookingComponent;
