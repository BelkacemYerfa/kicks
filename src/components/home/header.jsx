import { Button } from "../ui/button";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";

const imgLink =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=100";

export const Header = () => {
  return (
    <header>
      <h1 className="title">
        DO IT <span className="text-blue-500">RIGHT</span>
      </h1>
      <div className="relative">
        <img src={imgLink} alt="home" className="main-image" />
        <div className="sub-container">
          <Card className="promo-card">
            <CardTitle className="promo-card-title">Nike Air Max</CardTitle>
            <CardDescription className="promo-card-details">
              Nike introducing the new air max for <br /> everyone&apos;s
              comfort
            </CardDescription>
            <CardFooter className="promo-card-footer">
              <Button className="footer-button">Shop Now</Button>
            </CardFooter>
          </Card>
          <div className="sub-images">
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
    <div className="sub-image-container">
      <img src={img} alt="home" className="sub-image" />
    </div>
  );
};
