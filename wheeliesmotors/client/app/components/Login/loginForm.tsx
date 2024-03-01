"use client"
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useState } from "react";

export default function LoginForm() {
  const { push } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const logUser = await axios.post("http://localhost:3000/api/auth/login", { Email: email, Password: password });

//       localStorage.setItem('userId', logUser.data.UserID);

//       if (logUser.data.Role === "admin") {
//         push("/Admin");
//       } else if (logUser.data.Role === "client") {
//         push("/Login");
//       } else {
//         setError("Invalid role");
//       }
//     } catch (e) {
//       const error = e as AxiosError;
//       setError(error.message);
//     }
//   };

  return (
    <div className='bg-white grid grid-cols-2 gap-96 w-full'>
      <div>
        <img
          className="absolute w-[805px] h-[706px] top-[270px] left-0"
          alt="Dl beatsnoop"
          src="https://i.imgur.com/nxyvDFz.png"
        />
      </div>

      <div className="grid h-screen w-96 mt-20">
        <div className="shadow-xl p-5 rounded-lg border-t-4 border-black">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-cyan-50 text-black font-bold cursor-pointer px-6 py-2 hover:bg-red-500">
              Log In
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <Link href="/Signup">
              <span className="text-sm mt-3 text-center">
                You Don't Have an Account? <span className="underline font-bold font-red-500 hover:">Register Now</span>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
