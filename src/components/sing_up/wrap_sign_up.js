import React from "react";
import { withRouter } from 'react-router-dom';
import "./sign_up.css"
import { changeStatusByParams } from "./change_status_func"
import validate, { field } from "../validetor/validetor"
import InnerWrapSignUP from "./inner_wrap_sign_up";
import { addUserNoImage } from "../../back_end/api/api_action"

class WrapSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // THE STATUSE NEED TO START IN 1 !
            status: 1,
            display_name: field({ name: 'display_name', isRequired: true, minLength: 2 }),
            email: field({ name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }),
            password: field({ name: 'password', isRequired: true, minLength: 6 }),
            age: field({ name: 'age', isRequired: true, minLength: 2 }),
            city_id: field({ name: 'city_id', isRequired: true, minLength: 1 }),
            country_id: field({ name: 'country_id', isRequired: true, minLength: 1 }),
            profession: field({ name: 'profession', isRequired: true, minLength: 2 }),
            studio: field({ name: 'studio', isRequired: true, minLength: 1 }),
            genre: field({ name: 'genre', isRequired: true, minLength: 1 }),
            sub_genre: field({ name: 'sub_genre', isRequired: true, minLength: 1 }),
            booking: field({ name: 'booking', isRequired: true, minLength: 1 }),
            sound_cloud: field({ name: 'sound_cloud', isRequired: true, minLength: 1, pattern: /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/ }),
            you_tube: field({ name: 'you_tube', isRequired: true, minLength: 1, pattern: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/ }),
            main_image: "",
            headline: field({ name: 'headline', isRequired: true, minLength: 1 }),
        };
    }
    changeStatus = (operation) => {
        let corStatus = changeStatusByParams(this.state.status, operation, this.state);
        this.setState({status: corStatus})}

    onchange = ({ target: { name, value } }) => {
        const errors = validate(name, value, this.state[name].validations);
        this.setState({ [name]: { ...this.state[name], value, errors } });
    };

    onChangeAutoComplit = (name, value) => {
        const errors = validate(name, value, this.state[name].validations);
        this.setState({ [name]: { ...this.state[name], value, errors } });
        if(name === "country_id"){
            if(value.length === 0){
                this.setState({
                    city_id:{ ...this.state["city_id"], value:"", errors } 
                })
            }
        }
    };

    onFilechange = (image) => { this.setState({ main_image: image }) };

    registerAPI = async e => {
        e.preventDefault();
        const result = {};
        const formData = new FormData();
        for (let prop in this.state) {
            if (prop === "status" || prop === "main_image") { continue }
            result[prop] = this.state[prop].value;
            formData.append(prop, this.state[prop].value)
        }
        // result["main_image"] = this.state.main_image
        // formData.append("main_image", this.state.main_image)
        const resultAPI = await addUserNoImage(result);
        // const resultAPI = await addUser(formData);

        if (resultAPI.userId === "false") {
            this.props.history.push('/sign_up_error')
        }
        else {
            this.props.history.push('/log_in')
        }
    };

    render() {
        const formType = this.props.formType;

        return (
            <div>
                {formType === "signUp" &&
                    <div>
                        <form action="/profile" method="post" encType="multipart/form-data">
                            <InnerWrapSignUP onChangeAutoComplit={this.onChangeAutoComplit} dataAPI={this.props.dataAPI} registerAPI={this.registerAPI} onFilechange={this.onFilechange} onchange={this.onchange} state={this.state} changeStatus={this.changeStatus} />
                        </form>
                    </div>
                }

            </div>
        );
    }
}
export default withRouter(WrapSignUp);

