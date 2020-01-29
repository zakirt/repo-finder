import { AxiosInstance } from 'axios';
import { createGithubApiService } from './createGithubApiService';

export class GithubApiService {
    private static apiInstance: AxiosInstance;

    public static getApiInstance(): AxiosInstance {
        if (!GithubApiService.apiInstance) {
            GithubApiService.apiInstance = createGithubApiService();
        }
        return GithubApiService.apiInstance;
    }
}
