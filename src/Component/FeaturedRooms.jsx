import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Executive Meeting Room",
      capacity: 12,
      price: 100,
      image:
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    },
    {
      id: 2,
      name: "Creative Workshop Room",
      capacity: 8,
      price: 75,
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    },
    {
      id: 3,
      name: "Conference Hall",
      capacity: 25,
      price: 200,
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{room.name}</h3>
              <p className="text-gray-600 mb-2">
                Capacity: {room.capacity} people
              </p>
              <p className="text-gray-800 font-bold mb-4">
                ${room.price} / Slot
              </p>
              <Link
                to={`/rooms/${room.id}`}
                className="inline-block px-4 py-2 bg-green-500 text-white rounded"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
