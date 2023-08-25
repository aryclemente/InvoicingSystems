"use client";
import React from "react";
import Button from "../Button";

const AddProduct = () => {
  const click = () => {
    console.log("hola mundo");
  };
  return (
    <div className="px-16 py-10 h-full">
      <div className="text-3xl font-semibold pb-4">Nuevo Producto</div>
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <form>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-10 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre
                </label>
              </div>
              <div class="relative z-0 w-full mb-10 group">
                <input
                  type="number"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Precio
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <select className="select select-ghost w-full max-w-xs   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
                  <option disabled selected>
                    Categoría
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
            </div>

            <div className="py-8">
              <Button onClick={click}>Agregar</Button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <div className="avatar">
            <div className="w-72 rounded-xl">
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
