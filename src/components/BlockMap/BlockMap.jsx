import React from 'react'
import { useState } from 'react'
import TextSpace from '../../components/TextSpace/TextSpace'
import Draggable from 'react-draggable'; // The default
import styles from './BlockMap.module.css'

import styled, { css } from 'styled-components'

//怎么 styled ?? button 
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `;

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
            <Button className = {styles.create_button}>
                create_button
            </Button>
        </div>       
    );
}