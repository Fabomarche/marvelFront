import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import FavoriteCounter from '.'



describe('FavoriteCounter', (): void => {
    afterEach(cleanup)

    it('Should render', (): void => {
        render(<FavoriteCounter />)
        screen.getByAltText('heart icon')
        expect(screen.getByText('0')).toBeDefined()
    })


})