import React, { useEffect, useState } from "react";
import { Map, Draggable } from "pigeon-maps";
import Image from "next/image";
import useOrderSummary from "../../hooks/useOrderSummary";
import useCartProducts from "../../hooks/useCartProducts";

const Maps = () => {
  const { orderSummaryDispatch }: { orderSummaryDispatch: any } =
    useOrderSummary();

  const [anchor, setAnchor] = useState<any>([23.745, 90.4099]);
  const [lat, setLat] = useState<any>();
  const [lon, setLon] = useState<any>();
  const [deliveryLocation, setDeliveryLocation] = useState<string | null>(null);

  const a = anchor[0];
  const b = anchor[1];

  const locationFromMap = () => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${a}+${b}&key=d1bd42f6bc564016b8a4733f46d56f43`
    )
      .then((res) => res.json())
      .then((data: any) => setDeliveryLocation(data.results[0].formatted));
  };

  useEffect(() => {
    navigator.geolocation.watchPosition((postion) => {
      setLat(postion.coords.latitude);
      setLon(postion.coords.longitude);
    });
  }, []);
  useEffect(() => {
    locationFromMap();
    orderSummaryDispatch({
      type: "SET_LOCATION_COORDINATES",
      payload: anchor,
    });
  }, [anchor]);

  useEffect(() => {
    orderSummaryDispatch({
      type: "SET_DELIVERY_LOCATION",
      payload: deliveryLocation,
    });
  }, [deliveryLocation]);

  return (
    <div className="mt-10">
      <span className="text-xl font-bold mb-4">
        Change the shipping location by dragging the pin in map
      </span>

      <Map
        width={800}
        height={400}
        defaultCenter={[23.745, 90.4099]}
        defaultZoom={15}
      >
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <Image
            src="/placeholder.png"
            width={30}
            height={20}
            alt="pin image!"
          />
        </Draggable>
      </Map>
      <h2 className="text-xl">
        <b>Delivery Location: </b>
        {deliveryLocation}
      </h2>
    </div>
  );
};

export default Maps;
