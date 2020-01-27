import { GithubApiService } from './GithubApiService';

export class RepoSearchService {
    private apiService: any;

    constructor() {
        this.apiService = GithubApiService.getApiInstance();
    }

    public searchByquery(query: string): any {
        return this.apiService.get(`search/repositories?q=${query}`);
        //return [];
    }
}
