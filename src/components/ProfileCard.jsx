
import ProfileGirlImg from "../assets/images/girlProfile.png";
import Planet from "../assets/images/planet.webp"

const ProfileCard = () => {
  return (
    <section className="relative py-[180px] z-[2]">
    <div className="rounded-[40px] backdrop-blur-[25px] p-12 flex items-center max-w-[1240px] mx-auto  border border-black bg-[rgba(11,172,118,0.23)]">
      {/* Profile Image */}
      <div className="w-[256px] h-[231px] pt-7 rounded-[24px] bg-[#11996B]">
        <img
          src={ProfileGirlImg}
          alt="Profile"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 text-white  pl-14">
        <div className="flex items-center pb-[72px]">
          <h2 className="text-[32px] font-medium">
            Joelle Kieting <span className="text-green-500 mx-6">●</span>
          </h2>
          <button className="text-gray-300 border-b border-gray-500 hover:text-white text-[32px]">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="mt-4 flex justify-between text-gray-300 text-sm">
          <div className="text-center border-r border-white">
            <span className="font-bold text-[40px] pr-12">17</span>
            <p className="text-gray-400 pt-4 text-[16px] leading-[23px]">Referrals</p>
          </div>

          <div className="text-center border-r border-white">
            <span className="font-bold text-[40px] px-12">42</span>
            <p className="text-gray-400 pt-4 text-[16px] leading-[23px]">Customers</p>
          </div>

          <div className="text-center border-r border-white">
            <span className="font-bold text-[40px] px-12">40</span>
            <p className="text-gray-400 pt-4 text-[16px] leading-[23px]">Clicks</p>
          </div>

          <div className="text-center ">
            <span className="font-bold text-[40px] px-12">$7,261</span>
            <p className="text-gray-400 pt-4 text-[16px] leading-[23px]">Unpaid Earnings</p>
          </div>
        </div>
      </div>
    </div>
      <div className="w-[50%] max-w-[830px] inset-[auto_auto_0_0] absolute z-[-1]
      max-xl:inset-[auto_auto_-10%_0] max-lg:inset-[auto_auto_-6%_0]">
        <img src={Planet} alt="Planet" />
      </div>
    </section>
  );
};

export default ProfileCard;
