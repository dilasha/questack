import Link from 'next/link';
import { Button } from '../ui/button';
import { createClient } from '@/utils/supabase/server';
import Logo from '../logo';

const NavComponent = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid gap-2 grid-rows-[40px_auto_40px] py-12 justify-between w-[250px] h-screen border">
      <div className="px-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {user != null && (
        <>
          <div className="flex flex-col gap-2 w-[250px]">
            <Link className="hover:bg-muted py-3 px-6" href={`/dashboard`}>
              Dashboard
            </Link>
            <Link className="hover:bg-muted py-2 px-6" href={`/bulletin`}>
              Bulletin
            </Link>
          </div>

          <div className="px-6">
            <form action="/auth/signout" method="POST">
              <Button>Logout</Button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default NavComponent;
