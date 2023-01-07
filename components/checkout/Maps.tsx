import React, { useEffect, useState } from "react";
import { Map, Draggable } from "pigeon-maps";
import placeholder from "../../resource/placeholder.png";
import Image from "next/image";

const Maps = () => {
  const [anchor, setAnchor] = useState<any>([23.745, 90.4099]);

  const [lat, setLat] = useState<any>();
  const [lon, setLon] = useState<any>();
  const [deliveryLocation, setDeliveryLocation] = useState<any>();

  const a = anchor[0];
  const b = anchor[1];

  console.log(a, b);

  const setLocationFromMap = () => {
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
    setLocationFromMap();
  }, [anchor]);

  return (
    <div className="mt-10">
      Change the shipping location by dragging the pin in map
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
