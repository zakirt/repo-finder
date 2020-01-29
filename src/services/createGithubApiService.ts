import axios, { AxiosInstance } from 'axios';

const defaultApiHeaders = {
    'Accept': 'application/vnd.github.mercy-preview+json'
};

export function createGithubApiService(): AxiosInstance {
    const apiService = axios.create({
        baseURL: 'https://api.github.com',
        headers: defaultApiHeaders
    });
    return apiService;
}
