import Card from "@/components/ui/Card";

const Menu = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center bg-[#E3FFE3]"
      id="menu"
    >
      <div className="w-full flex justify-center pt-24">
        <h1 className="text-4xl font-bold text-[#238B45]">Menu Kami</h1>
      </div>
      {/* Food */}
      <div className="flex flex-wrap justify-center gap-4 pt-10">
        <Card productName="Soto Ayam Lamongan" price="Rp 18.000" />
        <Card productName="Soto Daging Sapi" price="Rp 22.000" />
        <Card productName="Soto Kikil" price="Rp 22.000" />
      </div>
      {/* Drink */}
      <div className="w-full flex justify-center pt-14">
        <h1 className="text-4xl font-bold text-[#238B45]">Minuman</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-10">
        <Card productName="Es Teh" price="Rp 5.000" />
        <Card productName="Es Jeruk" price="Rp 6.000" />
        <Card productName="Es Kelapa Muda" price="Rp 8.000" />
      </div>
    </div>
  );
};

export default Menu;
