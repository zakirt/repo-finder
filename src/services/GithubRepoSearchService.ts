import { GithubApiService } from './GithubApiService';

export class GithubRepoSearchService {
    private apiService: any;

    constructor() {
        this.apiService = GithubApiService.getApiInstance();
    }

    public findRepoByQuery(query: string): any {
        return this.apiService.get(`search/repositories?q=${query}`);
    }
}
