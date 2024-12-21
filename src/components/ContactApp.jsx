import React, { useState } from "react";

const ContactApp = () => {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [allUsers, setAllUsers] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()
        const newUser = [...allUsers, { name, company, phoneNumber, favorite }];

        setAllUsers(newUser)
        setName('')
        setCompany('')
        setPhoneNumber('')
        setFavorite(false)  
        
    }

    const deleteHandler = (i)=>{
    
        const copyElem = [...allUsers]
        copyElem.splice(i,1)
        setAllUsers(copyElem)
      }


  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen">
      {/* Add Contact Form */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Contact</h2>
        <form className="space-y-4" 
              onSubmit={(e)=>{
                submitHandler(e)
            }}>

          <div>
            <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
            value={name}
            onChange={(e)=>
            setName(e.target.value)
            }
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              value={company}
              onChange={(e)=>
                setCompany(e.target.value)
              }
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
            <input
            value={phoneNumber}
            onChange={(e)=>
              setPhoneNumber(e.target.value)
            }
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex items-center">
            <input
            checked={favorite}
            onChange={(e)=>
                setFavorite(e.target.checked)
            }
              type="checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm">Favorite</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Contact
          </button>
        </form>
      </div>




      {/* Contact List */}
      <div className="w-full md:w-2/3">
        <h2 className="text-xl font-bold mb-4">Contact List</h2>
        <div className="space-y-4">
            {allUsers.map((elem,idx)=>{
                return (
                    
                <div key={idx} className="flex flex-col bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{elem.name}</h3>
                        <p className="text-sm text-gray-600">Company: {elem.company}</p>
                        <p className="text-sm text-gray-600">Phone: {elem.phoneNumber}</p>
                      </div>
                     <div className="flex items-center gap-6">
                        {elem.favorite && (
                              <button className="px-4 py-2 bg-yellow-400 rounded-md text-xl text-white font-semibold">
                                Favorite
                              </button>
                            )}
                       <button onClick={()=>deleteHandler(idx)} className="px-4 py-2 bg-red-500 rounded-md text-xl text-white font-semibold" >Delete</button>
                     </div> 
                    </div>
                </div>  
                )
            })}

        </div>
      </div>
    </div>
  );
};

export default ContactApp;
