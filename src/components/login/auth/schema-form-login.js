import * as Yup from 'yup';

export const validationLogin = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required email address'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const validationNewAccount = Yup.object({
    firstName:Yup.string()
    .required('The First Name its Required '),
    lastName: Yup.string()
    .required('The Last Name its Required '),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required email address'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
    confirpassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords do not match',
  ),
});