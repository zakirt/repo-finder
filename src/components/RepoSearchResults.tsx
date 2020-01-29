import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { RepoSearchResultModel } from '../models/RepoSearchResultModel';
import { RepoResult } from './RepoResult';

export const RepoSearchResults = (props: any) => {
    const { repos } = props;
    return (
        <>
            <ListGroup as="ul">
                {repos.map((repo: RepoSearchResultModel) => (
                    <ListGroupItem as="li" key={repo.id}>
                        <RepoResult repo={repo} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    );
};
