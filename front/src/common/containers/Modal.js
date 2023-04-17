import { useEffect, useState } from "react"

function Modal({children}){
    let [opacity, setOpacity] = useState('0')

    useEffect(() => {
        setOpacity('1.0')
    }, [setOpacity])

    return (
        <>
            <div className='wrapper-shadow' style={{ opacity: opacity, top: '0' }}></div>
            <div className='wrapper-modal' style={{ opacity: opacity }}>{children}</div>
        </>
    )
}

export default Modal