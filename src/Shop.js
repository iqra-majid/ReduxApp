import React from 'react'
import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const  { DepositMoney , WithdrawMoney} = bindActionCreators(actionCreators,dispatch)

  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{ WithdrawMoney(100)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{ DepositMoney(100)}}>+</button>

    </div>
  )
}

export default Shop
