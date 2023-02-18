
import YoutubeSVG from "./icons/YoutubeSVG";

function Login() {
  return (
    <div className=" w-3/6 flex items-center justify-center ">
      <div>
        <p className=" text-center font-extrabold text-2xl mr-5" >Login to your youtube</p>
      </div>
      <br />
      <div className="  cursor-pointer">
        <YoutubeSVG />
      </div>
    </div>
  );
}

export default Login;
