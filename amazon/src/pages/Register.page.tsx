import AuthLayer from "../features/auth/components/AuthLayer"
import RegisterFormComponent from "../features/auth/components/RegisterForm.component"

const RegisterPage = () => {
    return (
      <AuthLayer>
        <RegisterFormComponent />
      </AuthLayer>
    )
  }
  
  export default RegisterPage