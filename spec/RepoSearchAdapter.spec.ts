import { RepoSearchResultAdapter } from '../src/utils/RepoSearchResultAdapter';
import { RepoSearchResultModel } from '../src/models/RepoSearchResultModel';

describe('RepoSearchResultAdapter', () => {
    let dto: any;

    beforeEach(() => {
        dto = {
            full_name: 'test_repo',
            owner: {
                login: 'tester'
            },
            html_url: 'https://github.com/tester',
            description: 'this is a test repo',
            license: {
                name: 'MIT'
            },
            stargazers_count: 373,
            fork: false
        };
    });

    it('should be defined', () => {
        expect(typeof RepoSearchResultAdapter).toBeDefined();
    });

    it('should construct repo search result model from DTO', () => {
        const adapter = new RepoSearchResultAdapter(dto);
        const model: RepoSearchResultModel = adapter.toModel();
        expect(model).toEqual({
            name: 'test_repo',
            owner: 'tester',
            url: 'https://github.com/tester',
            description: 'this is a test repo',
            license: 'MIT',
            stars: 373,
            forked: false
        });
    });
});
