import { Button } from "@/components/ui/button";

const IndexPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue-300 block p-3 border-violet-500 border-4 rounded-md">
        <p className="bg-yellow-500 inline text-[20px]">Hello</p>
      </div>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <div className="rounded-full bg-green-400 h-10 w-10"></div>
        <div className="rounded-full bg-red-400 h-10 w-10"></div>
        <div className="rounded-full bg-purple-400 h-10 w-10"></div>
      </div>
      <Button>Button</Button>
    </>
  );
};

export default IndexPage;
