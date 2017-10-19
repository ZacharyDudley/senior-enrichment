import React from 'react';

const Page = ({ children }) => {
  return (
    <div id="contentBodyBox" >
      <div id="mainBody">
        { children }
      </div>
    </div>
  )
}

export default Page
