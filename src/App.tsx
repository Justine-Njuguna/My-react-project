import React from 'react';
import { ItemListComponent } from './components/items/itemsListComponent'; // Changed import path

const items = [
    {
        id: 1,
        name: 'Item 1'
    },
    {
        id: 2,
        name: 'Item 2'

    },
    {
        id: 3,
        name: 'Item 3'
    }
]

function App() {
    return (
        <div>
            <ItemListComponent items={items} /> {/* Changed component name */}
        </div>
    )
}

export default App;
