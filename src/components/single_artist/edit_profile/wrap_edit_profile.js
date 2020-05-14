import React from "react";
import "./wrap_edit_profile.css"
import EditPersonalData from "./edit_personal_data/edit_personal_data_component";
import EditMusicData from "./edit_music_data/edit_music_data_component";
import validate, { field } from "../../validetor/validetor"

class WrapEditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: "",
            display_name: field({ name: 'display_name', isRequired: true, minLength: 2 }),
            email: field({ name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }),
            password: field({ name: 'password', isRequired: true, minLength: 6 }),
            age: field({ name: 'age', isRequired: true, minLength: 2 }),
            city_id: field({ name: 'city_id', isRequired: true, minLength: 1 }),
            country_id: field({ name: 'country_id', isRequired: true, minLength: 1 }),
            professions: field({ name: 'profession', isRequired: true, minLength: 2 }),
            studio: field({ name: 'studio', isRequired: true, minLength: 1 }),
            genre_id: field({ name: 'genre', isRequired: true, minLength: 1 }),
            sub_genre_id: field({ name: 'sub_genre', isRequired: true, minLength: 1 }),
            booking: field({ name: 'booking', isRequired: true, minLength: 1 }),
            sound_cloud: field({ name: 'sound_cloud', isRequired: true, minLength: 1, pattern: /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/ }),
            you_tube: field({ name: 'you_tube', isRequired: true, minLength: 1, pattern: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/ }),
            main_image: "",
            headline: field({ name: 'headline', isRequired: true, minLength: 1 }),
        }
    }
    componentDidMount = () => {
        // SET ALL STATE BY USER DETAILS
        for (const property in this.state) {
            let value = this.props.user[property];
            this.setState({
                [property]: { ...this.state[property], value }
            });

        }
    }

    changeStatus = (name, value) => {
        this.setState({ [name]: value });
    }

    onchange = ({ target: { name, value } }) => {
        const errors = validate(name, value, this.state[name].validations);
        this.setState({ [name]: { ...this.state[name], value, errors } });
    };

    onChangeAutoComplit = (name, value) => {
        const errors = validate(name, value, this.state[name].validations);
        this.setState({ [name]: { ...this.state[name], value, errors } });
        if (name === "country_id") {
            if (value.length === 0) {
                this.setState({
                    city_id: { ...this.state["city_id"], value: "", errors }
                })
            }
        }
    };
    onFilechange = (image) => { this.setState({ main_image: image }) };


    render() {
        return (
            <div>
                {/* ICON  EDIT*/}
                < div >
                    < button title={`${this.props.title}`} onClick={() => this.changeStatus("formStatus", "open")} className="pencil_edit_button ">
                        <i class=" fas fa-pencil-alt"></i>
                    </button>
                </div>

                {/* PERSONAL DATA */}
                {
                    (this.props.type === "personal_data_form" && this.state.formStatus === "open") &&
                    <EditPersonalData dataAPI={this.props.dataAPI} onchange={this.onchange} onChangeAutoComplit={this.onChangeAutoComplit} state={this.state} changeStatus={this.changeStatus} user={this.props.user} />
                }



                {/* MUSIC DATA */}
                {
                    (this.props.type === "music_data_form" && this.state.formStatus === "open") &&
                    <EditMusicData dataAPI={this.props.dataAPI} onchange={this.onchange} onChangeAutoComplit={this.onChangeAutoComplit} state={this.state} changeStatus={this.changeStatus} user={this.props.user} />
                }


            </div >
        );
    }
}
export default WrapEditProfile;

