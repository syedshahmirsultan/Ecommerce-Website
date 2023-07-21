
import SignupFormComp from "@/components/views/SignUp";
import ContextWrapper from "@/global/Context";



const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignupFormComp />
        </ContextWrapper>
    );
};

export default SignupForm;