import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { RepoSearchService } from '../services/RepoSearchService';
import { constructSearchQuery } from '../utils/constructSearchQuery';
import { RepoSearchResults } from './RepoSearchResults';
import { RepoSearchResultModel } from '../models/RepoSearchResultModel';

interface RepoSearchState {
    totalRepos: number,
    repos: RepoSearchResultModel[]
}

export class RepoSearch extends Component {
    private repoSearchService: RepoSearchService;
    private queryText: string;
    private stars: string;
    private license: string;
    private isForked: boolean = false;
    public state: RepoSearchState;

    constructor(props: any) {
        super(props);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.repoSearchService = new RepoSearchService();
        this.state = {
            totalRepos: 0,
            repos: []
        };
    }

    componentDidMount() {
        // const results = this.repoSearchService.searchByquery();
        // results.then((res: any) => console.log(res));
    }

    onSubmitSearch() {
        const query: string = constructSearchQuery({
            keywords: this.queryText.split(' '),
            stars: this.stars,
            license: this.license,
            fork: this.isForked
        });
        try {
            const results = this.repoSearchService.searchByQuery(query);
            results.then((data: any) => this.setState({
                totalRepos: data.total,
                repos: data.repos
            }));
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const { repos, totalRepos } = this.state;
        return (
            <form>
                <h1>Even Financial GitHub Repository Search</h1>
                <div className="form-group">
                    <label htmlFor="query">Text</label>
                    <input id="query" type="text" className="form-control" onChange={(ev) => { this.queryText = ev.target.value; }} />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Stars</label>
                    <input id="stars" type="text" className="form-control" onChange={(ev) => { this.stars = ev.target.value; }} />
                </div>
                <div className="form-group">
                    <label htmlFor="license">license</label>
                    <Dropdown id="license" onSelect={(license: string) => { this.license = license; }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            License
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="MIT">MIT</Dropdown.Item>
                            <Dropdown.Item eventKey="ISC">ISC</Dropdown.Item>
                            <Dropdown.Item eventKey="Apache">Apache</Dropdown.Item>
                            <Dropdown.Item eventKey="GPL">GPL</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="form-group">
                    <label htmlFor="forked">
                        Forked
                    </label>
                    <input type="checkbox" className="form-control" onChange={(ev) => { this.isForked = ev.target.checked; }} />
                </div>
                <div className="form-group">
                    <Button type="button" onClick={this.onSubmitSearch}>Search</Button>
                </div>
                <h3>Search results</h3>
                <RepoSearchResults repos={repos} total={totalRepos} />
            </form>
        );
    }
}
