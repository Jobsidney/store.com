import React from 'react'
import { types } from 'util'

type Props ={
  title:string
}

function TitleHalfBorder({title}: Props) {
  return (
    <div className=''>
    <h3 className=" mb-0 pb-2 text-2xl">{title}</h3>
    <div className='border-b-[3px] border-[#fed700] w-[114px]'></div>
</div>
  )
}

export default TitleHalfBorder