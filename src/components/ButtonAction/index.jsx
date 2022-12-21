import React from 'react';

const ButtonAction = (props) => {
    return (
        <>
        { props.color === 'blue'
            ? <button onClick={props.action} title={props.title} disabled={props.disabled} className='bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300'>{props.children}</button>
            : props.color === 'green'
            ? <button onClick={props.action} title={props.title} className='bg-green-600 hover:bg-green-700 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'red'
            ? <button onClick={props.action} title={props.title} className='bg-red-600 hover:bg-red-700 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'red-outline'
            ? <button onClick={props.action} title={props.title} className='text-red-600 border border-red-600 bg-white hover:bg-red-700 hover:text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'green-outline'
            ? <button onClick={props.action} title={props.title} className='text-green-500 border border-green-500 bg-white hover:bg-green-600 hover:text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'black-outline'
            ? <button onClick={props.action} title={props.title} className='text-black border border-black bg-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : <></>
        }
        </>
    )
}

export default ButtonAction ;