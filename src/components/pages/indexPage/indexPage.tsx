import { Button } from "@/components/ui/button";

const IndexPage: React.FC = () => {
  return (
    <div
      id="root"
      className="grid grid-cols-5 grid-rows-5 place-items-center border-5"
    >
      <div className="row-start-5 rounded-full bg-green-400 h-10 w-10"></div>
      <div className="rounded-full bg-red-400 h-10 w-10"></div>
      <div className="rounded-full bg-purple-400 h-10 w-10"></div>
    </div>
  );
};

export default IndexPage;
