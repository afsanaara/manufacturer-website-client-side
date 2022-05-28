import React from "react";

const Brand = () => {
  return (
    <section class="my-20 mx-12">
      <div>
        <h1 class="text-5xl font-bold text-center">
          {" "}
          <span class="text-primary">Brands</span>{" "}
        </h1>
      </div>
      <div class="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ml-20">
        <div class=" flex-col">
          <div class="w-30 text-center  mx-auto">
            <img
              src="https://www.ryanscomputers.com/assets/images/brands/acer-21575699999.webp"
              alt=""
            />
          </div>
        </div>

        <div class="flex-col">
          <div class="w-30 text-center  mx-auto">
                <img src="https://www.ryanscomputers.com/assets/images/brands/asus-21575699746.webp" alt="" />
          </div>
          
        </div>
        <div class=" flex-col">
          <div class="w-25 text-center  mx-auto">
              <img src="https://www.ryanscomputers.com/assets/images/brands/Lenovo_ryanscomputers-41583578601.webp" alt="" />
          </div>
          
        </div>
        <div class=" flex-col">
          <div class="w-30 text-center mx-auto">
              <img src="https://www.ryanscomputers.com/assets/images/brands/Intel_ryanscomputers-31583577726.webp" alt="" />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Brand;
