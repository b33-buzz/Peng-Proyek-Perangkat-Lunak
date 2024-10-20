import Carousel from "@/components/ui/Carousel";

const About = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#E3FFE3]">
      {/* Carousel on the left */}
      <div className="w-1/2 flex justify-center items-center">
        <Carousel />
      </div>
      {/* About Us on the right */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to our website! We are dedicated to providing the best
          services and products to our customers. Our team is passionate about
          what we do and we strive to exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
