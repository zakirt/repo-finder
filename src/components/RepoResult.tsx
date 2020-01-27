import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export const RepoResult = (props: any) => {
    const { repo } = props;
    return (
        <>
            <Row key={repo.id}>
                <Col xs={12} md={7} lg={9}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <a href={repo.url}>{repo.name}</a>
                            </Card.Title>
                            <Card.Subtitle>
                                By {repo.owner}
                            </Card.Subtitle>
                            <Card.Text>
                                {repo.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={1}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Stars
                            </Card.Title>
                            <Card.Text>
                                {repo.stars}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3} lg={2}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                License
                            </Card.Title>
                            <Card.Text>
                                {repo.license}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
