import Link from 'next/link';
import { Button } from '../ui/button';
import { createClient } from '@/utils/supabase/server';

const NavComponent = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <></>
  ) : (
    <div className="flex flex-col py-12 justify-between w-[250px] h-screen border">
      <div className="flex flex-col gap-2">
        <Link className="hover:bg-muted py-2 px-6" href={`/dashboard`}>
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
    </div>
  );
};
export default NavComponent;
