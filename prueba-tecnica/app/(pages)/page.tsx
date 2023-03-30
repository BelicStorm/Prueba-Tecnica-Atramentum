"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './page.module.css'

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <main className={styles.main}>

        {
          session
          ? <>
          <span>{session.user.user.username}</span>
          <input type="button" className={styles.button} value={"LogOut"} onClick={()=>signOut()} />
          </>
          :<input type="button" className={styles.button} value={"LogIn"} onClick={()=>signIn()} />
        }
    </main>
  )
}
