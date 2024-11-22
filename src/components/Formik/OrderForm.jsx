import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./OrderForm.module.css";
import * as Yup from "yup";
const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    console.log(options);
    options.resetForm();
  };
  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Ей, чого так мало символів? Має бути хоча б 3")
      .max(20)
      .required("Це поле обов'язкове"),
    email: Yup.string().email().required("Це поле обов'язкове"),
    tel: Yup.string().min(9).required("Це поле обов'язкове"),
    range: Yup.number().min(10).max(20),
  });
  const initialValue = {
    username: "",
    tel: "",
    email: "",
    petType: "",
    desire: "",
    agree: false,
    gender: "male",
    range: 0,
  };
  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
        initialValues={initialValue}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Ім'я</span>
            <Field
              className={s.input}
              type="text"
              placeholder="Введіть ім'я"
              name="username"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <span>Телефон</span>
            <Field
              className={s.input}
              type="text"
              placeholder="Введіть телефон"
              name="tel"
            />
            <ErrorMessage name="tel" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Емеил</span>
            <Field
              className={s.input}
              type="text"
              placeholder="Введіть емеил"
              name="email"
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Побажання</span>
            <Field
              className={s.input}
              type="text"
              placeholder="Введіть побажання"
              as="textarea"
              name="desire"
            />
          </label>
          <label className={s.label}>
            <span>Тип улюбленця</span>
            <Field as="select" className={s.input} type="text" name="petType">
              <option disabled value="">
                Оберіть з варіантів
              </option>
              <option value="cat">Кошеня</option>
              <option value="dog">Цуценя</option>
              <option value="bird">Пташеня</option>
              <option value="hamel">Тарантул</option>
            </Field>
          </label>
          <div>
            <label>
              <span>хлопчик</span>
              <Field
                value="male"
                type="radio"
                className={s.input}
                name="gender"
              />
            </label>
            <label>
              <span>дівчинка</span>
              <Field
                value="female"
                type="radio"
                className={s.input}
                name="gender"
              />
            </label>
            <label>
              <span>Вік</span>
              <Field type="range" className={s.input} name="range" />
              <ErrorMessage name="range" component="span" className={s.error} />
            </label>
          </div>
          <label>
            <Field
              className={s.input}
              type="checkbox"
              placeholder="Введіть побажання"
              name="agree"
            />
            <span>Я приймаю всі правила платформи</span>
          </label>

          <button type="submit">Обрати послугу</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
