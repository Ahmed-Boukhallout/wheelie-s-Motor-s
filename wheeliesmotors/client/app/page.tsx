import Head from "next/head";
import Login from "./components/Login/Login";

const Home: React.FC = () => {


  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>

      <main>
        <Login
        />
      </main>
    </div>
  );
};

export default Home;