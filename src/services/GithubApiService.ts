import axios from 'axios';

export class GithubApiService {
    private apiUrl: string = 'https://api.github.com';
    private apiHeaders = {
        'Accept': 'application/vnd.github.mercy-preview+json'
    };

    public get(uri: string) {
        return axios.get(`${this.apiUrl}/${uri}`, {
            headers: this.apiHeaders
        });
    }

    public getApiUrl(): string {
        return this.apiUrl;
    }
}
