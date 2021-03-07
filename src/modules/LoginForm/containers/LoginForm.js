import { withFormik } from "formik";
import LoginForm from "../component/LoginForm";
import validateForm from "../../../utils/validate";

import { userActions } from "../../../redux/actions";
import { useHistory } from 'react-router-dom';
import { fetchUserLogin } from "../../../store/ducks/user/actions";
import { store } from "../../../store/store";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    validate: (values) => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(fetchUserLogin(values));
            // .then((data) => {
            //     console.log('HELLO')
            //     if (data.status === "success") {

            //         props.history.push("/");
            //     }
            //     setSubmitting(false);
            // })
            // .catch(() => {
            //     setSubmitting(false);
            // });
    },
    displayName: "LoginForm"
})(LoginForm);
