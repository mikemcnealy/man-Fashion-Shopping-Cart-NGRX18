import { item } from '../interfaces/item';
import {createReducer,on} from '@ngrx/store';
import {addItem,removeItem} from '../actions/cart.action';
import { cart } from '../interfaces/cart';
export const initialItem:item ={
  count:0,
  item:[]
};

export const initialCart:cart ={
  userID:0,
  count:0,
  Item:[]
};

export const reducer =createReducer(initialCart,
  on(addItem,state=>({...state,count:state.count -1})),
  on(addItem,state=>({...state,count:state.count +1}))
)
