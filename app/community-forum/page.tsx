"use client";

import BannerIllustration from "@/components/BannerIllustration";
import EachElement from "@/components/widgets/list_rendering";
import React, { useEffect } from "react";
import { Tweet } from "react-tweet";
// import { Client } from "twitter-api-sdk";

const ids = [
  "1866014746366955749",
  "1864291490958106780",
  "1861726629808021683",
  "1860990187301421197",
];

const CommunityForum = () => {
  useEffect(() => {
    // async function main() {
    //   const client = new Client(
    //     process.env.NEXT_PUBLIC_X_BEARER_TOKEN as string,
    //   );
    //   const response = await client.tweets.findTweetsById({
    //     ids: ["1864291490958106780"],
    //   });
    //   console.log("response", JSON.stringify(response, null, 2));
    // }
    // main();
  }, []);

  return (
    <>
      <section id="content" className="pb-16 pt-28 contain-paint">
        <BannerIllustration />

        <div className="wrapper relative z-10">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
              Community Forum
            </h1>
            <p className="text-base text-primary-100">
              Discover our latest posts across platforms—your hub for updates,
              stories, and community vibes
            </p>
          </div>
        </div>
      </section>

      <div className="forum wrapper grid max-w-6xl gap-5 pb-20 pt-16 md:grid-cols-2 md:gap-6">
        <EachElement
          of={ids}
          render={(id: string) => (
            <div data-theme="dark">
              <Tweet id={id} />
            </div>
          )}
        />
      </div>
    </>
  );
};

export default CommunityForum;
