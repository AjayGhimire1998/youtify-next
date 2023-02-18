import Image from "next/image";
import logo from "../public/logo.png";
function Navbar({ signOut, dataSession, data }) {
  return (
    <div className=" flex flex-row justify-around mt-5">
      <div>
        <Image src={logo} alt="logo" className=" h-10 w-auto " />
      </div>
      <div className="flex flex-row justify-around ">
        <div className=" mr-5 mt-2.5 ">
          <p>
            Welcome,{" "}
            {dataSession.user.name.slice(0, dataSession.user.name.indexOf(" "))}
          </p>
        </div>
        <div className="mt-1">
          <button
            className="bg-red-600 text-white p-1.5 rounded-lg hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => signOut()}
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
