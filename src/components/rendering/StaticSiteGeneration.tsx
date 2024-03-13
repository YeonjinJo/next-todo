import Image from "next/image";
import React from "react";

const StaticSiteGeneration = async () => {
  const response = await fetch(`http://localhost:3000/api/company`, {
    cache: "force-cache",
  });
  const { companyInfo } = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-extrabold">About Yeonjin</h3>
      <p>Name: {companyInfo.name}</p>
      <p>{companyInfo.description}</p>
      <Image
        src={companyInfo.profile}
        alt="introduction"
        width={800}
        height={600}
      />
    </div>
  );
};

export default StaticSiteGeneration;
