import React from 'react'

type Props = {
  title:string
}

function TitleHalfBorder({title:string}: Props) {
  return (
    <div className=''>
    <h3 className=" mb-0 pb-2 text-2xl">Smartphones &amp; Tablets</h3>
    <div className='border-b-[3px] border-[#fed700] w-[114px]'></div>
</div>
  )
}

export default TitleHalfBorder