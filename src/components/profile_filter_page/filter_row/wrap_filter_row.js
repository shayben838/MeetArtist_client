import React from "react";
import "./wrap_filter_row.css"
import InnerFilterRow from "./inner_filter_row";
import { getUsersFilterd } from "../../../back_end/api/api_action";
import { importsMainAPI } from "../../../back_end/api/App_imports_first_mount"
import Loading from "../../loading/loading"
import GalleryProfil from "../gallery_filter/gallery_profils";
import NoResult from "../no_result_component/no_result";

class FilterRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersFilterd: "",
            display_name: { id: "", name: "Name" },
            country: { id: "", name: "Country" },
            city: { id: "", name: "City" },
            genre: { id: "", name: "Genre" },
            sub_genre: { id: "", name: "Sub Genre" },
            profession: { id: "", name: "Profession" },
            minAge: "",
            maxAge: ""
        }
    }

    componentDidMount = () => {
        this.importDataAPI();


    }
    importDataAPI = async () => {
        const data = await importsMainAPI();
        this.setState({
            dataAPI: data,
            dataApiStatus: false,
            usersFilterd: data.users.data.result
        })
    }

    onClicFilter = ({ name, value }) => {
        this.setState({
            [name]: value
        }, function () { this.importFilterdData() })
    }
    importFilterdData = async () => {
        const { country, city, genre, sub_genre, profession, display_name } = this.state;
        const { minAge, maxAge } = this.state;
        const result = await getUsersFilterd({
            display_name: display_name.id,
            country: country.id,
            city: city.id,
            genre: genre.id,
            sub_genre: sub_genre.id,
            profession: profession.id,
            minAge: minAge,
            maxAge: maxAge
        });
        this.setState({
            usersFilterd: result.data.result
        })
    }
    resetFilter = async () => {
        const stateToReset = ["display_name", "country", "city", "genre", "sub_genre", "profession"];
        const stateNameToReset = ["Name", "Country", "City", "Genre", "Sub Genre", "Profession"];
        stateToReset.map((state, index) => this.setState({ [state]: { id: "", name: stateNameToReset[index] } }))
        this.setState({ minAge: "", maxAge: "" })
        const result = await getUsersFilterd({})
        this.setState({ usersFilterd: result.data.result })
    }

    render() {
        let dataAPI = this.props.dataAPI
        return (
            <div>
                {!this.state.usersFilterd ? <Loading /> :
                    <div>
                        <div className=" " >
                            <InnerFilterRow resetFilter={this.resetFilter} onClicFilter={this.onClicFilter} usersFilterd={this.state.usersFilterd} dataAPI={dataAPI} wrapState={this.state} />
                        </div>
                        {this.state.usersFilterd.length > 0 &&
                            <div >
                                <GalleryProfil users={this.state.usersFilterd} dataAPI={dataAPI} />
                            </div>
                        }
                        {this.state.usersFilterd.length === 0 &&
                        <div>
                           <NoResult/>
                        </div>
                        }
                    </div>
                }
            </div>
        )
    }
}
export default FilterRow;