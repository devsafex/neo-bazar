import { useEffect, useState } from "react";
// import deals from '/deals.json'

const HotDeals = () => {
const [deals, setDeals] = useState([])
    // console.log(deals)
  function calculateDiscount(originalPrice, discountPrice) {
    const original = parseFloat(originalPrice.replace("$", ""));
    const discount = parseFloat(discountPrice.replace("$", ""));
    const discountPercentage = ((original - discount) / original) * 100;
    return discountPercentage.toFixed(2); // Keep 2 decimal places
  }
  useEffect(() => {
    fetch("/deals.json")
    .then((res) => res.json())
    .then((data) => {setDeals(data)})
    // .catch((error) => console.error("Error loading JSON:", error)); 

    const percentage = deals.map(deal=> calculateDiscount(deal.price, deals.discount_price))
    console.log(percentage)
    const discount = calculateDiscount("$100", "$20");
    console.log(discount, deals);
  }, [deals, setDeals]);
  return <div className="cointainer">



  </div>;
};

export default HotDeals;
