import Post from "./post";
import get from "./get";
import Delete from "./delete";

const EndPoints = {
    Auth: {
        login:(data) => Post('/auth/login',data),
        register:(data) =>Post('/auth/register',data),
        verify_otp:(data) =>Post('/auth/verify-otp', data),
        resend_otp:(data) => Post('auth/resend-otp', data),
    }
}
export default EndPoints;