import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-black to-blue-900">
      <Head>
        <title>Sol NFT Gallery - @GoatGodGav</title>
        <meta
          name="NFT Gallery on Solana"
          content="Use this site to view NFTs in your and others wallets"
        />
      </Head>
      <GalleryView
      />



    </div>

  );
};

export default Home;
