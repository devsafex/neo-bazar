import { Typography } from "@material-tailwind/react";
import Logo from "../../Shaired/Logo";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// Footer links data
const LINKS = [
  {
    title: "Company",
    items: ["About us", "Careers", "Blog", "Affiliate Program", "Our Partners"],
  },
  {
    title: "Product",
    items: [
      "Men's Fashion",
      "Women's Fashion",
      "Electronics",
      "Home & Kitchen",
      "Beauty & Health",
    ],
  },

  {
    title: " Quick Links",
    items: [
      "Become a seller",
      "My orders",
      "New Arrivals",
      "Offers & Discounts",
      "Gift Cards",
    ],
  },
  {
    title: "Policies & Legal",
    items: [
      "Privacy Policy",
      "Terms & Conditions",
      "Return & Refund Policy",
      "Shipping Policy",
      "Cookie Policy",
    ],
  },
  {
    title: "Support & Help",
    items: [
      "Live Chat Support",
      "Call Support",
      "Email Support",
      "Help Center",
      "Account Recovery",
    ],
  },
];

// Get current year for the footer
const currentYear = new Date().getFullYear();

// Footer component with white logo option
// eslint-disable-next-line react/prop-types
const Footer = ({ whiteLogo }) => {
  return (
    <footer className=" bg-[#00C982]/5 mt-14 pt-14">
      <div className="  container mx-auto">
        <div className="grid grid-cols-1 ">
          {/* Mobile view: Logo, email, and social links */}
          <div className="md:hidden mx-auto mb-8 space-y-4">
            <div>
              <Link
                to="/"
                className=" flex items-center justify-center  mx-auto"
              >
                <img
                  className={`h-12 md:w-12 ${
                    whiteLogo && "brightness-0 invert"
                  }`}
                  src="https://i.imgur.com/pZLDPsa.png"
                  alt=""
                />
                <div
                  className={` md:block text-2xl text-start font-bold ${
                    whiteLogo ? "text-white" : "text-[#00C982]"
                  }`}
                >
                  <h1>NEO</h1>
                  <h1 className=" -mt-3">BAZAR</h1>
                </div>
              </Link>
            </div>
            <p className="flex items-center gap-2 text-lg text-[#111111]">
              <MdOutlineMail className=" text-xl " /> devsafex.team@gmail.com
            </p>
            <div className="flex space-x-3 justify-center">
              <Link>
                {" "}
                <FaFacebook
                  className="text-blue-600 hover:text-blue-800"
                  size={20}
                />{" "}
              </Link>
              <Link>
                {" "}
                <FaWhatsapp
                  className="text-green-500 hover:text-green-700"
                  size={20}
                />
              </Link>
              <Link>
                {" "}
                <FaTwitter
                  className="text-blue-400 hover:text-blue-600"
                  size={20}
                />{" "}
              </Link>
              <Link>
                {" "}
                <FaInstagram
                  className="text-pink-600 hover:text-pink-800"
                  size={20}
                />
              </Link>
            </div>
          </div>
          {/* Desktop view: Logo, email, social links, and footer links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-4 md:gap-7">
            <div className="hidden md:block space-y-4">
              <Logo></Logo>
              <p className="flex items-center gap-2 text-sm text-[#111111]">
                <MdOutlineMail className=" text-xl " /> devsafex.team@gmail.com
              </p>
              <div className="flex space-x-3">
                <Link>
                  {" "}
                  <FaFacebook
                    className="text-blue-600 hover:text-blue-800"
                    size={20}
                  />{" "}
                </Link>
                <Link>
                  {" "}
                  <FaWhatsapp
                    className="text-green-500 hover:text-green-700"
                    size={20}
                  />
                </Link>
                <Link>
                  {" "}
                  <FaTwitter
                    className="text-blue-400 hover:text-blue-600"
                    size={20}
                  />{" "}
                </Link>
                <Link>
                  {" "}
                  <FaInstagram
                    className="text-pink-600 hover:text-pink-800"
                    size={20}
                  />
                </Link>
              </div>
            </div>
            {/* Map through LINKS to render footer sections */}
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-[#00C982] hover:underline"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center  border-t border-t-gray-200 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} ❤️ <strong>Neo Bazar</strong> - Developed by{" "}
            <a
              href="https://github.com/devsafex"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Devsafex Team
            </a>
            . All Rights Reserved.
          </Typography>

          <div className="flex text-blue-gray-900 sm:justify-center">
            <img src="https://i.ibb.co/Jjr1BXqC/k5b2K0R.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// PropTypes validation for whiteLogo
Logo.propTypes = {
  whiteLogo: PropTypes.bool,
};
export default Footer;
