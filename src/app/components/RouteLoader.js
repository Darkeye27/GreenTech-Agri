'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from './spinner';


export default function RouteLoader() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events?.on('routeChangeStart', handleStart);
    router.events?.on('routeChangeComplete', handleStop);
    router.events?.on('routeChangeError', handleStop);

    return () => {
      router.events?.off('routeChangeStart', handleStart);
      router.events?.off('routeChangeComplete', handleStop);
      router.events?.off('routeChangeError', handleStop);
    };
  }, [router]);

  // Trigger loader only during navigation (not first load)
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return loading ? <Spinner /> : null;
}
