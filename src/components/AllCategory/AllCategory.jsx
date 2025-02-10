// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const AllCategory = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <div className="bg-[#00C982]/10 flex justify-start items-center p-2">
          <div className="bg-white p-3.5 mx-2 rounded-full w-20">
            {/* <div className="flex flex-col items-center justify-center gap-1">
              <img src={items.img} className="w-10" alt="" />
              <p className="text-xs">{items.slug}</p>
            </div> */}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae cupiditate, omnis quaerat earum explicabo harum a
              optio, id tempore saepe soluta eum nostrum ad odit possimus,
              libero dolor ab ducimus rem voluptates ullam exercitationem
              beatae? Repudiandae dolorum corporis hic inventore suscipit,
              voluptate cumque a iste reprehenderit, nemo assumenda quia neque,
              perspiciatis dignissimos eos aperiam sit eveniet ipsam molestiae
              architecto fugit? Corporis quo quis fugiat, iusto veritatis ipsam
              tenetur, amet, ipsa officia ratione ullam esse dolor voluptatum
              harum earum magnam maxime dolorem modi? In ratione, minus
              repudiandae optio modi aut sequi! Esse, laudantium odio
              repudiandae iusto eius harum magnam totam. Praesentium animi ea
              voluptates reiciendis ex dolore error illo fugiat ullam, tempora
              laboriosam doloremque commodi id incidunt ratione asperiores
              nostrum iusto tempore provident inventore soluta! Quidem, sapiente
              alias minima obcaecati nam quaerat officia, animi reprehenderit
              fugiat commodi facere saepe tempore quod quam? Veniam, aperiam
              quisquam reprehenderit laborum velit non nobis laboriosam
              provident architecto. Facilis facere quis cum in aspernatur error.
              Accusantium praesentium quasi, debitis eaque ex id culpa quam
              voluptate assumenda nam incidunt provident sint rerum. Libero iste
              delectus dolor temporibus quos illum sapiente, esse modi
              accusamus. Magni voluptates omnis voluptatibus numquam,
              consequuntur optio iusto natus voluptas rem sunt eos. Velit
              nesciunt beatae, enim veritatis nemo sunt maxime ea delectus quasi
              ratione exercitationem eveniet a, excepturi illo nisi quam earum
              quo tempore. Modi, minus provident laborum corrupti aliquam,
              voluptatum minima eveniet doloremque esse aut maiores. Dolores
              sequi aliquid eveniet cupiditate soluta eligendi animi debitis
              fugit rem? Architecto, aspernatur quas? Quisquam, dignissimos
              corporis voluptas laborum mollitia qui alias dolorem. Enim sit
              maxime voluptatum, voluptatibus quae recusandae consequuntur
              accusamus, fuga eius magnam earum magni distinctio illum! Eum,
              consectetur, qui facere excepturi sed, molestiae accusamus aut
              debitis quam dolorem doloribus! Quod architecto voluptate
              distinctio, numquam molestias repellat consectetur harum aperiam
              et. Fugiat, numquam similique!
            </p>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AllCategory;
