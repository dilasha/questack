import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signin } from './actions';

const SigninForm = () => {
  return (
    <div>
      <h2 className="text-2xl mb-5">Login</h2>
      <form action={signin} className="grid gap-4">
        <Input placeholder="Email" type="email" name="email" required />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <div className="flex justify-end">
          <Button variant="outline">Login</Button>
        </div>
      </form>
    </div>
  );
};
export default SigninForm;
