import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateContactList } from "../Redux/Actions/ContactActions";

function UpdateContact() {

    let [contactData, setContactData] = useState({});

    let pos = useParams();
    console.log(pos);//position

    let allContactData = useSelector((state) => state.contactRoot.contact)

    let dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            updateData();
        }, 1000);
    }, setContactData)

    let updateData = (() => {
        let contactDetails = allContactData.filter((v, i) => {
            if (i == pos.index) {
                return v;
            }
        })
        setContactData(contactDetails[0]);
    })

    let handleChange = ((e) => {
        let { name, value } = e.target
        setContactData({ ...contactData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        localStorage.setItem("contact", JSON.stringify(contactData));
        dispatch(updateContactList(contactData));
        
    }

    console.log(contactData,"data send");



    return (
        <>
            <form method="post" onSubmit={submitData} style={{ display: "flex", justifyContent: "center" }}>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" name="name" value={contactData.name ? contactData.name : ""} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Contact no.</th>
                            <td><input type="number" name="contact" value={contactData.contact ? contactData.contact : ""} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>edit</th>
                            <td><button type="submit">Edit</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default UpdateContact;