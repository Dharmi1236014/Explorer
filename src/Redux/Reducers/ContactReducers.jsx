
import { ADD_CONTACT, DELETE, UPDATE_CONTACT } from "../ActionType";

let getContact = JSON.parse(localStorage.getItem("contact"));

const initialValue = {
    contact: getContact ? getContact : []
}

export const ContactReducers = (state = initialValue, action) => {
    console.log("state", state.contact);
    // {name: 'dharmi ramoliya', contact: '7264223'}


    switch (action.type) {
        case ADD_CONTACT:
            let setContact = [...state.contact, action.payload];
            localStorage.setItem("contact", JSON.stringify(setContact))
            return {
                ...state, contact: [setContact]
            }

        case DELETE:
            let undeletedData = state.contact.filter((v, i) => {
                if (i != action.payload) {
                    return v
                }
            })
            localStorage.setItem("contact", JSON.stringify(undeletedData));
            return { ...state, contact: undeletedData }

        case UPDATE_CONTACT:
            let updatedContactData = state.contact.filter((v, i) => {
                if (i != action.payload) {
                    return v
                }
            })
            localStorage.setItem("contact", JSON.stringify(undeletedData));
            return { ...state, contact: undeletedData }


        default:
            return state;
    }
}