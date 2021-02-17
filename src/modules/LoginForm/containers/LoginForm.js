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
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserLogin(values))
            .then(({ status }) => {
                if (status === "success") {
                    setTimeout(() => {
                        props.history.push("/");
                    }, 100);
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: "LoginForm"
})(LoginForm);
