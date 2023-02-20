export const depositMoney=(amount)=>{
return(dispatch)=>{
dispatch({
    type:'deposit',
    payload: amount
})
}

}
export const withdrawMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
        }

}

export const addShoe=(quantity)=>{
    return(dispatch)=>{
        dispatch({
            type:'add',
            payload: quantity
        })

    }
}
export const removeShoe=(quantity)=>{
    return(dispatch)=>{
        dispatch({
            type:'remove',
            payload: quantity
        })

    }
}