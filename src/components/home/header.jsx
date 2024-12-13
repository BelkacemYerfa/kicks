import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";

const imgLink =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=100";

export const Header = () => {
  return (
    <header>
      <h1 className="text-[13.5rem] text-center font-extrabold">
        DO IT <span className="text-blue-500">RIGHT</span>
      </h1>
      <div className=" relative">
        <img
          src={imgLink}
          alt="home"
          className="w-full h-[40rem] object-cover rounded-[4rem]"
        />
        <div className="absolute bottom-10 flex w-full items-end justify-between px-12">
          <Card className="bg-transparent border-0 shadow-none">
            <CardTitle className="text-white text-5xl uppercase">
              Nike Air Max
            </CardTitle>
            <CardDescription className="text-white text-2xl">
              Nike introducing the new air max for <br /> everyone&apos;s
              comfort
            </CardDescription>
            <CardFooter className="mt-4 px-0">
              <Button className="bg-blue-500 hover:bg-blue-600 text-lg h-10">
                Shop Now
              </Button>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-5">
            <SubImage img={imgLink} />
            <SubImage img={imgLink} />
          </div>
        </div>
      </div>
    </header>
  );
};

const SubImage = ({ img }) => {
  return (
    <div className="ring ring-white rounded-2xl">
      <img src={img} alt="home" className="size-40 object-cover rounded-2xl" />
    </div>
  );
};
