import EachElement from "@/components/widgets/list_rendering";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Williams from "@/public/images/team/williams.webp";
import Bamgbade from "@/public/images/team/Bamgbade.jpg";
import Akanimo from "@/public/images/team/Akanimo.webp";

const CoreTeam = () => {
  return (
    <>
      <section className="wrapper py-16 md:mt-24" id="team">
        <h3 className="mb-16 text-center font-dm-sans text-2xl font-medium text-primary-50 md:text-3xl lg:text-4xl">
          Meet the core innovators behind
          <br className="hidden md:block" /> our success
        </h3>
        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
          <EachElement
            of={coreTeam}
            render={(member: MemberProps) => {
              return (
                <>
                  <div className="flex flex-wrap items-start justify-between">
                    <Image
                      src={member.photo}
                      width={500}
                      height={500}
                      alt="Placeholder"
                      className="mb-4 h-[300px] w-full grow rounded-xl object-cover object-center xl:h-[300px]"
                    />
                    <div>
                      <h3 className="font-inter text-primary-50">
                        {member.name}
                      </h3>
                      <p className="font-inter capitalize text-primary-200">
                        {member.title}
                      </p>
                    </div>
                    <div className="mt-2 flex w-full items-center gap-3">
                      <Link
                        href={member.url || ""}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-50/10 bg-grad-alt text-white duration-300 hover:border-transparent hover:bg-grad"
                      >
                        <BsLinkedin size={16} />
                      </Link>
                      <Link
                        href="https://x.com"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-50/10 bg-grad-alt text-white duration-300 hover:border-transparent hover:bg-grad"
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
  url?: string;
};

const coreTeam: MemberProps[] = [
  {
    name: "Idorenyin Williams",
    title: "Lead Partner",
    photo: Williams,
  },
  {
    name: "Bamgbade Oluwaseun",
    title: "Programs Director",
    photo: Bamgbade,
  },
  {
    name: "Akanimo Ekong",
    title: "Mobile & Opertaions",
    photo: Akanimo,
  },
  // {
  //   name: "Abegunde Timilehin",
  //   title: "Software Engineer",
  //   photo: Team,
  // },
];

// const SkeletonLoader = () => {
//   return (
//     <div className="flex flex-wrap items-start justify-between">
//       <Skeleton className="mb-4 h-[300px] w-full grow rounded-xl bg-primary-100/10 xl:h-[300px]" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[180px] rounded-lg bg-primary-100/10 [--radius:8px]" />
//         <Skeleton className="h-2 w-[120px] rounded-lg bg-primary-100/10 [--radius:8px]" />
//       </div>
//       <div className="inline-flex items-center gap-3">
//         <Skeleton className="inline-block h-9 w-9 rounded-full bg-primary-100/10" />
//         <Skeleton className="inline-block h-9 w-9 rounded-full bg-primary-100/10" />
//       </div>
//     </div>
//   );
// };
