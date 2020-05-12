import React from "react";
import InputErrors from "../../validetor/input_errors"
import avtar from "../images/default-avatar.jpg"

class StepFour extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: avtar,
            main_image: avtar,

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            main_image: event.target.files[0]
        })
        this.props.onFilechange(event.target.files[0])
    }
    render() {
        return (
            <div>
                {/* <div className="d-flex justify-content-center position-relative">
                    <img alt="profil " className="image_profile_sign_up" src={this.state.file} height="200px" />
                </div>
                <div className="d-flex justify-content-center">
                    <input type="file" name="file" id="file" className="input_image" onChange={this.handleChange} />
                    <label htmlFor="file" className="labal_input_file ">Choose a file</label>
                </div> */}
                
                <div className="position-relative">
                    <input type="text" name="headline" placeholder="Headline" id="Headline" defaultValue={this.props.state.headline.value}
                        className={"form-control mb-1"} onBlur={this.props.onchange} />
                    <span className="must_form_input">*</span>
                    <InputErrors errors={this.props.headline}> </InputErrors>
                </div>
            </div >
        );
    }
}

export default StepFour;