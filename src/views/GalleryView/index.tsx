import Image from "next/image";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";

import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import { NftCard } from "./NftCard";
import styles from "./index.module.css";
const walletPublicKey = "";

export const GalleryView: FC = ({ }) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  console.log("nfts", nfts);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWalletToParsePublicKey(value.trim());
  };

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className=" container mx-auto p-4 px-0 ">

      <div className="navbar mb-2  border-b border-white w-full">
        <div className="flex-1 px-2 mx-2">
          <div className="text-3xl font-bold breadcrumbs flex flex-row">

            <p>SOL NFT GALLERY</p>

            <p className="text-sm font-thin text-gray-400 pt-3 pl-2">by
              <a className="hover:text-gray-200" href="https://github.com/GoatGodGav"> @GoatGodGav</a>
            </p>

          </div>
        </div>

        <div className="">
          <WalletMultiButton className="wallet" />
        </div>
      </div>

      <div className={styles.container}>



        <div className="text-center pt-2 bottom-0">
          <div className="hero min-h-16 p-0 pt-10">
            <div className="text-center hero-content flex flex-col w-full">
              <div className="w-full">
                <h1 className="mb-5 text-5xl font-semibold">
                  NFT Gallery on Solana <SolanaLogo />
                </h1>

                <div className="w-full min-w-full">
                  <p className="mb-16 mt-12 font-semibold">
                  An easy way to view yours and others NFTs
                  </p>
                  <div>
                    <div className="form-control mt-8">
                      <label className="input-group input-group-vertical input-group-lg text-white font-semibold">
                        <span>Search a Solana wallet</span>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            placeholder="Enter Wallet Address"
                            className="w-full input input-bordered input-lg"
                            value={walletToParsePublicKey}
                            onChange={onChange}
                            style={{
                              borderRadius:
                                "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)",
                            }}
                          />

                          <SelectAndConnectWalletButton
                            onUseWalletClick={onUseWalletClick}
                          />

                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="my-10 ">

                  {error ? (
                    <div>
                      {(error as any)?.message}
                    </div>) : null}

                  {!error && isLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : (
                    <NftList nfts={nfts} error={error} />
                  )}
                </div>
              </div>


              <div className="flex items-center w-full boarder-t-2  py-3 px-3 md:px-10 justify-between sm:space-x-10 ">
                <div className="font-mono font-medium text-xs text-white pr-3">
                  Created by

                    <a className="hover:text-gray-300" href="https://github.com/GoatGodGav"> @GoatGodGav</a>

                </div>
                <div className="flex gap-3 h-6 ">
                  <a
                    href={`https://twitter.com/GoatGodGav`}

                    rel="noreferrer"
                  >
                    <Image
                      alt="twitter"
                      src="/twitter-brands.svg"
                      height={20}
                      width={20}
                    />
                  </a>

                  <a
                    href={`https://github.com/GoatGodGav`}

                    rel="noreferrer"
                  >
                    <Image
                      alt="github"
                      src="/github-brands.svg"
                      height={20}
                      width={20}
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type NftListProps = {
  nfts: NftTokenAccount[];
  error?: Error;
};

const NftList = ({ nfts, error }: NftListProps) => {
  if (error) {
    <div className="text-center text-2xl pt-16">

    </div>
  }

  if (!nfts?.length) {
    return (
      <div className="text-center text-2xl pt-16">

      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
      {nfts?.map((nft) => (
        <NftCard key={nft.mint} details={nft} onSelect={() => { }} />
      ))}
    </div>
  );
};
