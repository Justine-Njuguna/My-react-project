//example using const of type React.FC

import React from 'react'

function ItemListComponent(props) {
    return (
        <div>
            <h3>Items:</h3>
            <ul>
                {
                    props.items.map((item, index) => <li key={index}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default ItemListComponent