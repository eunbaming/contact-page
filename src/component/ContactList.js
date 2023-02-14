import React from 'react'
import ContactItem from '../ContactItem'
import SearchBox from '../SearchBox'

const ContactList = () => {
  return (
    <div>
      <SearchBox />
      <div className='contact-list-item'>
        <ContactItem />
      </div>
    </div>
  )
}

export default ContactList
