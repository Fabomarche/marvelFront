import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Search from '.'



describe('Search', (): void => {
    afterEach(cleanup)

    it('renders correctly & displays correct number of results when not loading', () => {
        const charactersCount = 5
        render(<Search setFilter={() => { }} isLoading={false} charactersCount={charactersCount} />);

        expect(screen.getByPlaceholderText('SEARCH CHARACTER...')).toBeDefined();

        expect(screen.getByAltText('search icon')).toBeDefined();

        expect(screen.getByText(`${charactersCount} results`)).toBeDefined();
    });

    it('displays loading indicator when isLoading is true', () => {
        render(<Search setFilter={() => { }} isLoading={true} charactersCount={0} />);
        expect(screen.getByText('... results')).toBeDefined();
    });

})