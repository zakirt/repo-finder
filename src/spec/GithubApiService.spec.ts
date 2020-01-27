import axios from 'axios';
import { GithubApiService } from '../services/GithubApiService';

jest.mock('axios');

describe('GithubApiService', () => {
    const API_URL = 'https://api.github.com';
    const API_HEADERS = {
        'Accept': 'application/vnd.github.mercy-preview+json'
    };
    let githubApiService: GithubApiService;

    beforeEach(() => {
        githubApiService = new GithubApiService();
    });

    it('should be defined', () => {
        expect(GithubApiService).toBeDefined();
    });

    describe('get', () => {
        it('should be defined', () => {
            expect(typeof githubApiService.get).toBe('function');
            expect(typeof githubApiService.getApiUrl).toBe('function');
        });

        it('should call axios.get method with GitHub search URL, correct headers, and specified query', () => {
            githubApiService.get('some_uri');
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${API_URL}/some_uri`, {
                headers: API_HEADERS
            });
        });
    });

    describe('getApiUrl', () => {
        it('should return GitHub API URL', () => {
            const apiUrl: string = githubApiService.getApiUrl();
            expect(apiUrl).toBe(API_URL);
        });
    });
});
