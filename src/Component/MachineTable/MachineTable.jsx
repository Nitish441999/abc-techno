import React from "react";

const MachineTable = () => {
  const machines = [
    {
      description: "CNC Laser Cutting (4KW)",
      model: "FOM2-3015NT",
      make: "AMADA, Japan",
      capacity: "3mtr x 1.5mtr",
      qty: "1no.",
    },
    {
      description: "CNC Laser Cutting",
      model: "Alfa 2415",
      make: "AMADA, Japan",
      capacity: "5mtr x 1.5mtr",
      qty: "1no.",
    },
    {
      description: "CNC Press Brake",
      model: "EHP 150",
      make: "HH, India",
      capacity: "3 mtr x 160 Ton",
      qty: "1no.",
    },
    {
      description: "CNC Machining Centre",
      model: "Minimill",
      make: "HAAS, USA",
      capacity: "500x400x300",
      qty: "1no.",
    },
    {
      description: "CNC Turning Center",
      model: "Nakamura",
      make: "Japan",
      capacity: "Dia150x200",
      qty: "1no.",
    },
    {
      description: "CNC Turning Centre",
      model: "LOKESH",
      make: "India",
      capacity: "Dia.250x300",
      qty: "1no.",
    },
    {
      description: "Surface Grinder",
      model: "----",
      make: "Guru Arjan / Avro",
      capacity: "500x250 mm",
      qty: "1no.",
    },
    {
      description: "Conventional Lathe Machine",
      model: "----",
      make: "Local",
      capacity: "6 FT.",
      qty: "3no.",
    },
    {
      description: "Turret lathe",
      model: "----",
      make: "Local",
      capacity: "6 Head",
      qty: "1no.",
    },
    {
      description: "Drilling Machines",
      model: "----",
      make: "Taiwan & Local",
      capacity: "12 mm",
      qty: "4no.",
    },
    {
      description: "Spot Welding Machine",
      model: "----",
      make: "Indian",
      capacity: "75 KW",
      qty: "1no.",
    },
    {
      description: "MIG Welding Set",
      model: "----",
      make: "Panasonic, Japan",
      capacity: "200 Amp.",
      qty: "2no.",
    },
    {
      description: "MIG Welding Set",
      model: "Tornado",
      make: "Ador Fontech",
      capacity: "250 Amp.",
      qty: "1no.",
    },
    {
      description: "TIG Welding Set",
      model: "Tornado",
      make: "Ador Fontech",
      capacity: "250 Amp.",
      qty: "1no.",
    },
  ];

  return (
    <>
      <section className="p-6 text-gray-800 mt-12 w-[90%] mx-auto">
        <div className="flex justify-center mb-3">
        <div >
        <h2 className="text-3xl font-bold mb-1 relative">
           Machine Inventory
        </h2>
        <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden ">
         <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
        </div>
        </div>
      </div>
      </section>
      <div className="container mx-auto p-4 w-[90%] ">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className=" bg-orange-400 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">Machine Description</th>
                <th className="px-4 py-2 border">Model</th>
                <th className="px-4 py-2 border">Make</th>
                <th className="px-4 py-2 border">Capacity</th>
                <th className="px-4 py-2 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{machine.description}</td>
                  <td className="px-4 py-2 border">{machine.model}</td>
                  <td className="px-4 py-2 border">{machine.make}</td>
                  <td className="px-4 py-2 border">{machine.capacity}</td>
                  <td className="px-4 py-2 border">{machine.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MachineTable;
