import React from "react";

export default function EditEmployee({handleEditSubmit, selectedEditData}) {
    return(
        <>
            <h2>Edit Employee</h2>
            <form onSubmit={(e) => handleEditSubmit(e, selectedEditData.emp_id)}>
                First Name <input type="text" name="fname" defaultValue={selectedEditData.fname}/>
                Last Name <input type="text" name="lname" defaultValue={selectedEditData.lname}/>
                Department <input type="text" name="dept" defaultValue={selectedEditData.dept}/>
                <button type="submit">EDIT</button>
            </form>
        </>
    )
}