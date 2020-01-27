import { GithubApiService } from '../services/GithubApiService';
import { GithubRepoSearchService } from '../services/GithubRepoSearchService';

describe('GithubRepoSearchService', () => {
    let githubRepoSearchService: GithubRepoSearchService;
    const axiosMock = {
        get: jest.fn()
    };

    beforeEach(() => {
        GithubApiService.getApiInstance = jest.fn(() => (axiosMock));
        githubRepoSearchService = new GithubRepoSearchService();
    });

    it('should be defined', () => {
        expect(GithubRepoSearchService).toBeDefined();
    });

    describe('findByQuery', () => {
        it('should be defined', () => {
            expect(typeof githubRepoSearchService.findByQuery).toBe('function');
        });

        it('should call githubApiService.get method with GitHub search URI, and specified query', () => {
            githubRepoSearchService.findByQuery('tetris');
            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith('search/repositories?q=tetris');
        });
    });
});
