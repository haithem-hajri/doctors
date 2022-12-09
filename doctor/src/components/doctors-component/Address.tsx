import React from "react";

const Address = (props: any) => {
  const { doctor } = props;
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="font-semibold rubik ">Pays </h2>
      <p>{doctor?._doctor?.country}</p>
      <h2 className="font-semibold rubik ">Ville</h2>{" "}
      <p>{doctor?._doctor?.city}</p>
      <h2 className="font-semibold rubik ">Adresse</h2>
      <p>Adresse</p>
    </div>
  );
};

export default Address;
