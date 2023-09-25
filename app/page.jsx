import Image from "next/image";
import GiphyComponent from "@/components/Giphy";

const Home = () => {
  return (
    <section className="w-full flex flex-row flex-b">
      <div className="mt-20 ">
        <Image
          src="/assests/images/icon-text-logo.svg"
          alt="logo"
          width={380}
          height={380}
          className="object-contain"
        ></Image>
        <p className="desc text-center">
          Keep track on running coding contest on different platforms
        </p>
      </div>
      <div>
        <img
          src={`https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2N0cXMyZHIxeGFraDY4ZmtwOTg1ZnI1NTg2NDh5MzBvaGR5NzFmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v2c1tTPc30szC/giphy.gif`}
          alt="Giphy GIF"
        />
      </div>
    </section>
  );
};

export default Home;
