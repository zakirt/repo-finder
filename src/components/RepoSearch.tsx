import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { RepoSearchService } from '../services/RepoSearchService';

export class RepoSearch extends Component {
    private repoSearchService: RepoSearchService;
    private queryText: string;
    private stars: string;
    private license: string;
    private isForked: boolean = false;

    constructor(props: any) {
        super(props);
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.repoSearchService = new RepoSearchService();
    }

    componentDidMount() {
        // const results = this.repoSearchService.searchByquery('tetris');
        // results.then((res: any) => console.log(res));
    }

    onChangeQuery(ev: any) {
        this.queryText = ev.target.value;
    }

    onSubmitSearch(ev: any) {
        console.log('submit ', this.queryText);
    }

    render() {
        return (
            <form>
                <h1>Even Financial GitHub Repository Search</h1>
                <div className="form-group">
                    <label htmlFor="query">Text</label>
                    <input id="query" type="text" className="form-control" onChange={this.onChangeQuery} />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Stars</label>
                    <input id="stars" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="license">license</label>
                    <Dropdown id="license">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="form-group">
                    <Button type="button" onClick={this.onSubmitSearch}>Search</Button>
                </div>
            </form>
        );
    }
}
