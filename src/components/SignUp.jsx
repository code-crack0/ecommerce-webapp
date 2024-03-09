import { SignUp } from "@clerk/clerk-react";
 
const SignUpPage = () => (
  <div className="sign-up">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignUpPage;
