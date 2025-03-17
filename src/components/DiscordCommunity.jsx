import DiscordBgImg from "../assets/images/discordCommunity.png";

export default function DiscordCommunity() {
  return (
    <section className="">
      <div className=" max-w-[1230px] w-[90%] mx-auto">
        <div
          className=" flex flex-col items-center justify-center text-white rounded-[32px] border-2 border-[#B6FFB9] border-opacity-5 py-24 p-10 max-md:px-5 bg-[rgba(11,172,118,0.06)]"
          style={{
            backgroundImage: `url(${DiscordBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h4 className="text-[18px] uppercase tracking-wide">
            Your Journey Starts Here
          </h4>
          <h1 className="text-[56px] font-semibold mt-4">
            Join Our Discord Community
          </h1>
          <h2 className="text-[40px] mt-8 font-semibold">Dive Into Eden-FX</h2>
          <p className="mt-4 text-center max-w-[694px] text-[20px]">
            Sign up now to enter into our monthly $100k giveaway! And more
            exclusive giveaways, discounts & promotions.
          </p>

          <div className="mt-6 px-2 py-2 flex items-center bg-white rounded-full overflow-hidden shadow-lg text-sm w-full max-w-[531px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 text-gray-700 outline-none"
            />
            <button className="bg-green-500 text-white text-[16px] px-[58px] py-4 rounded-full font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
