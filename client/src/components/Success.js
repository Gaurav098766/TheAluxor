import React from 'react'

function Success({message}) {
  return (
    <div>
        <div class="alert alert-success" role="alert">
        {message}
</div>
    </div>
  )
}

export default Success