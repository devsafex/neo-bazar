import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    // <div>
    //   <div className=" container mx-auto w-11/12 xl:w-full">
    //     <h1 className=" text-xl md:text-2xl">
    //       Frequently Asked Questions (FAQ) - NeoBazaar
    //     </h1>
    //     <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(1)}>
    //         1. What is NeoBazaar?
    //       </AccordionHeader>
    //       <AccordionBody >
    //         NeoBazaar is a modern and secure e-commerce platform that provides
    //         users with a seamless shopping experience, offering a wide range of
    //         products across multiple categories.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(2)}>
    //         2. How do I create an account?
    //       </AccordionHeader>
    //       <AccordionBody>
    //         You can sign up using your email and password or log in quickly
    //         using Google authentication via Firebase Auth.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(3)}>
    //         3. What payment methods are supported?
    //       </AccordionHeader>
    //       <AccordionBody>
    //         NeoBazaar supports multiple payment options, including credit/debit
    //         cards, UPI, PayPal, Stripe, and Razorpay.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(4)}>
    //       4. Is my payment information secure?
    //       </AccordionHeader>
    //       <AccordionBody>
    //       Yes! We use SSL encryption and secure payment gateways to ensure your payment details remain safe.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(5)}>
    //       5. Can I track my order?
    //       </AccordionHeader>
    //       <AccordionBody>
    //       Absolutely! Once your order is placed, you’ll receive a tracking link via email or SMS to monitor your shipment in real time.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(6)}>
    //       6. What should I do if I forget my password?
    //       </AccordionHeader>
    //       <AccordionBody>
    //       You can reset your password by clicking the Forgot Password? link on the login page. An email will be sent to help you set a new password.
    //       </AccordionBody>
    //     </Accordion>
    //     <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
    //       <AccordionHeader className=" border-b-[#00C982]/20" onClick={() => handleOpen(7)}>
    //       7. How do I contact customer support?
    //       </AccordionHeader>
    //       <AccordionBody>
    //       You can reach out to our support team via email, live chat, or our contact form available on the website.
    //       </AccordionBody>
    //     </Accordion>
    //   </div>
    // </div>

    <div className="container mx-auto w-11/12 xl:w-full">
      
      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/dJtyDZPp/image.png"
            alt="FAQ Illustration"
            className="w-full h-auto md:h-[500px] object-contain"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
            Frequently Asked Questions (FAQ) - NeoBazaar
          </h1>
          {[...Array(7)].map((_, i) => (
            <Accordion key={i} open={open === i + 1} icon={<Icon id={i + 1} open={open}/>}>
              <AccordionHeader
                className="border-b-[#00C982]/20 text-lg font-medium"
                onClick={() => handleOpen(i + 1)}
              >
                {i + 1}. {questions[i]}
              </AccordionHeader>
              <AccordionBody className="text-gray-600">
                {answers[i]}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

const questions = [
  "What is NeoBazaar?",
  "How do I create an account?",
  "What payment methods are supported?",
  "Is my payment information secure?",
  "Can I track my order?",
  "What should I do if I forget my password?",
  "How do I contact customer support?",
];

const answers = [
  "NeoBazaar is a modern and secure e-commerce platform that provides users with a seamless shopping experience, offering a wide range of products across multiple categories.",
  "You can sign up using your email and password or log in quickly using Google authentication via Firebase Auth.",
  "NeoBazaar supports multiple payment options, including credit/debit cards, UPI, PayPal, Stripe, and Razorpay.",
  "Yes! We use SSL encryption and secure payment gateways to ensure your payment details remain safe.",
  "Absolutely! Once your order is placed, you’ll receive a tracking link via email or SMS to monitor your shipment in real time.",
  "You can reset your password by clicking the 'Forgot Password?' link on the login page. An email will be sent to help you set a new password.",
  "You can reach out to our support team via email, live chat, or our contact form available on the website.",
];

Icon.propTypes = {
      id:PropTypes.string.isRequired,
      open: PropTypes.bool.isRequired
}

export default Faq;
