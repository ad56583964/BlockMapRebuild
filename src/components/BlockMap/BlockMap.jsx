import React from 'react'
import { useState } from 'react'
import TextSpace from '../../components/TextSpace/TextSpace'
import Draggable from 'react-draggable'; // The default
import styles from './BlockMap.module.css'

export default function BlockMap(){
    const render_map = [
    {id:1,name:"haha1"},
    {id:2,name:"haha2"},
    {id:3,name:"haha3"}
  ];

    return (
        <div className = {styles.BlockMap}>
            BlockMap
             {render_map.map(item => 
                <div> 
                    <Draggable>
                        <div>
                            <TextSpace >
                            </TextSpace>
                            {item.id} {item.name}
                        </div>
                    </Draggable>
                </div>
            )}
            <button className = {styles.create_button}>
                create_button
            </button>
        </div>       
    );
}