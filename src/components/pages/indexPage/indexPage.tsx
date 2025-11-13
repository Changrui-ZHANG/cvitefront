import { Button } from "@/components/ui/button";
import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col border border-yellow-300 h-1000">
      <div className="sticky top-0 ml-auto">
        <GlassSurface width={300} height={40} borderRadius={24} className="p-7">
          <h2>Glass Surface Content</h2>
          <Button className="border border-gray-500 bg-transparent hover:bg-transparent text-white hover:text-green-400">
            hello
          </Button>
        </GlassSurface>
      </div>

      <div
        id="root"
        className="grid grid-cols-5 grid-rows-5 place-items-center border-5"
      >
        <div className="row-start-5 rounded-full bg-green-400 h-10 w-10"></div>
        <div className="rounded-full bg-red-400 h-10 w-10"></div>
        <div className="rounded-full bg-purple-400 h-10 w-10"></div>
      </div>
    </div>
  );
};

export default IndexPage;
