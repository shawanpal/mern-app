import React, {Component} from 'react';

export default class CreateUser extends Component {
/*
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            phone_no: 0
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePhoneNo(e){
        this.setState({
            phone_no: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            phone_no: this.state.phone_no
        }

        window.location = '/';
    }
*/
    render (){
        return (
            <div className="container">
                <p>You are on create user component.</p>
            </div>
        )
    }
}