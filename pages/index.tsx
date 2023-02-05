import Link from 'next/link'
import style from './index.module.scss'
export default function Home() {
  /**
   * construction page
   * need custom font setup
   * need logo
   * need background pattern
   * need copy 
   */
  return (
    <div className={style.parent}>
      <div className={style.content}>
        <img src="logo/logo.webp" style={{maxWidth:'60vw', minWidth: '20vw'}}/>
        <br/>
        We are currently under construction...
        <br />
        See you soon!
        {/* Hello World. <Link href="/about">About</Link> */}
      </div>
    </div>

  )
}
