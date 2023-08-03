import React, { useEffect, useState } from 'react';
import { getEmployee, addEmployee, editEmployee,deleteEmployee } from '../services/ApiServices';
import NewEmplyee from './NewEmployee';
import EditEmployee from './EditEmployee'; 

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const employeesArray = Object.entries(employees).map(([id, employee]) => ({id,...employee}));

    const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
    const [showEditEmployeeForm, setShowEditEmployeeForm] = useState(false);
    const [selectedEditData, setSelectedEditData] = useState();

    useEffect(() =>{
        let mount = true;
        getEmployee()
        .then(res =>{
            setEmployees(res)
            console.log("res - ", res);
            return() => mount = false
        }
        )
    }, [])

    const handleAddSubmit =(e) =>{
        addEmployee(e.target)
        .then(res => {
            setEmployees(res)
        })
    }
    const handleEditBtn = (employee) => {
        setSelectedEditData(employee)
        console.log(employee);
        setShowEditEmployeeForm(true) 
        setShowAddEmployeeForm(false)
    }
    const handleEditSubmit = (e, id) => {
        editEmployee(id, e.target)
        .then(res => {
            setEmployees(res)
        })
    }
    const handleDeleteBtn = (id) => {
        deleteEmployee(id)
        .then(res => {
            setEmployees(employees.filter(emp => emp.emp_id !== id))
        })
    }
    const handleCancelBtn = () => {
        setShowAddEmployeeForm(false)
    }



    return(
        <>
            <h3>Employee List</h3>
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Department</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>{console.log('typeof'+typeof employees)}
                {}
                    {
                    employeesArray.map(employee =>{
                        return <tr key={employee.emp_id}>
                        <td>{employee.fname}</td>
                        <td>{employee.lname}</td>
                        <td>{employee.dept}</td>
                        <td><button onClick={() => handleEditBtn(employee)}>Edit</button> <button onClick={() => handleDeleteBtn(employee.emp_id)}>Delete</button></td>
                                </tr>
                    })}
                </tbody>
            </table>
            <button onClick={()=>{setShowAddEmployeeForm(true);setShowEditEmployeeForm(false)}}>New Employee</button>
            {showAddEmployeeForm && <NewEmplyee handleAddSubmit = {handleAddSubmit} handleCancelBtn={handleCancelBtn}/>}
            {showEditEmployeeForm && <EditEmployee handleEditSubmit = {handleEditSubmit} selectedEditData = {selectedEditData}/>}
        </>
    )
}