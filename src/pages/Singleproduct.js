import React from 'react'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {actionCreator} from '../redux/index'
import { bindActionCreators } from 'redux';
import {  useSelector} from 'react-redux'

const Singleproduct = () => {
    
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreator,dispatch);
  const amount = useSelector(state => state.amount)
     
        let history = useHistory();

    return (
        <div className="container mx-auto mt-12  max-w-screen-xl">
            <button className="mb-12 font-bold"onClick={ () => { history.goBack() } }>Back</button>
            <div className="flex">
                <img src= '/img/peproni.png' alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">Havana Special</h1>
                    <div className="text-md">small</div>
                    <div className="font-bold mt-2">₹ 100</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4" onClick={()=> {actions.itemsadded(1)}}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct
