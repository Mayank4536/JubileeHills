import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({Id,image,name,price}) => {
  return (
    <Link to={`/profile/${Id}`} className=' text-gray-700 cursor-pointer'>
      <div className=' overflow-hidden'>
        <img src={image[0]} className=' hover:scale-110 transition ease-in-out' alt="" />
      </div>
      <p className=' pt-3 pb-1 text-sm'>{name}</p>
    </Link>
  )
}

export default ProfileItem
