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
        // const history = useHistory()
        // history.push("/");

        store
            .dispatch(userActions.fetchUserLogin(values))
            .then(({ status }) => {

                console.log( props );
                if (status === "success") {
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
