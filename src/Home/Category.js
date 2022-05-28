import React from 'react'

const Category=()=> {
    return (
        <section class="my-20 mx-12">
      <div>
        <h1 class="text-5xl font-bold text-center">
          {" "}
          <span class="text-primary">Categories</span>{" "}
        </h1>
      </div>
      <div class="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ml-20">
        <div class=" flex-col">
          <div class="w-20 text-center  mx-auto">
            <img
              src="https://www.ryanscomputers.com/assets/images/category-icon/svg/GPU.svg"
              alt=""
            />
          </div>
          <div class="text-center font-bold mt-2">
            <p>GPU</p>
          </div>
        </div>

        <div class="flex-col">
          <div class="w-20 text-center  mx-auto">
                <img src="https://www.ryanscomputers.com/assets/images/category-icon/svg/Laptop.svg" alt="" />
          </div>
          <div class="text-center font-bold mt-2">
            <p>LAPTOP</p>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-20 text-center  mx-auto">
              <img src="https://www.ryanscomputers.com/assets/images/category-icon/svg/Monitor.svg" alt="" />
          </div>
          <div class="text-center font-bold mt-2">
            <p>MONITOR</p>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-20 text-center mx-auto">
              <img src="https://www.ryanscomputers.com/assets/images/category-icon/svg/Processor.svg" alt="" />
          </div>
          <div class="text-center font-bold mt-2">
            <p>PROCESSOR</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Category
