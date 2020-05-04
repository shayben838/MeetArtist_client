import React from "react"
import CardArtist from "../../card_artist/card_artist"
const styleCard = {wrap:"col-lg-4 mb-3",inner:"card ml-auto mr-auto" };

function GalleryMainPage({users,dataAPI}) {
    return (
            <div className="container mt-5 mb-5">
                <div className="row m-0 d-block d-lg-flex   justify-content-lg-between ">
                {users.slice(0,3).map((user)=>  <CardArtist dataAPI={dataAPI} styleCard={styleCard} user={user} key={user.id}/>)}
                {/* <CardArtist styleCard={styleCard} />
                <CardArtist styleCard={styleCard}/>
                <CardArtist styleCard={styleCard}/> */}

                </div>
                <hr className="featurette-divider"></hr>
            </div>
    )
}
export default GalleryMainPage;