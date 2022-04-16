import axios from 'axios';
import React, {useEffect,useState} from 'react'


export default function Table() {

    function removeMessage(id){
        console.log(id)
      
        try {
          const response =  axios({
            method: 'delete',
            url: `http://localhost:5000/contactMessage/${id}`,
          });
          window.location.reload(true);
        } catch(error) {
          console.log(error)
        }
      
      }

    const [row, setRow] = useState(null);

    const url = 'http://localhost:5000/contactMessage'

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setRow(response.data);
            })
    }, [url])

    console.log(row)



  return (

    <div class="dashboard-message-table">
        <div>
                    <h1 class="dashboard-message-table-heading">Messages</h1>
                </div>

                <table cellspacing="0" style={{height: "70vh !important"}}>
                    <tr class="dashboard-message-table-title">
                        <td>SN</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Messages</td>
                        <td>Action</td>
                        
                    </tr>

                    {
                row
                ?.map((items, i) => (
                    <tr>
                        <td>{i}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td style={{width: "500px", textAlign: "justify", paddingRight: "15px"}}>{items.messages}</td>
                        <td> <img onClick={() => removeMessage(items._id)} src="images/del.svg" class="dashboard-table-action" /></td>
                    </tr>
                ))}
                </table>
    </div>
  )
}
