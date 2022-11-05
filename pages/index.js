import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="w-full text-gray-900">
      <h1 className="m-0 w-full pt-20 leading-tight text-52xl text-center font-bold">
        Welcome to my barebone React Tutorial
      </h1>

      <div className="max-w-4xl mx-auto pt-20 py-auto pb-8 flex flex-row justify-around"></div>
    </div>
  </div>
);

export default Home;
