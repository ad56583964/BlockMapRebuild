import React from 'react'
import { useState } from 'react'
export default function BlockMap(){
    const render_map = [
    {id:1,name:"haha1"},
    {id:2,name:"haha2"},
    {id:3,name:"haha3"}
  ];

    return (
        <div>
             {render_map.map(item => 
                <div> 
                    {item.id} {item.name}
                </div>
            )}
        </div>       
    );
}