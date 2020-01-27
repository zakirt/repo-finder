import { GithubApiService } from '../services/GithubApiService';

describe('GithubApiService', () => {
    it('should be defined', () => {
        expect(GithubApiService).toBeDefined();
    });

    it('getInstance should be available as static method', () => {
        expect(typeof GithubApiService.getApiInstance).toBe('function');
    });
});
