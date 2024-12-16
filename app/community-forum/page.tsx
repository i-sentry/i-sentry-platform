import BannerIllustration from "@/components/BannerIllustration";
import React from "react";

const CommunityForum = () => {
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

      <div className="wrapper py-20"></div>
    </>
  );
};

export default CommunityForum;
