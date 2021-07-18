import React ,{useReducer,createContext} from 'react'

import contextReducer from './contextReducer'
const intialState = [];

export const expenseTrackerContext = createContext(intialState);


export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, intialState)

    //Actions
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION',payload:id});
    }
    const addTransaction = (transaction)=>{
        dispatch({type:'ADD_TRANSACTION' , payload:transaction});
    }
    console.log(transactions);
    return (
            // Here it mean that we are sending the state to over all the part of our application 
        <expenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </expenseTrackerContext.Provider>
    )
}