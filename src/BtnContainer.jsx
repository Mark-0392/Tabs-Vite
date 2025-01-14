import { useState } from 'react'

const BtnContainer = ({ tabsData, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {tabsData.map((item, index) => {
        return (
          <button
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            key={item.id}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
