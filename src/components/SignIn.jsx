import { SignIn } from "@clerk/clerk-react";
 
const SignInPage = () => (
  <div className="sign-in">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);
 
export default SignInPage;