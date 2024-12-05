import React from "react";
import EachElement from "@/components/widgets/list_rendering";
import Team from "@/public/assets/mentees/Photo - Timilehin Abegunde.png";
import KingIBK from "@/public/images/team/3.png";
import Williams from "@/public/images/team/williams.webp";
import Akanimo from "@/public/images/team/Akanimo.webp";
import Bamgbade from "@/public/images/team/bamgbade.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const CoreTeam = () => {
  return (
    <>
      <section className="wrapper py-16 md:mt-24" id="team">
        <h3 className="mb-16 font-dm-sans text-2xl font-medium text-primary-50 md:text-3xl lg:text-center lg:text-4xl">
          Meet the core innovators behind
          <br className="hidden md:block" /> our success
        </h3>
        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          <EachElement
            of={coreTeam}
            render={(member: MemberProps) => {
              return (
                <>
                  <div className="">
                    <Image
                      src={member.photo}
                      alt="Placeholder"
                      className="mb-4 h-[300px] w-full rounded-xl object-cover object-center xl:h-[400px]"
                    />
                    <h3 className="font-inter text-primary-50">
                      {member.name}
                    </h3>
                    <p className="font-inter capitalize text-primary-200">
                      {member.title}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-3">
                      <Link
                        href=""
                        className="text-secondary-50 duration-300 hover:text-secondary-400"
                      >
                        <BsLinkedin size={18} />
                      </Link>
                      <Link
                        href=""
                        className="text-secondary-50 duration-300 hover:text-secondary-400"
                      >
                        <BsTwitterX size={18} />
                      </Link>
                    </div>
                  </div>
                </>
              );
            }}
          />
        </div>
      </section>
    </>
  );
};

export default CoreTeam;

type MemberProps = {
  photo: string | StaticImport;
  name: string;
  title: string;
};

const coreTeam: MemberProps[] = [
  {
    name: "Idorenyin Williams",
    title: "Co-Founder & Lead Frontend",
    photo: Williams,
  },
  {
    name: "Bamgbade Oluwaseun",
    title: "Co-Founder",
    photo: Bamgbade,
  },
  {
    name: "Ibukun Ayomide-Baafog",
    title: "Co-Founder",
    photo: KingIBK,
  },
  {
    name: "Akanimo Ekong",
    title: "Co-Founder",
    photo: Akanimo,
  },
  {
    name: "Abegunde Timilehin",
    title: "Frontend Co-Lead ",
    photo: Team,
  },
];
