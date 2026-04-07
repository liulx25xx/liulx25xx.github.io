import Link from "next/link";

const Copyright = () => {
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-xs sm:text-sm backdrop-blur-lg ">
      <p className=" text-center">
        Designed by
        <Link
          href={"https://github.com/liulx25xx"}
          className=" text-secondary-color-3   font-medium font-idgrotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Lixin Liu
        </Link>
      </p>
      <div></div>
      <p className=" ">&copy; 2026 All rights reserved.</p>
    </div>
  );
};
export default Copyright;
