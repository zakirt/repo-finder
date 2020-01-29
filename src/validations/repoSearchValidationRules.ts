import { string, object } from 'yup';

export const repoSearchValidationRules = object().shape({
    query: string()
        .required('Query is required')
        .matches(/^[a-z0-9\s]+$/i, {
            message: 'Alpha-numeric characters and spaces only',
            excludeEmptyString: true
        }),
    stars: string()
        .matches(/^(([0-9]+)|([0-9]+[.]{2}[0-9]+)|([><]{1}=?[0-9]+))$/, {
            message: 'Format must be N, N..N, >N, <N, >=N, <=N',
            excludeEmptyString: true
        }),
});
