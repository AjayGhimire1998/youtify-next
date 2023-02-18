import YoutubeSVG from "./icons/YoutubeSVG";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="  cursor-pointer">
        <YoutubeSVG />
      </div>
      <div>
        <span className=" font-thin italic text-sm" >(Click to Login)</span>
      </div>
    </div>
  );
}

export default Login;
