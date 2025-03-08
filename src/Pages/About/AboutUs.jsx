import { Button } from "@material-tailwind/react";
import { ImLocation2 } from "react-icons/im";
import { GoHistory } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { RiContactsBookLine } from "react-icons/ri";
import Btn from "../../Shaired/Button";

const AboutUs = () => {
    const aboutSections = [
        {
            icon: <GoHistory className="text-[#00C982] text-5xl lg:text-7xl mb-2" />,
            title: "Purpose & History",
            description: "NeoBazar was founded with a vision to make online shopping accessible, affordable, and reliable.",
            link: "#"
        },
        {
            icon: <ImLocation2 className="text-[#00C982] text-5xl lg:text-7xl mb-2" />,
            title: "Our Locations",
            description: "We deliver across multiple regions, ensuring fast and reliable shipping worldwide.",
            link: "#"
        },
        {
            icon: <GiShoppingCart className="text-[#00C982] text-5xl lg:text-7xl mb-2" />,
            title: "Products & Services",
            description: "Discover exclusive deals on fashion, electronics, home essentials, and more.",
            link: "#"
        },
        {
            icon: <RiContactsBookLine className="text-[#00C982] text-5xl lg:text-7xl mb-2" />,
            title: "Contact & Help",
            description: "Need assistance? Your one-stop-shop for key contact information for our corporate teams and guest services.",
            link: "#"
        }
    ];
    return (
        <div className="container mx-auto pb-12">
            {/* Banner Section */}
            <div
                style={{
                    backgroundImage: "url('https://i.imgur.com/Ar9uNAm.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // height: "70vh", // Adjust height dynamically

                }}
                className="w-full  md:h-[70vh] lg:h-[80vh] flex items-center justify-center p-12 mt-8"
            >
                <div className="text-white flex flex-col md:flex-row gap-10 md:gap-0 lg:py-52 h-full items-center justify-center text-center md:text-start md:items-start">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:mt-36">
                            About NeoBazar
                        </h2>
                        <p className="text-xl mb-4">
                            NeoBazar is your one-stop destination for seamless shopping,
                            offering a wide range of products with reliable delivery and top-notch customer service.
                        </p>
                        <Btn>Learn More</Btn>
                    </div>
                </div>
            </div>

            <div className="py-16 px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Explore the About NeoBazar Section
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {aboutSections.map((section, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#00C982] lg:h-full">
                            <div className="flex justify-center">{section.icon}</div>
                            <h3 className="font-semibold lg:font-extrabold flex justify-start text-xl text-[#333] mb-2">
                                {section.title}
                            </h3>
                            <p className="text-gray-600 text-sm lg:text-lg text-start mt-3">
                                {section.description}
                            </p>
                            <a href={section.link} className="text-green-800 font-semibold mt-4 inline-block">
                                Explore section →
                            </a>
                        </div>
                    ))}
                </div>
            </div>


            <section className="bg-gray-100 py-12 mt-2 mb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-green-700">$50M+</p>
                            <p className="text-gray-600">in total sales, 2024</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-green-700">10M+</p>
                            <p className="text-gray-600">happy customers worldwide</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-green-700">10K+</p>
                            <p className="text-gray-600">trusted sellers on our platform</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#00C982]/10 py-8 px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 text-start md:text-left">
                        Our Story
                    </h2>
                    <p className="mb-4 text-start md:text-left">
                        NeoBazar was born from a vision to create a seamless shopping experience for customers worldwide. Our journey began with a simple idea: to connect quality sellers with shoppers who seek value, variety, and convenience.
                    </p>
                    <p className="mb-4 text-start md:text-left">
                        We started as a small online store, striving to make online shopping accessible, affordable, and reliable. Over the years, we have expanded our reach, built strong relationships with top brands and independent sellers, and created an ecosystem where customers can shop with confidence.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">How We Help You</h2>
                    <p class="mb-4">At NeoBazar, we don’t just sell products—we provide solutions. We understand the challenges shoppers face, from finding the best deals to ensuring product authenticity. That’s why we offer:</p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li><span class="font-semibold text-gray-600">Diverse Product Categories</span> – From Men’s & Women’s Fashion to Electronics, Home & Kitchen, and Beauty & Health, we have everything you need.</li>
                        <li><span class="font-semibold text-gray-600">Exclusive Offers & Discounts</span> – Shop smart with our daily deals, gift cards, and seasonal sales.</li>
                        <li><span class="font-semibold text-gray-600">Hassle-Free Returns & Secure Payments</span> – Our easy return policies and secure payment methods ensure a risk-free shopping experience.</li>
                        <li><span class="font-semibold text-gray-600">24/7 Support</span> – Whether you need live chat, call support, or email assistance, we’re here to help.</li>
                    </ul>

                </div>
            </section>


        </div>
    );
};



export default AboutUs;
