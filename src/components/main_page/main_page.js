import React, { useContext } from "react";
import CaruselMainPage from "./carousel_main_page/carusel_main_page";
import GalleryMainPage from "./gallery_main_page/gallery_main_page";
import Presentation from "./presentation_main_page/presentation_main_page";
import Loading from "../loading/loading";
import DataContext from "../../context/Data/dataContext";
const MainPage = () => {
  // NEW CONTEXT
  const dataContext = useContext(DataContext);
  let users = dataContext.users;
  return (
    <div>
      {!users ? (
        <Loading />
      ) : (
        <div
          className={""}
          style={{ minHeight: "calc(100vh - 255px)", marginTop: "3.5rem" }}
        >
          <CaruselMainPage />
          <GalleryMainPage users={users} />
          <Presentation ImagePosition='right' />
          <div className='container mt-5 mb-5'>
            <hr className='featurette-divider why?'></hr>
          </div>
          <Presentation ImagePosition='left' />
        </div>
      )}
    </div>
  );
};
export default MainPage;
