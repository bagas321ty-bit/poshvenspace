import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AppShell } from "@/components/app-shell";
import { LoginScreen } from "@/components/login-screen";
import { usePos } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = usePos((s) => s.hydrated);
  const sessionLoggedIn = usePos((s) => s.sessionLoggedIn);

  useEffect(() => {
    const finish = () => {
      usePos.setState({ hydrated: true });
      usePos.getState().purgeTestData();
    };
    try {
      const result = usePos.persist.rehydrate();
      if (result && typeof (result as Promise<void>).then === "function") {
        void (result as Promise<void>).then(finish).catch(finish);
      } else {
        finish();
      }
    } catch {
      finish();
    }
  }, []);

  return (
    <>
      {!hydrated || !sessionLoggedIn ? <LoginScreen pending={!hydrated} /> : <AppShell />}
      <Toaster theme="dark" position="bottom-right" richColors={false} />
    </>
  );
}