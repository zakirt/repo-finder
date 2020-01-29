import { SearchQueryParts } from '../interfaces/SearchQueryParts';

export function constructSearchQuery(queryParts: SearchQueryParts) {
    const {
        keywords,
        stars,
        license,
        fork
    } = queryParts;
    let query = '';
    if (keywords) {
        query += `${keywords.join('+')}`;
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
    if (query[0] === '+') {
        query = query.replace('+', '');
    }
    return query;
}
