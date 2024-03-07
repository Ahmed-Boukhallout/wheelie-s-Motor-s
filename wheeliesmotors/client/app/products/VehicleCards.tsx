import React from 'react';

interface Vehicle {
  id: number;
  type: string;
  subTypes: string;
  imageUrl: string;
  name: string;
}

const VehicleCard: React.FC<Vehicle> = ({ id, type, subTypes, imageUrl, name }) => {
  return (
    <div key={id} className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 ">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h- object-cover mb-4 rounded-lg"
          />
        )}
        <h3 className="text-xl font-medium text-gray-900 text-center">{name}</h3>
     
      </div>
    </div>
  );
};

const VehicleCards: React.FC<{ vehicles: Vehicle[] }> = ({ vehicles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
};

export default VehicleCards;