import { getServerSession } from 'next-auth';
import LoginForm from "./loginForm"
import { redirect } from 'next/navigation';
import Header from "../Link/Header"

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect('/Login');
  }
  return(
  <div>
    <Header/>
<LoginForm/>
  </div>
  )
}
