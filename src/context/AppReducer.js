//Reducer basically how we specify the application state changes in response to certain action to our store to our context  //

export default (state, action) => {
  switch (action.type) {
    case 'DELETE TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }
    case 'ADD TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      }
    default:
      return state
  }
}
