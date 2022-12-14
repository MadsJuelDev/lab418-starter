import React from 'react'

const ErrorBlock = ({ errorData }) => {
    if (errorData){
        return (<h3 className='text-red-500'>{errorData}</h3>)
    }else{
        return (<h3 className='text-red-500'>Error data not found</h3>)
    }
}

export default ErrorBlock
