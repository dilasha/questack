import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signup } from './actions';

const SignupForm = () => {
  return (
    <div>
      <h2 className="text-2xl mb-5">Sign up</h2>
      <form action={signup} className="grid gap-4">
        <Input placeholder="Email" name="email" required />
        <Input placeholder="Full name" name="fullname" required />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <div className="flex justify-end">
          <Button>Sign up</Button>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
