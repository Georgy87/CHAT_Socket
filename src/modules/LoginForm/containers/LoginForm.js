import { withFormik } from "formik";
import LoginForm from "../component/LoginForm";
import validateForm from "../../../utils/validate";
import store from "../../../redux/store";
import { userActions } from "../../../redux/actions";
import { useHistory } from 'react-router-dom';

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
            .then((data) => {
                if (data.status === "success") {
                    props.history.push("/");
                }
                setSubmitting(false);
            })
            .catch(() => {
                setSubmitting(false);
            });
    },
    displayName: "LoginForm"
})(LoginForm);
