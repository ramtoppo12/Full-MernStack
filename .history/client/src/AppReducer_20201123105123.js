export default (state,action) =>{
    switch(action.type){

        case 'GET_TRANSECTION':
            return{
                ...state,
                loading:false,
                transections: action.payload
            }
        case 'DELETE_TRANSECTION':
            return{
                ...state,
                transections: state.transections.filter(transection => transection.id !== action.payload)
            }
            case 'ADD_TRANSECTION':
            return{
                ...state,
                transections: [action.payload,...state.transections]
            }
        default:
            return state;
    }
}