import { useSession, signOut } from "next-auth/react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";

import SearchBar from "@/components/SearchBar";

export default function Home() {

  
  const { data: session } = useSession();
  // const { data } = useSession();

  console.log(session)
  // console.log(data)
  return (
    <>
      {!session && (
        <div className=" h-screen flex flex-col justify-center items-center ">
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
        </div>
      )}
      {session && (
        <div>
          <Navbar signOut={signOut} dataSession={session}/>
          <br/>
          <br/>
          <SearchBar />
          
        </div>
      )}
    </>
  );
}
