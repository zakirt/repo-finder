import { string, object } from 'yup';

export const repoSearchValidationRules = object().shape({
    query: string()
        .required('Query is required')
        .matches(/^[-_a-z0-9\s]+$/i, {
            message: 'Alpha-numeric characters and spaces only',
            excludeEmptyString: true
        }),
    stars: string()
        .required('Stars is required')
        .matches(/^(([0-9]+)|([0-9]+[.]{2}[0-9]+)|([><]{1}=?[0-9]+))$/, {
            message: 'Invalid value for stars',
            excludeEmptyString: true
        }),
});
