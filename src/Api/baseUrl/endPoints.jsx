/* eslint-disable no-unused-vars */
import Post from "./post";
import get from "./get";
import Delete from "./delete";
import Put from "./put";

const EndPoints = {
    Auth: {
        login:(data) => Post('/auth/login',data),
        register:(data) =>Post('/auth/register',data),
        verify_otp:(data) =>Post('/auth/verify-otp', data),
        resend_otp:(data) => Post('auth/resend-otp', data),
        forgot_password:(data) => Post('/auth/reset-pwd-otp', data),
        reset_password:(data) => Post('/auth/update-forgot-pwd', data),
    },
    Settings:{
        update_password:(data) => Put('/auth/update-password', data),
        creator_uploads:(data) => Post("/auth/create-creator-user", data),
        become_creator:(data) => Post('auth/create-creator-user'),
    },
    profile:{
        fetch_user_profile:() =>get("/auth/all-user-details"),
        update_profile:(data) =>Put("auth/update-user-profile", data),
    },
    posts:{
        create_post:(data) => Post("/post/"),
    },
}
export default EndPoints;