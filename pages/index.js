import Login from "@/components/Login";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <div>
        <p className=" text-2xl ">
          Welcome to
          <span className="text-red-500 text-5xl font-semibold">Youtify</span>
        </p>
      </div>
      <br />
      <div>
        <Login />
      </div>
    </div>
  );
}
