type ComponentProps = {
  title: string;
  listItems?: string[];
  index: number;
};

const ServiceCard: React.FC<ComponentProps> = ({ index, title, listItems }) => {
  return (
    <div className="space-y-4">
      <span className="font-dm-sans text-sm text-white">{`0${index + 1}`}</span>
      <div className="flex items-center gap-1.5">
        <span className="inline-block h-2 w-2 rounded-full bg-grad"></span>
        <h3 className="font-dm-sans text-base text-white md:text-lg">
          {title}
        </h3>
      </div>

      <ul className="list list-disc pl-4 font-inter text-sm font-extralight text-[#C2C2C2] md:text-base">
        {listItems?.map((list: string) => <li key={list}>{list}</li>)}
      </ul>
    </div>
  );
};

export default ServiceCard;
