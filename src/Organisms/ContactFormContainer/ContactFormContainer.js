import React from 'react';
import ContactForm from './ContactFormContainer.styled';
import Button from "../../Atoms/Button/Button";
import SubTitle from "../../Atoms/SubTitle/SubTitle";

const ContactFormContainer = function () {
	return (
		<ContactForm>
			<SubTitle title='Contact' />
			<div>
				<label htmlFor="name">Name:
					<input type="text" id='name'/>
				</label>
				<label htmlFor="email">Email:
					<input type="email" id='email'/>
				</label>
				<label htmlFor="message">Message:
					<textarea name="" id="message" cols="30" rows="10"/>
				</label>
				<Button btnType='submit'>Submit</Button>
			</div>
		</ContactForm>
	);
};

export default ContactFormContainer;