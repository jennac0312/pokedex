import React from 'react'

const New = () => {
  return (
    <div>
        <h1>Add a Pokemon</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Image: <input type="text" name="img" /><br/>
                Age: <input type="text" name="age" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
            </form>
    </div>
  )
}

export default New
