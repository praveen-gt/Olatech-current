import Link from 'next/link'
import React from 'react'


const FourOhFour = () => {
    return (
        <>
            <div className='dummyTitle flex-col'>
                <h1 className='text-4xl'>404 - Page Not Found</h1>
                <p className='mt-8'>
                    <Link href="/">
                        Go back home
                    </Link>
                </p>
            </div>
        </>
    )
}

export default FourOhFour