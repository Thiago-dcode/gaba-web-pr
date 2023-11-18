import React from 'react'

export default function Loading({ size = 2 }: { size?: number }) {
    return (
        <div><span style={{
            width: `${size}rem`,
            height: `${size}rem`
        }} className="loader"></span></div>
    )
}
