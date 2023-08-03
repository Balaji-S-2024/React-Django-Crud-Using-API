import React from "react";

export default function NewEmplyee({handleAddSubmit, handleCancelBtn}) {
    return(
        <>
            <h2>New</h2>
            <form onSubmit={handleAddSubmit}>
                First Name <input type="text" name="fname"/>
                Last Name <input type="text" name="lname"/>
                Department <input type="text" name="dept"/>
                <button type="submit">ADD</button>
                <button onClick={handleCancelBtn}>Cancel</button>
            </form>
        </>
    )
}