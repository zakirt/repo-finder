import React, { Component, FormEvent } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Row, Col, Dropdown, Button, FormGroup, Form } from 'react-bootstrap';
import { RepoSearchService } from '../services/RepoSearchService';
import { constructSearchQuery } from '../utils/constructSearchQuery';
import { RepoSearchResults } from './RepoSearchResults';
import { RepoSearchResultModel } from '../models/RepoSearchResultModel';
import { repoSearchValidationRules } from '../validations/repoSearchValidationRules';
import { RepoSearchState } from '../interfaces/RepoSearchState';
import { FormError } from './FormError';

interface FormErrors {
    [key: string]: string
}

export class RepoSearch extends Component {
    private repoSearchService: RepoSearchService;
    private queryText: string;
    private stars: string;
    private license: string;
    private isForked: boolean = false;

    constructor(props: any) {
        super(props);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.repoSearchService = new RepoSearchService();
        this.state = {
            totalRepos: 0,
            repos: [],
            isLoadingResults: false
        };
    }

    componentDidMount() {
        // const results = this.repoSearchService.searchByquery();
        // results.then((res: any) => console.log(res));
        this.setState({
            totalRepos: 100,
            repos: [{
                id: 1,
                name: 'test 1',
                url: 'https://github.com',
                description: 'test decription',
                stars: 100,
                license: 'MIT',
                owner: 'tester22'
            },
            {
                id: 2,
                name: 'test 1',
                url: 'https://github.com',
                description: 'test decription',
                stars: 100,
                license: 'MIT',
                owner: 'tester22'
            },
            {
                id: 3,
                name: 'test 1',
                url: 'https://github.com',
                description: 'test decription',
                stars: 100,
                license: 'MIT',
                owner: 'tester22'
            }],
            isLoadingResults: false
        });
    }

    onSubmitSearch() {
        // const query: string = constructSearchQuery({
        //     keywords: this.queryText.split(' '),
        //     stars: this.stars,
        //     license: this.license,
        //     fork: this.isForked
        // });
        // try {
        //     const results = this.repoSearchService.searchByQuery(query);
        //     this.setState({
        //         isLoadingResults: true
        //     });
        //     results.then((data: any) => this.setState({
        //         totalRepos: data.total,
        //         repos: data.repos,
        //         isLoadingResults: false
        //     }));

        // } catch (e) {
        //     console.error(e);
        // }
    }

    render() {
        const { repos, totalRepos, isLoadingResults } = this.state as RepoSearchState;
        return (
            <Formik
                initialValues={{ query: '', stars: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validationSchema={repoSearchValidationRules}
                initialErrors={{ query: '' }}
            >
                {({ isSubmitting, isValid }) => (
                    <FormikForm>
                        <h1 className="h2">Even Financial GitHub Repository Search</h1>
                        <Row>
                            <Col sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor="query">Text</Form.Label>
                                            <Field id="query" name="query" type="text" className="form-control" />
                                            <ErrorMessage name="query" component={FormError} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor="stars">Stars</Form.Label>
                                            <Field
                                                id="stars"
                                                name="stars"
                                                type="text"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="stars" component={FormError} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
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
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label htmlFor="forked">
                                                Include Forked
                                            </Form.Label>
                                            <Form.Control
                                                type="checkbox"
                                                className="form-control"
                                                onChange={(ev: FormEvent<HTMLInputElement>) => {
                                                    const target = ev.target as HTMLInputElement;
                                                    this.isForked = target.checked;
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Button
                                                className="btn-block w-25 mx-auto"
                                                type="submit"
                                                size="lg"
                                                onClick={this.onSubmitSearch}
                                                disabled={isSubmitting || isLoadingResults || !isValid}
                                            >
                                                Search
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="border-top my-3"></div>
                        <h2 className="h3">Search results</h2>
                        <RepoSearchResults repos={repos} total={totalRepos} />
                    </FormikForm>
                )}
            </Formik>
        );
    }
}
