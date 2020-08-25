import React, {Component} from 'react'
import './AuthPage.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class AuthPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                email: {
                    value: '',
                    placeholder: 'Почта',
                    type: 'email',
                    valid: false,
                    error: 'Введите корректную почту',
                    touched: false

                },
                nickname: {
                    value: '',
                    placeholder: 'Никнейм',
                    valid: true,
                },
                password: {
                    value: '',
                    placeholder: 'Пароль',
                    type: 'password',
                    valid: false,
                    error: 'Введите пароль длиной не менее 6 символов',
                    touched: false
                },
                retryPassword: {
                    value: '',
                    placeholder: 'Повторите пароль',
                    type: 'password',
                    valid: false,
                    error: 'Пароли не совпадают',
                    touched: false
                }
            },
            formReady: false,
            mode: true
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onBlurHandler = (event) => {
        const { inputs } = this.state
        const { name,value } = event.target
        const input = inputs[name]
        input.value = value
        input.touched = true
        
        if (name === 'email') {
            if (validateEmail(value)) {
                input.valid = true
                
            } else input.valid = false
        }
        
        if (name === 'password') {
            if (value.length > 6 ) {
                input.valid = true
                
            } else input.valid = false
        }

        if (value === '') {
            input.touched = false
        } else input.touched = true

        if (name === 'retryPassword') {
            if (value === inputs['password'].value && value !== '') {
                input.valid = true
            } else input.valid = false
        }

        input.value = value
        inputs[name] = input

        let formValid = true
        Object.keys(inputs).forEach( input => {
            formValid = inputs[input].valid && formValid
        })
        this.setState({inputs, formReady: formValid})
    }
    
    onClickHandler = event => {
        alert('Данные готовы к отправке')
    }

    changeMode = () => {
        const {mode, inputs} = this.state
        Object.keys(inputs).forEach( input => {
            inputs[input].value = ''
        })
        this.setState({inputs, mode: !mode})
        console.log(this.state.inputs)
    }

    renderInputs() {
        const { inputs, mode } = this.state
        return Object.keys(inputs).map((input, index) => {
            const describe = inputs[input]
            if ((!mode && (describe.placeholder === 'Пароль' || describe.placeholder === 'Почта' )) || mode)
            return (
                <Input
                    value = {describe.value}
                    key = {input + index}
                    name = {input}
                    placeholder = {describe.placeholder} 
                    type = {describe.type}
                    onBlur = {this.onBlurHandler}
                    error = {describe.error}
                    valid = {describe.valid}
                    touched = {describe.touched}
                />
            )
        })
    }

    render() {
        const {formReady, mode} = this.state
        return (
            <div className = "AuthPage">
                <h2 onClick={this.changeMode}> {
                    mode 
                    ? "Регистрация"
                    : "Авторизация"
                } </h2>

                <form onSubmit = {this.submitHandler}> 
                    {this.renderInputs()}
                    <Button
                        disabled = {formReady}
                        onClick = {this.onClickHandler}
                    >
                        {
                            mode 
                            ? "Регистрация"
                            : "Авторизация"
                        }
                    </Button>
                </form>
            </div>
        )
    } 
    
}

export default AuthPage