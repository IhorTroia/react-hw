import * as Yup from "yup";

export default Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required title!'),
    body: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required body!'),
});