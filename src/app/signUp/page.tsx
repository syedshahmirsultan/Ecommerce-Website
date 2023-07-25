import ContextWrapper from "@/global/Context";
import SignUpFormComp from './../../components/views/SignUp';


const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignUpFormComp/>
        </ContextWrapper>
    );
};

export default SignupForm;