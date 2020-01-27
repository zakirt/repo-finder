import { SearchQueryParts } from '../interfaces/SearchQueryParts';

export function constructSearchQuery(queryParts: SearchQueryParts) {
    const {
        q,
        stars,
        license,
        fork
    } = queryParts;
    let query = 'q=';
    if (q) {
        query += `${q}`;
    }
    if (stars) {
        query += `+stars:${stars}`;
    }
    if (license) {
        query += `+license:${license}`;
    }
    if (fork) {
        query += '+fork:true';
    }
    // Get rid of preceding +
    if (query[2] === '+') {
        query = query.replace('+', '');
    }
    return query;
}
