import { RepoSearchResultModel } from '../models/RepoSearchResultModel';

export interface RepoSearchState {
    totalRepos: number,
    repos: RepoSearchResultModel[],
    isLoadingResults: boolean
}
