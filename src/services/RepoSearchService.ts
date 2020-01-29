import { GithubApiService } from './GithubApiService';
import { RepoSearchResultAdapter } from '../utils/RepoSearchResultAdapter';
import { RepoSearchResultModel } from '../models/RepoSearchResultModel';


interface RepoTotalResults {
    total: number,
    repos: RepoSearchResultModel[]
}

export class RepoSearchService {
    private apiService: any;

    constructor() {
        this.apiService = GithubApiService.getApiInstance();
    }

    public async searchByQuery(query: string): Promise<RepoTotalResults> {
        try {
            const result = this.apiService.get(`search/repositories?q=${query}`, {
                transformResponse: (response: any) => {
                    const res = JSON.parse(response);
                    const repos: RepoSearchResultModel[] = res.items.map((dto: any) => new RepoSearchResultAdapter(dto).toModel());
                    return {
                        total: res.total_count,
                        repos
                    };
                }
            });
            const data = await result;
            return data.data;
        } catch (e) {
            console.error(`RepoSearchService.searchByQuery(): ${e.message}`);
            return {
                total: 0,
                repos: []
            };
        }
    }
}
