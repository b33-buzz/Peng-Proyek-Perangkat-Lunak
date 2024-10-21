import Image from "next/image";

interface CardProps {
  imageSrc?: string;
  productName: string;
  price: string;
}

const Card = ({ imageSrc, productName, price }: CardProps) => {
  return (
    <div className="w-64 h-64 p-4 border rounded-lg shadow-md flex flex-col justify-between bg-white relative">
      <Image
        src={imageSrc || "/images/placeholder.png"}
        alt={productName}
        width={256}
        height={256}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between flex-grow p-2">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {productName}
          </h1>
          <p className="text-gray-700 mt-6">{price}</p>
        </div>
      </div>
      <button className="absolute top-0 right-0 border border-gray-400 rounded-xl w-10 h-10 flex items-center justify-center bg-white text-3xl">
        +
      </button>
    </div>
  );
};

export default Card;
