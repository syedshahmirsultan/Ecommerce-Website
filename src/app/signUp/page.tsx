import ContextWrapper from "@/global/Context";
import SignUpFormComp from '../../components/views/SignInForm/SignUp';


const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignUpFormComp/>
        </ContextWrapper>
    );
};

export default SignupForm;