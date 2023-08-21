import Image from "next/image";
import { useState } from "react";

export const AppleWalletButton = () => {
  const handleClick = () => {
    // fetch(`/api/generatePass?signature=0xABCD&owner=0x1234`);
  };

  return (
    <div className="flex justify-center mt-5">
      <a href={`/api/generatePass?signature=0xABCD&owner=0x1234`}>
        <button onClick={handleClick}>
          <Image
            src="/AddToAppleWallet.svg"
            alt="Add to Apple Wallet"
            width={241}
            height={64}
          />
        </button>
      </a>
    </div>
  );
};
