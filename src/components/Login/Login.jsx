import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
          <div>
            <Link to='/principalpage'>
                <Button variant="outline-primary">Click para iniciar</Button>{' '}
            </Link>
        </div>
    </div>
  )
}

export default Login