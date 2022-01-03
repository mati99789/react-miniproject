import React, {useState} from 'react';
import ContactForm from './ContactFormContainer.styled';
import Button from "../../Atoms/Button/Button";
import SubTitle from "../../Atoms/SubTitle/SubTitle";

const ContactFormContainer = function () {
	const initValues = {
		name: '',
		email: '',
		message: ''
	}
	const [contactValues, setContactValues] = useState(initValues);
	const [isNotValid, setIsNotValid] = useState(true);

	const valuesHandler = (e) => {
		const {name} = e.target;
		const {name: userName, email, message} = contactValues;
		if (userName.length !== 0 && email.length !== 0 && message.length !== 0) {
			setIsNotValid(false);
		}

		setContactValues({
			...contactValues,
			[name]: e.target.value
		})
	}

	const submitHandler = (e) => {
		if (isNotValid) {
			e.preventDefault();
			alert('Please fill fileds')
		}

		alert('Thank you for emailing us')
		setContactValues(initValues);
	}

	return (
		<ContactForm onSubmit={submitHandler}>
			<SubTitle title='Contact'/>
			<div>
				<label htmlFor="name">Name:
					<input type="text" id='name' name='name' value={contactValues.name} onChange={valuesHandler}/>
				</label>
				<label htmlFor="email">Email:
					<input type="email" id='email' name='email' value={contactValues.email} onChange={valuesHandler}/>
				</label>
				<label htmlFor="message">Message:
					<textarea name="message" id="message" value={contactValues.message} cols="30" rows="10"
					          onChange={valuesHandler}/>
				</label>
				<Button btnType='submit'>Send</Button>
				{
					isNotValid && <p style={{color: 'red'}}>Please type all fields</p>
				}
			</div>
		</ContactForm>
	);
};

export default ContactFormContainer;