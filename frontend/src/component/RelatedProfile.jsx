import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ProfileItem from './ProfileItem'

const RelatedProfile = ({category}) => {

  const { profiles} = useContext(AppContext)
  const [related,setRelated] = useState([])

  useEffect(()=>{

    if (profiles.length > 0) {

      let profilesCopy = profiles.slice()

      profilesCopy = profilesCopy.filter((item)=> category === item.category)

      setRelated(profilesCopy.slice(0,6))
    }

  },[profiles])

  return (
    <div className=' mt-5'>
      <div className=' text-center text-3xl py-2 mb-6'>
        <h2 className='bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent font-semibold'>RELATED PROFILES</h2>
      </div>

      <div onClick={()=>scrollTo(0,0)} className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item,index)=>(
            <ProfileItem key={index} Id={item._Id} name={item.name} image={item.image} />
          ))
        }
      </div>

    </div>
  )
}

export default RelatedProfile
