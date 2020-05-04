import React from "react";
import CardArtist from "../../card_artist/card_artist";
const styleCard = { wrap: "col-12  col-sm-6 col-lg-3 mb-2 ", inner: "card mr-auto ml-auto" };

class GalleryProfil extends React.Component {

  render() {
    const users = this.props.users
    return (
      // <div className="wrap_cards" style={{marginTop:"100px"}}>

      <div className="wrap_cards" >
        <div className="row m-0 " >

          {users.map((user) => <CardArtist styleCard={styleCard} user={user} key={user.id} dataAPI={this.props.dataAPI}/>)}
         

        </div>
      </div>

    );
  }
}

export default GalleryProfil