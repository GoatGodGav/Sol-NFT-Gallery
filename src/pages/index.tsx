import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className="flex min-h-screen bg-black ">
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
