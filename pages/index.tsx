import Head from 'next/head';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';

import styles from '../public/styles/Login.module.scss';
import LoginBg from '../public/loginBg.jpg';
import { ROUTES } from './api/route';

export default function Home(): React.ReactElement {
  const router: NextRouter = useRouter();

  const onSignIn = () => {
    router.push(ROUTES.BROWSE)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image src={LoginBg} alt='background image' placeholder='blur' layout='fill' className={styles.main__bgImage} />
        <div className={styles.main__card}>
          <h1>
            Netflix
          </h1>
          <div className={styles.main}>
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email"/>
          </div>
          <div className={styles.main}>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password"/>
          </div>

          <div className={styles.button} onClick={onSignIn}>Sign in</div>
        </div>
      </main>
    </div>
  );
}
