"use client";
import React, { useState } from "react";
import products from "../../data/product.json";
/* use client */
const List = () => {
  const [currentProduct, setCurrentProduct] = useState(products);
import product from "../../data/product.json";
import { AiFillPlusCircle } from "react-icons/ai";
/* use client */
const List = () => {
  const [currencyProduct, setCurrencyProduct] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const totalPages = Math.ceil(currencyProduct.length / productsPerPage);

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = currencyProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // console.log(currencyProduct);
  return (
    <div className="p-8 ">
      <div className=" text-end pe-5">
        <button className="btn text-xl">
          <AiFillPlusCircle />
        </button>
      </div>
      {/* // */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <div className="card lg:card-side bg-base-100 ">
            <figure>
              <img src={currentProduct.imagen} alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{currentProduct.name}</h2>
              <p>Precio: {currentProduct.price}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <label className="btn btn-primary" htmlFor="my-modal">
              Cerrar
            </label>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="text-center">Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
<<<<<<< HEAD
            {products.map((product) => (
              <tr>
=======
            {currentProducts.map((product) => (
              <tr key={product.id}>
>>>>>>> e99b3a59ba0affef6aaa98693cfe7c9f7ed3f24b
                <td>
                  <div className="">{product.id}</div>
                </td>
                <td>
                  <div className="flex items-center space-x-14">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.imagen} alt="photo product" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <th>
                  <label
                    htmlFor="my-modal"
                    className="btn"
                    onClick={() => setCurrentProduct(product)}
                  >
                    Detalles
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* listado */}
      <div className="text-center">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`join-item btn ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
