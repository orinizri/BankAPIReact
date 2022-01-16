import { useState, useEffect } from 'react';
import axios from 'axios'

const Api = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        const getData = async () => {
            const users = await axios.get('http://localhost:3000/users');
            setData(users.data)
            
        }
        getData()
    },[])

    return (
        <div>
            {
            data.length>0 ? 
            data.map(item => {
                return (
                <div>
                    <span>Client: {item.passport_id}, 
                    Deposits: {item.deposits}, 
                    Credit: {item.credit}</span>
                </div>)
            }) : 
            "API not working"
            }
        </div>
    )
}
export default Api;