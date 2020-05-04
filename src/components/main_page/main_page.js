import React, { useEffect, useState } from "react";
import CaruselMainPage from "./carousel_main_page/carusel_main_page"
import GalleryMainPage from "./gallery_main_page/gallery_main_page";
import Presentation from "./presentation_main_page/presentation_main_page";
import { getAllArtist } from "../../back_end/api/api_action"
import Loading from "../loading/loading";

function useFetch(){
  const [users, setUsers] = useState("");

  const importUsers = async () => {
    const users = await getAllArtist();
     await setTimeout(function () { setUsers(users) }, 1000);
  }
  useEffect(()=>{  importUsers()},[])
  return users
}

function MainPage({dataAPI}) {
  const users = useFetch()
  return (
    <div>
      {!users ? <Loading/> :
        <div className={""} style={{ minHeight: "calc(100vh - 255px)" ,marginTop:"3.5rem"}} >
          <CaruselMainPage />
          <GalleryMainPage users={users.data.result} dataAPI={dataAPI}/>
          <Presentation ImagePosition="right" />
          <div className="container mt-5 mb-5">
            <hr className="featurette-divider why?"></hr>
          </div>
          <Presentation ImagePosition="left" />
        </div>}
    </div>
  )
}
export default MainPage;