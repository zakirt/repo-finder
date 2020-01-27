import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RepoSearchResultModel } from '../models/RepoSearchResultModel';

export const RepoSearchResults = (props: any) => {
    const { repos } = props;
    return (
        <>
            {repos.map((repo: RepoSearchResultModel) => (
                <Row key={repo.id}>
                    <Col xs={12} md={9} lg={10}>
                        <p><a href={repo.url}>{repo.name}</a></p>
                        {repo.description}
                    </Col>
                    <Col xs={12} md={1} lg={1}>
                        <div>Stars</div>
                        {repo.stars}
                    </Col>
                    <Col xs={12} md={2} lg={1}>
                        <div>License</div>
                        {repo.license || 'No'} License
                    </Col>
                </Row>
            ))}
        </>
    );
};
