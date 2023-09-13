import React from 'react';

interface Item {
    id: number;
    name: string;
}

interface ItemListComponentProps {
    items: Item[];
}

function ItemListComponent(props: ItemListComponentProps) {
    return (
        <div>
            <h3>Items:</h3>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemListComponent;
