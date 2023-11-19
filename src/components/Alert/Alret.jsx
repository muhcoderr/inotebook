import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Alret = () => {
  return (
    <div>
         {[
        'success',
        'danger',
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  )
}

export default Alret
