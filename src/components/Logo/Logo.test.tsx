import { describe, it, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Logo from '.'

describe('Logo', (): void => {
    afterEach(cleanup)

    it('Should render', (): void => {
        render(<Logo />)
    })

    it('should load the logo marvel image', (): void => {
        render(<Logo />)
        screen.getByAltText('marvel logo')

    })



})