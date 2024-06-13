import React from 'react'

const Button = ({children} : {children: string | React.ReactNode}) => {
  return (
    <button>
        {children}
    </button>
  )
}

export default Button