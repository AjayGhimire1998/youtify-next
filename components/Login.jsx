import YoutubeSVG from "./icons/YoutubeSVG";
import { useGoogleLogin, hasGrantedAnyScopesGoogle } from "@react-oauth/google";

{
  /* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>; */
}

function Login() {
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="  cursor-pointer"
        onClick={() => {
          login();
        }}
      >
        <YoutubeSVG />
      </div>
      <div>
        <span className=" font-thin italic text-sm">(Click to Login)</span>
      </div>
    </div>
  );
}

export default Login;
