import { useEffect } from "react";
import { useRouter } from 'next/navigation'

function AutoScrollTop() {
    const router = useRouter()
    const pathname = router.usePathname
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return null;
}

export default AutoScrollTop;