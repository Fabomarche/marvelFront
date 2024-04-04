import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import MainLayout from '.'
import { BrowserRouter } from 'react-router-dom';


const mockChild = <div data-testid="child">Child Component</div>;

describe('MainLayout Component', (): void => {
    afterEach(cleanup)

    it('should renders children correctly', (): void => {
        const { getByTestId } = render(
            <BrowserRouter>
                <MainLayout>{mockChild}</MainLayout>
            </BrowserRouter>
        );

        expect(getByTestId('child')).toBeDefined();

    })
    it('renders Header component', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <MainLayout>{mockChild}</MainLayout>
            </BrowserRouter>
        );

        expect(getByTestId('header')).toBeDefined();
    });

})