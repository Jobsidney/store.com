import React from 'react'

type Props = {}

function Alert({}: Props) {
  return (
    <div  className="bg-[#fed700] py-4 my-6 px-2 border-l-8 border-black/20  " role="alert">
    Returning customer? 
    <a href="#" className="font-semibold px-1" data-toggle="collapse" data-target="#shopCartOne" aria-expanded="false" aria-controls="shopCartOne">Click here to login</a>
</div>
  )
}

export default Alert