import { RepoSearchResultModel } from '../models/RepoSearchResultModel';

export class RepoSearchResultAdapter {
    private dto: any;
    private model: RepoSearchResultModel;

    public constructor(dto: any) {
        this.dto = dto;
    }

    public toModel(): RepoSearchResultModel {
        if (!this.model) {
            this.model = {
                id: this.dto.id,
                name: this.dto.full_name,
                owner: this.dto.owner.login,
                url: this.dto.html_url,
                description: this.dto.description,
                license: this.dto.license ? this.dto.license.name : '',
                stars: this.dto.stargazers_count,
                forked: this.dto.fork
            };
        }
        return this.model;
    }
}
