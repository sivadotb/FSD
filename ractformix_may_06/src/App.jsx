import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "noname@tatacommunications.com",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        placeholder="Email..."
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default App;
