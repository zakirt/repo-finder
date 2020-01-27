jest.mock('../services/GithubApiService', () => (
    {
        _esModule: true,
        GithubApiService: {
            get() {}
        }
    }
));

import { GithubRepoSearchService } from '../services/GithubRepoSearchService';

describe('GithubRepoSearchService', () => {
    let githubRepoSearchService: GithubRepoSearchService;

    beforeEach(() => {
        githubRepoSearchService = new GithubRepoSearchService();
    });

    it('should be defined', () => {
        expect(GithubRepoSearchService).toBeDefined();
    });

    describe('searchRepos', () => {
        it('should be defined', () => {
            expect(typeof githubRepoSearchService.searchRepos).toBe('function');
        });

        it('should call githubApiService.get method with GitHub search URI, and specified query', () => {
            githubRepoSearchService.searchRepos('tetris');

        });
    });
});
