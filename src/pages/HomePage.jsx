import React from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import {Link} from 'react-router-dom'
const HomePage = () => {
    const {isLoaded, user} = useUser();
  return (
    <>
    {
        isLoaded && user ? (
            <div>
            <h1>Welcome {user.fullName +  ' ' + user.primaryEmailAddress}</h1>
            <UserButton afterSignOutUrl='/sign-in'/>
            </div>
        )
        :(
            <div>
                You are not Signed In.
                <Link to='/sign-in'>
                    Sign In
                </Link>
            </div>
        )


    }
    </>
  )
}

export default HomePage