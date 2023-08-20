import React from 'react'

const Edit = ( { pokemon } ) => {

    let { name, _id, img, age } = pokemon

  return (
    <div>
        <h1>Edit { name }</h1>    
        <form action={`/pokemon/edit/${pokemon._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" placeholder={`${name}`} /><br/>
                Image: <input type="text" name="img" placeholder={`${img}`} /><br/>
                Age: <input type="text" name="age" placeholder={`${age ? age : `Not Specified`}`} /><br/>
            <button>Edit</button>
        </form>
    </div>
  )
}

export default Edit
