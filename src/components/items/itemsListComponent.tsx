import React from 'react';
//import reference to our interface
import { itemInterface } from '../models/items/itemInteface';

export class ItemListComponent extends React.Component {
    items: itemInterface[]
        constructor(props: {
            items: itemInterface[]
        })
        {
            super(props);
        }
        render(): React.ReactNode {
            const { items } = this.props

            return <div>
                <h3>Items:</h3>
                <ul>
                    {
                        items.map((item: itemInterface, index: number) => <li key={index}>{item.name}</li>)
                    }
                </ul>
            </div>
        }
    }