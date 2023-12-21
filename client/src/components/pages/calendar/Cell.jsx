import React from 'react'

function Cell({prop}) {
  return (
    <div>Cell
      <div className='cards_item'>
          <aside className="cards_item_pic-wrap" data-category={prop.class}>
          </aside>
      </div>

    </div>
  )
}

export default Cell