// import React from 'react';
// import clsx from 'clsx';
 
//  const Cell=({ className, children })=> {
//    return (
//      <div className={clsx("h-30 flex items-center justify-center", className)}>
//         {children}
//      </div>
//    )
//  }
 
//  export default Cell
import React from 'react'

function Cell({prop}) {
  return (
    <div>Cell
      <div className='cards_item'>
          <aside className="cards_item_pic-wrap" data-category={prop.class}>
            {/* <img src={props.src} alt='Adventure Image' className="cards_item_img" /> */}
          </aside>
          {/* <div className='cards_item_info'>
            <h5 className='cards_item_text'>{classes.day}</h5>
            <p className='cards_item_description'>{classes.}</p>
          </div> */}
      </div>

    </div>
  )
}

export default Cell