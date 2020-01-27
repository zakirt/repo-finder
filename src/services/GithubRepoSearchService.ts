import { GithubApiService } from './GithubApiService';

export class GithubRepoSearchService {
    private apiService: any;

    constructor() {
        this.apiService = GithubApiService.getApiInstance();
    }

    public findByQuery(query: string): any {
        return this.apiService.get(`search/repositories?q=${query}`);
    }

    public findByStars(query: string): any {

    }
}
