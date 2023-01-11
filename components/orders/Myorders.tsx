import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useUserInfo from "../../hooks/useUserInfo";

const Myorders = ({ orders }: any) => {
  const { userInfo } = useUserInfo();

  const userOrder = orders?.filter(
    (order: any) => order.userInfo.userId === userInfo.userId
  );

  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">My Orders</h2>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Product
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userOrder?.map((singleOrder: any) => (
                    <tr key={singleOrder.id} className="cursor-pointer">
                      {/* <Link href={`/myorder`}> */}
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singleOrder.id}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singleOrder.orderedProducts.length}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singleOrder.paymentMethod}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        ${singleOrder.totalAmount}
                      </td>
                      {/* </Link> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorders;
