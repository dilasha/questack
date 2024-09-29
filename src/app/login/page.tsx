import SigninForm from '@/components/auth-form/signin-form';
import SignupForm from '@/components/auth-form/signup-form';

const LoginPage = () => {
  return (
    <div className="grid gap-24 grid-cols-2">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default LoginPage;
