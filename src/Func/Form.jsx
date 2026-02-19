import React from 'react'
import { useState } from 'react'


function Form() {

  const [formdata, setFormdata] = useState({
    name: "",
    age: ""
  });

  function change(e) {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(formdata);
  }

  return (
    <div>
      <input
        type='text'
        name="name"
        value={formdata.name}
        placeholder='enter your name'
        onChange={change}
      />

      <input
        type='number'
        name="age"
        value={formdata.age}
        placeholder='enter your age'
        onChange={change}
      />

      <h1>
        Hi {formdata.name}, your age is {formdata.age}
      </h1>
      <button onSubmit={handleSubmit}>Save</button>
    </div>
  )
}

export default Form


// import React from 'react'
// import { useState } from 'react'

// function Form() {
//     const[formdata , setFormdata]=useState({name:"",age:""})
//     function change(e){
//         const {name,value}=e.target;
//         // const {age,value1}=e.target;
//         setFormdata({...formdata,[name]:value});
//         // setFormdata({...formdata,[age]:value1});
//     }
//   return (
//     <div>Form
//         <input type='text' value={formdata.name} placeholder='enter your name' onChange={change}>
//         </input>
//         <input type='number' value={formdata.age} placeholder='enter your age' onChange={change}>
//         </input>
//         <h1> hi {formdata.name} your age is {formdata.age} right???</h1>
//     </div>
//   )
// }

// export default Form