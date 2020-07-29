import React, { useContext, useEffect } from "react";
import CaruselMainPage from "./carousel_main_page/carusel_main_page";
import GalleryMainPage from "./gallery_main_page/gallery_main_page";
import Presentation from "./presentation_main_page/presentation_main_page";
import Loading from "../loading/loading";
import AuthContext from "../../context/auth/authContext";
import DataContext from "../../context/Data/dataContext";
const MainPage = () => {
  // NEW CONTEXT
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  useEffect(() => {
    authContext.loadUser();
    dataContext.loadData();
    // eslint-disable-next-line
  }, []);
  console.log(dataContext);
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
