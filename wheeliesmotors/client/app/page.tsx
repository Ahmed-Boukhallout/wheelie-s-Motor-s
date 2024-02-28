// pages/index.tsx
import Head from "next/head";
// import TopHeader from './home/TopHeader';
// import Footer from './home/Footer';
import Login from "./components/Login/Login";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>

      <header>{/* <TopHeader /> */}</header>
      <main>
       
        <Login />
      </main>
      <footer>{/* <Footer/> */}</footer>
    </div>
  );
};

export default Home;