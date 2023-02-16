import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const {contactList, keyword} = useSelector((state) => state)
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if(keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword))
      setFilteredList(list)
    } else {
      setFilteredList(contactList)
    }
  } , [keyword])
  return (
    <div>
      <SearchBox />
      <div className='contact-list-item'>
        num : {filteredList.length}
        {filteredList.map((item) => (<ContactItem item={item} />))}
      </div>
    </div>
  )
}

export default ContactList
