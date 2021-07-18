// reducer is a fuunction that takes old state and provides us with an action hwich results us ina updated state

const contextReducer = (state,action)=>{
    let transactions;
   switch (action.type) {
       case 'DELETE_TRANSACTION':
            transactions = state.filter((t)=> t.id !== action.payload)
           return transactions;
           
        case 'ADD_TRANSACTION':
            transactions = [action.payload,...state];
           return transactions;
            
       default:
           return transactions;
   }
}




export default contextReducer