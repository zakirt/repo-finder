import axios from 'axios';
import { createGithubApiService } from '../src/services/createGithubApiService';

describe('GithubApiService', () => {

    beforeEach(() => {
        axios.create = <any>jest.fn(() => 'abc');
    });

    it('should be defined', () => {
        expect(typeof createGithubApiService).toBe('function');
    });

    it('should return an instance of axios', () => {
        expect(createGithubApiService()).toEqual('abc');
    });
});
