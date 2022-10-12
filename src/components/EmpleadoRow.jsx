import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "empleado01",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "empleado02",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "empleado03",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "empleado04",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "empleado05",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "empleado06",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "empleado07",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "empleado08",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "empleado09",
    },
  ];

  return (
    <div>
      {empleados.map((empleado) => (
        <div className="row rectangulo" key={empleado.id}>
          <div className="col-2">
            <EmpleadoAvatar avatar={empleado.pic}></EmpleadoAvatar>
          </div>
          <div className="col-10 my-3">
            <h3>{empleado.fullName}</h3>
            <h5>
              {empleado.title}{" "}
              <span className="fondo">{empleado.department}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmpleadoRow;
