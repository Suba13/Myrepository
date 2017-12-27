import React from 'react';
import './home.css';

export const Print= (a) =>{
    return(
        <div>
    <h1 class="pro">new react program{a.id} {a.children}</h1>
    <p>{a.children}</p>
    </div>
);
};

export default () =>{
    return(<h2>hii everyone</h2>);
};

 const Add= () =>{
    return(<h1>add function 2+3=5</h1>);
};
export {Add};

export const Result=(a)=>{
return(
<h1>{a.name} {a.age}</h1>
);
;}

export let Value=[{
    name:"suba",
    age:20
},
{name:"raj",
age:19}];

