import React from 'react';
import { Alert } from 'react-bootstrap';

export const FormError = ({ children: errorMessage }: { children: any }) => (
    <Alert variant="danger" className="mt-1">{errorMessage}</Alert>
);
