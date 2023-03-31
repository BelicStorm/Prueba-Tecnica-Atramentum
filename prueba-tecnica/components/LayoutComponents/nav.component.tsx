import { signIn, signOut, useSession } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession();
    return ( 
        <nav>
            {
            session
              ? <>
              <span></span>
              <input type="button"  value={"LogOut"} onClick={()=>signOut()} />
              </>
              :<input type="button" value={"LogIn"} onClick={()=>signIn()} />
          }
        </nav>
     );
}
 
export default Nav;