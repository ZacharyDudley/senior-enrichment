import React from 'react';
import HeadBody from './HeadBody'

const Page = ({ children }) => {
  return (
    <div id="contentBodyBox" >
      <HeadBody />
      <div id="mainBody">
        { children }
      </div>
    </div>
  )
}

export default Page
