import { string, object } from 'yup';

export const repoSearchValidationRules = object().shape({
    query: string()
        .required('Query is required')
        .matches(/^[a-z0-9\s]+$/i, {
            message: 'Alpha-numeric characters and spaces only',
            excludeEmptyString: true
        })
});
