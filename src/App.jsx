import React, { Suspense, lazy } from 'react'
const PasswordGenerator = lazy(() => import("./passwordGenerator"))

const App = () => {

    return (
        <>
            <Suspense fallback={<div className='loader'></div>}>
                <PasswordGenerator />
            </Suspense>
        </>
    )
}

export default App