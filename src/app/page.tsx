import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="grid gap-24 grid-cols-2">
      <Link href="/login">
        <Button>login now</Button>
      </Link>
    </div>
  );
};

export default Home;
