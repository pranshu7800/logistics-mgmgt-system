import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './components/ErrorBoundary';

const ErrorComponent: React.FC = () => {
    throw new Error('Test error');
};

test('renders error boundary with error', () => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });

    render(
        <ErrorBoundary>
            <ErrorComponent />
        </ErrorBoundary>
    );

    expect(screen.getByText('Oops, something went wrong.')).toBeInTheDocument();
    expect(screen.getByText("We're working to fix this. Please try again later.")).toBeInTheDocument();

    // @ts-ignore
    console.error.mockRestore();
});