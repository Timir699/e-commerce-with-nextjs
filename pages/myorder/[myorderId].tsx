import React, { useEffect, useState } from "react";
import { getOrders } from "../../services/getOrders";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const MyorderDetails = () => {
  const { data, error, isLoading } = useQuery("orders", getOrders);
  const router = useRouter();
  console.log(data);

  const orderDetails = data?.find(
    (orderDetails: any) => orderDetails.id === router.query.myorderId
  );
  console.log(orderDetails);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
        <div>
          <h1 className="text-2xl font-semibold leading-6 text-gray-800">
            Details of order Id {orderDetails?.id}
          </h1>
        </div>
        <div className="flex mt-7 flex-col items-end w-full space-y-6">
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Email:</b>
              {orderDetails?.userInfo?.userEmail}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Shipping Address:</b> {orderDetails?.deliveryLocation}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Payment Method:</b> {orderDetails?.paymentMethod}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-lg leading-4 text-gray-600">
              <b>Payment Information: </b> {orderDetails?.paymentInfromation}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="text-lg leading-4 text-gray-600">
              <b>Ordered Products</b>
              <div className="flex justify-between w-full mt-5">
                <p className="w-1/2">Title</p>
                <p className="ml-10">price</p>
                <p>quantity</p>
                <p>total price</p>
              </div>
              {orderDetails?.orderedProducts?.map((product: any) => (
                <div
                  key={product.id}
                  className="flex justify-between w-full mt-5"
                >
                  <p className="w-1/2">{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.qty}</p>
                  <p>{product.qty * product.price}</p>
                </div>
              ))}
              {/* <b>Payment Information: </b> {orderSummary?.paymentInfromation} */}
            </div>
          </div>
        </div>
        <p className="text-2xl font-bold mt-5">
          Total : ${orderDetails?.totalAmount}
        </p>
      </div>
    </div>
  );
};

export default MyorderDetails;
