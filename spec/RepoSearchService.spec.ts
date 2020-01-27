import { GithubApiService } from '../src/services/GithubApiService';
import { RepoSearchService } from '../src/services/RepoSearchService';

describe('RepoSearchService', () => {
    let repoSearchService: RepoSearchService;
    const axiosMock = {
        get: jest.fn()
    };

    beforeEach(() => {
        GithubApiService.getApiInstance = <any>jest.fn(() => (axiosMock));
        repoSearchService = new RepoSearchService();
    });

    it('should be defined', () => {
        expect(RepoSearchService).toBeDefined();
    });

    describe('searchByQuery', () => {
        it('should be defined', () => {
            expect(typeof repoSearchService.searchByquery).toBe('function');
        });

        it('should call apiService.get method with GitHub search URI, and specified query', () => {
            repoSearchService.searchByquery('tetris');
            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith('search/repositories?q=tetris');
        });
    });
});
