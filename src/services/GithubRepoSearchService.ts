import axios from 'axios';

export class GithubRepoSearchService {
    private apiUrl: string = 'https://api.github.com/search/repositories';
    private apiHeaders = {
        'Accept': 'application/vnd.github.mercy-preview+json'
    };

    public searchRepos(query: string): void {
        axios.get(`${this.apiUrl}?q=${query}`, {
            headers: this.apiHeaders
        });
    }

    public getApiUrl() {

    }
}
