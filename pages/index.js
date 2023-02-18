import { useSession, signOut } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  const { data } = useSession();
  console.log(session);
  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      {!session && (
        <>
          <div>
            <p className=" text-2xl ">
              Welcome to
              <span className="text-red-500 text-5xl font-semibold">
                Youtify 
              </span>
            </p>
          </div>
          <br />
          <div>
            <Login />
          </div>
        </>
      )}
      {session && (
        <>
          <button onClick={() => signOut()}>Sign Out </button>
          <p>{data.accessToken}</p>
          <p>{JSON.stringify(session, null, 2)}</p>
        </>
      )}
    </div>
  );
}
