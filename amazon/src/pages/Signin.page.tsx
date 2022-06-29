import AuthLayer from "../features/auth/components/AuthLayer"
import SigninFormComponent from "../features/auth/components/SigninForm.component"

const SigninPage = () => {
    return (
      <AuthLayer>
        <SigninFormComponent />
      </AuthLayer>
    )
  }
  
  export default SigninPage