// import React, { useContext } from "react";
// import "./wrap_filter_row.css";
// import InnerFilterRow from "./inner_filter_row";
// import { getUsersFilterd } from "../../../back_end/api/api_action";
// import Loading from "../../loading/loading";
// import GalleryProfil from "../gallery_filter/gallery_profils";
// import NoResult from "../no_result_component/no_result";
// // CONTEXT
// import DataContext from "../../../context/Data/dataContext";
// class FilterRow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usersFilterd: "",
//       display_name: { id: "", name: "Name" },
//       country: { id: "", name: "Country" },
//       city: { id: "", name: "City" },
//       genre: { id: "", name: "Genre" },
//       sub_genre: { id: "", name: "Sub Genre" },
//       profession: { id: "", name: "Profession" },
//       minAge: "",
//       maxAge: "",
//     };
//   }

//   componentDidMount = () => {
//     this.importDataAPI();
//   };
//   importDataAPI = () => {
//     const data = this.props.dataAPI;
//     this.setState({
//       dataAPI: data,
//       dataApiStatus: false,
//       usersFilterd: data.users,
//     });
//   };

//   onClicFilter = ({ name, value }) => {
//     this.setState(
//       {
//         [name]: value,
//       },
//       function () {
//         this.importFilterdData();
//       }
//     );
//   };
//   importFilterdData = async () => {
//     const {
//       country,
//       city,
//       genre,
//       sub_genre,
//       profession,
//       display_name,
//     } = this.state;

//     const { minAge, maxAge } = this.state;
//     const result = await getUsersFilterd({
//       display_name: display_name.id,
//       country: country.id,
//       city: city.id,
//       genre: genre.id,
//       sub_genre: sub_genre.id,
//       profession: profession.id,
//       minAge: minAge,
//       maxAge: maxAge,
//     });
//     this.setState({
//       usersFilterd: result.data.result,
//     });
//   };
//   resetFilter = async () => {
//     const stateToReset = [
//       "display_name",
//       "country",
//       "city",
//       "genre",
//       "sub_genre",
//       "profession",
//     ];
//     const stateNameToReset = [
//       "Name",
//       "Country",
//       "City",
//       "Genre",
//       "Sub Genre",
//       "Profession",
//     ];
//     stateToReset.map((state, index) =>
//       this.setState({ [state]: { id: "", name: stateNameToReset[index] } })
//     );
//     this.setState({ minAge: "", maxAge: "" });
//     const result = await getUsersFilterd({});
//     this.setState({ usersFilterd: result.data.result });
//   };

//   render() {
//     let dataAPI = this.props.dataAPI;
//     const dataContext = useContext(DataContext);
//     dataContext.setFilter("display_name", "test");
//     return (
//       <div>
//         {!this.state.usersFilterd ? (
//           <Loading />
//         ) : (
//           <div>
//             <div className=' '>
//               <InnerFilterRow
//                 resetFilter={this.resetFilter}
//                 onClicFilter={this.onClicFilter}
//                 usersFilterd={this.state.usersFilterd}
//                 dataAPI={dataAPI}
//                 wrapState={this.state}
//               />
//             </div>
//             <div className='container m-0  pt-3  pl-3 pl-md-5'>
//               <p className='result_search lead'>
//                 <i className='fas fa-search mr-1'> </i>
//                 {this.state.usersFilterd.length} Results found
//               </p>
//             </div>

//             {this.state.usersFilterd.length > 0 && (
//               <div>
//                 <GalleryProfil
//                   users={this.state.usersFilterd}
//                   dataAPI={dataAPI}
//                 />
//               </div>
//             )}
//             {this.state.usersFilterd.length === 0 && (
//               <div>
//                 <NoResult />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default FilterRow;
