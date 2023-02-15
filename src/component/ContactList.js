import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const contactList = useSelector(state => state.contactList)
  return (
    <div>
      <SearchBox />
      <div className='contact-list-item'>
        {contactList.map((item) => <ContactItem item={item} />)}
      </div>
    </div>
  )
}

export default ContactList
