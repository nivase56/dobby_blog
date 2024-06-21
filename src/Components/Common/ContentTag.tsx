import React from 'react'

const ContentTag = ({content, classNames}: any) => {
  return (
    <div className={`flex ${classNames}`}>
        <button className="px-7 py-3 md:py-2 md:px-5 lg:py-2 lg:px-5 bg-blue-100 shadow-lg rounded-lg text-blue-700 text-xs">
          {content}
        </button>
      </div>
  )
}

export default ContentTag
