import { withFormik } from "formik";
import RegisterForm from "../component/RegisterForm";
import validateForm from "../../../utils/validate";
import { fetchUserRegistration } from "../../../store/ducks/user/actions";
import { store } from "../../../store/store";

export default withFormik({
	enableReinitialize: true,
	mapPropsToValues: () => ({
		email: "",
		fullname: "",
		password: "",
		password_2: "",
	}),
	validate: (values) => {
		let errors = {};
		validateForm({ isAuth: false, values, errors });
		return errors;
	},
	handleSubmit: (values, { setSubmitting }) => {
		store.dispatch(fetchUserRegistration(values));
	},
	displayName: "RegisterForm",
})(RegisterForm);
