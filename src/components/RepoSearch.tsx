import React, { Component } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage, FormikValues } from 'formik';
import { Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
import { RepoSearchService } from '../services/RepoSearchService';
import { constructSearchQuery } from '../utils/constructSearchQuery';
import { RepoSearchResults } from './RepoSearchResults';
import { repoSearchValidationRules } from '../validations/repoSearchValidationRules';
import { RepoSearchState } from '../interfaces/RepoSearchState';
import { FormError } from './FormError';

export class RepoSearch extends Component {
    private repoSearchService: RepoSearchService;

    constructor(props: any) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.repoSearchService = new RepoSearchService();
        this.state = {
            totalRepos: 0,
            repos: [],
            license: '',
            isLoadingResults: false
        };
    }

    onSubmit(values: FormikValues, { setSubmitting }: { setSubmitting: any }) {
        const { query, stars, fork } = values;
        const keywords = query.split(' ');
        const { license } = this.state as RepoSearchState;
        const searchQuery: string = constructSearchQuery({
            keywords,
            stars,
            license,
            fork
        });
        try {
            const results = this.repoSearchService.searchByQuery(searchQuery);
            this.setState({
                isLoadingResults: true
            });
            results.then((data: any) => this.setState({
                totalRepos: data.total,
                repos: data.repos,
                isLoadingResults: false
            }));
            setSubmitting(false);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const {
            repos,
            totalRepos,
            license,
            isLoadingResults
        } = this.state as RepoSearchState;
        return (
            <Formik
                initialValues={{ query: '', stars: '', fork: false }}
                onSubmit={this.onSubmit}
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
                                            <Dropdown id="license" onSelect={(repoLicense: string) => this.setState({ license: repoLicense })}>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    {license || 'Select License'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="">None</Dropdown.Item>
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
                                            <Form.Label htmlFor="fork">
                                                Include Forked
                                            </Form.Label>
                                            <Field
                                                type="checkbox"
                                                className="form-control"
                                                id="fork"
                                                name="fork"
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
                                                disabled={isSubmitting || isLoadingResults || !isValid}
                                            >
                                                Search
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="border-top my-3" />
                        <h2 className="h3">Search results</h2>
                        <RepoSearchResults repos={repos} total={totalRepos} />
                    </FormikForm>
                )}
            </Formik>
        );
    }
}
