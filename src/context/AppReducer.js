export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_AMOUNT":
        return {
          ...state,
          amounts: [...state.amounts, action.payload],
        };
  
      case "EDIT_AMOUNT":
        const updatedAmount = action.payload;
  
        const updatedAmounts = state.amounts.map((amount) => {
          if (amount.id === updatedAmount.id) {
            return updatedAmount;
          }
          return amount;
        });
  
        return {
          ...state,
          amounts: updatedAmounts,
        };
  
      case "REMOVE_AMOUNT":
        return {
          ...state,
          amounts: state.amounts.filter(
            (amount) => amount.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };