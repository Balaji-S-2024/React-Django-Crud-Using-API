import axios from "axios";

export function getEmployee() {
    return axios.get('http://127.0.0.1:8000/employee/')
    .then(res => {
        return res.data
    })
}

export function addEmployee(employee) {
    return axios.post('http://127.0.0.1:8000/employee/',
    {
        emp_id: null,
        fname: employee.fname.value,
        lname: employee.lname.value,
        dept: employee.dept.value,

    })
    .then(res => {
        return res.data
    })
}


export function editEmployee(id, employee) {
    return axios.put('http://127.0.0.1:8000/employee/'+id+'/',
    {
        fname: employee.fname.value,
        lname: employee.lname.value,
        dept: employee.dept.value,

    })
    .then(res => {
        return res.data
    })
}

export function deleteEmployee(id) {
    return axios.delete('http://127.0.0.1:8000/employee/'+id+'/')
    .then(res => {
        return res.data
    })
}