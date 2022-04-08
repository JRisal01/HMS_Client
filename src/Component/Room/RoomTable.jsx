import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './table.css';


function removeRoom(id){
  console.log(id)

  try {
    const response =  axios({
      method: 'delete',
      url: `http://localhost:5000/room/${id}`,
    });
    window.location.reload(true);
  } catch(error) {
    console.log(error)
  }

}

export default function RoomTable() {

    const [row, setRow] = useState(null);

    const url = 'http://localhost:5000/room'

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setRow(response.data);
            })
    }, [url])

    console.log(row)

    return (
        <> 
          < table id = "customers" > 
            <tr>
                <th>Name</th>
                <th>Bed Type</th>
                <th>Room Type</th>
                <th>rate</th>
                <th>status</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {
            row
                ?.map((items, i) => (
                    <tr>
                        <td>{items.name}</td>
                        <td>{items.bedtype}</td>
                        <td>{items.roomtype}</td>
                        <td>{items.rate}</td>
                        <td>{items.status}</td>
                        <td> <button  outline size="sm"  className='btn btn-warning' > Edit </button></td>
                        <td><button  outline size="sm"  className='btn btn-danger' onClick={() => removeRoom(items._id)}>Remove</button></td>                    </tr>
            ))}
          </table>
        </>
    )
}
