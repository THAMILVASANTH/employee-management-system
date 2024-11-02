import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
    {
        name: "S. No",
        selector: (row) => row.sno,
        width: "70px"
    },
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        width: "150px"
    },
    {
        name: "Image",
        selector: (row) => row.profileImage,
        width: "150px"

    },
    {
        name: "Department",
        selector: (row) => row.dept_name,
        width: "200px"

    },
    {
        name: "DOB",
        selector: (row) => row.dob,
        sortable: true,
        width: "150px"
    },
    {
        name: "Action",
        selector: (row) => row.action,
        center: "true"
    },
]

export const fetchDepartments = async () => {
    let departments
    try {
        const response = await axios.get('http://localhost:5000/api/department/', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.data.success) {
            departments = response.data.departments
        }
    } catch (error) {
        if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
        }
    }
    return departments
};

export const EmployeeButtons = ({ _id }) => {
    const navigate = useNavigate()


    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white" onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}>View</button>
            <button className="px-3 py-1 bg-blue-600 text-white" onClick={() => navigate(`/admin-dashboard/employees/edit/${_id}`)}>Edit</button>
            <button className="px-3 py-1 bg-yellow-600 text-white" >Salary</button>
            <button className="px-3 py-1 bg-red-600 text-white" >Leave</button>
        </div>
    )
}