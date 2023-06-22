
import { DM_Sans } from 'next/font/google'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const DMSans = DM_Sans({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redireciona para a página /login
  }, []);

  return <div>Redirecionando...</div>;
}
