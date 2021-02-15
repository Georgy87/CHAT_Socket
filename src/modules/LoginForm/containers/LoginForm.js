import { withFormik } from "formik";
import LoginForm from "../component/LoginForm";
import validateForm from "../../../utils/validate";
import store from "../../../redux/store";
import { userActions } from "../../../redux/actions";

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
    handleSubmit: (values, { setSubmitting }) => {
        store.dispatch(userActions.fetchUserLogin(values));
        setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "LoginForm",
})(LoginForm);
