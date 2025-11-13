import { useEffect } from "react";
import { useRouter } from "next/router";

interface RedirectProps {
  to: string;
}

export default function Redirect({ to }: RedirectProps): null {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [to, router]);

  return null;
}
