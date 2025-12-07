import { Button } from "@/components/ui/button";
import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
import TargetCursor from "@/components/reactBits/animations/targetCursor/TargetCursor";
import SplashCursor from "@/components/reactBits/animations/splashCursor/SplashCursor";

const DemoPage: React.FC = () => {
  return (
    <div className="flex flex-col border border-yellow-300 h-1000">
      <SplashCursor />
      <div className="flex">
        <div id="window" className="h-300 w-200 bg-red-600">
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
        </div>
        <div id="window" className="h-300 w-200 bg-green-600"></div>
      </div>
      <div className="sticky top-0 ml-auto">
        <GlassSurface width={300} height={40} borderRadius={24} className="p-7">
          <h2 className="cursor-target">Glass Surface Content</h2>
          <Button className="border border-gray-500 bg-transparent hover:bg-transparent text-white hover:text-green-400 cursor-target">
            hello
          </Button>
        </GlassSurface>
      </div>
      <div
        id="root"
        className="grid grid-cols-5 grid-rows-5 place-items-center border-5"
      >
        <div className="row-start-5 rounded-full bg-green-400 h-10 w-10 cursor-target"></div>
        <div className="rounded-full bg-red-400 h-10 w-10 cursor-target"></div>
        <div className="rounded-full bg-purple-400 h-10 w-10 cursor-target"></div>
      </div>
    </div>
  );
};

export default DemoPage;
