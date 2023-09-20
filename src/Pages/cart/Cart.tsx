import React from 'react'
import ViewCart from '../../components/ViewCart'
import TopCategoryWeek from '../../components/shared/TopCategoryWeek'

type Props = {}

function Cart({}: Props) {
  return (
    <>
      <ViewCart/>
      <TopCategoryWeek/>
    </>
  )
}

export default Cart