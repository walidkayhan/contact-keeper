import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Ted Johnson',
				email: 'ted@example.ca',
				phone: '905 765 4321',
				type: 'Personal'
			},
			{
				id: 2,
				name: 'Sarah Smith',
				email: 'sarah@example.ca',
				phone: '905 123 4567',
				type: 'Professional'
			},
			{
				id: 3,
				name: 'Mike Wazowski',
				email: 'mike@example.ca',
				phone: '289 111 4444',
				type: 'Professional'
			}
		]
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
