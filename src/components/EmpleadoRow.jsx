import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <div className="rectangulo my-3">
      <div className="row">
        <div className="col-2">
          <EmpleadoAvatar></EmpleadoAvatar>
        </div>
        <div className="col-10 my-3"><h3>Jose Luis</h3>
        <h5>CEO <span className="fondo">Busissnes</span></h5>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
