import { Slides, SlidesControls, SlidesIndicators } from "kbs-core";

function Carousel(props: any) {
  return (
    <div>
      <Slides
        img="https://www.apkbooth.com/wp-content/uploads/2019/01/pubg-helmet-guy-art-ia.jpg"
        alt="Pubg"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB-xtKPVpF9FntsHqt5U9uuBmELBfYa4sizfoXQ5EnU1xa-0NfUWocYZ5cSdhiJjXmgo&usqp=CAU"
        alt2="Pubg"
        img3="https://wallpapercave.com/uwp/uwp909893.jpeg"
        alt3="Pubg"
      />
      <br />

      <SlidesControls
        img="https://www.apkbooth.com/wp-content/uploads/2019/01/pubg-helmet-guy-art-ia.jpg"
        alt="Pubg"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB-xtKPVpF9FntsHqt5U9uuBmELBfYa4sizfoXQ5EnU1xa-0NfUWocYZ5cSdhiJjXmgo&usqp=CAU"
        alt2="Pubg"
        img3="https://wallpapercave.com/uwp/uwp909893.jpeg"
        alt3="Pubg"
      />
      <br />
      <SlidesIndicators
        img="https://www.apkbooth.com/wp-content/uploads/2019/01/pubg-helmet-guy-art-ia.jpg"
        alt="Pubg"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB-xtKPVpF9FntsHqt5U9uuBmELBfYa4sizfoXQ5EnU1xa-0NfUWocYZ5cSdhiJjXmgo&usqp=CAU"
        alt2="Pubg"
        img3="https://wallpapercave.com/uwp/uwp909893.jpeg"
        alt3="Pubg"
      />
    </div>
  );
}

export default Carousel;
