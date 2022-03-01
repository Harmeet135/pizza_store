export const itemsadded = (amount) => {
 return(dispatch) =>{
    dispatch({
        type:'deposit',
        payload: amount
    })

}
}

export const itemssub = (amount) => {
 return (dispatch) =>{
    dispatch({
        type:'withdraw',
        payload: amount
    })

}
}
