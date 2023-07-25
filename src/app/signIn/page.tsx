import SignInForm from "@/components/views/SignInForm"
import ContextWrapper from "@/global/Context"

const SignIn = () => {
    return (
        <ContextWrapper>
            <SignInForm />
        </ContextWrapper>
    )
}

export default SignIn