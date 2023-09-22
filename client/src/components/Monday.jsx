import React from 'react'
import { useEffect, useState } from 'react'


function Monday() {
    const [yogaClasses, setYogaClasses] = useState([])
    useEffect(()=> {
      fetch("/api/yogaclasses")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setYogaClasses(data[0])
      })
      }, [])

  return (
    <div>
    {yogaClasses.map((val, key) => {
        return (
    <tbody>
      {/* row 1 */}
      <tr key={key} className='display: flex flex-row justify-center' style={{width:"100%"}}>
        <td className='flex-1'>
          <div className='display:flex flex-col justify-items-center'>
              <div className="font-bold flex-1">{val.start_time}</div>
              <div className="text-sm opacity-50 flex-1">{val.duration}</div>
              <div className="text-sm opacity-50 flex-1">Denver</div>
          </div>
        </td>

        {/* <td className='flex-1'>
          <div>
              <div className="text-sm opacity-50 flex-1">Denver</div>
          </div>
        </td> */}
        
        <td className='flex-1'>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-circle w-16 h-16">
                <img src={val.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{val.className}</div>
              <div className="text-sm opacity-50">{val.teacher}</div>
              <div className="text-sm opacity-50">Studio</div>
            </div>
          </div>
        </td>

        <th className="flex-1 items-center">
          {/* <button className='btn btn-outline btn-wide'>RESERVE</button> */}
          <button className='btn btn-outline btn-wide' onClick={()=>document.getElementById('my_modal_2').showModal()}>Reserve</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </th>
      </tr>


    </tbody>
    )
    })}</div>
  )
}

export default Monday