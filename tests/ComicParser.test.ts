import { describe, it, expect } from '@jest/globals'
import { parseComicTitle } from '../src/helpers/parseComicTitle'

describe('parseComicTitle', () => {

    it('should split the string into comicName and comicYear', () => {
        const comicTitle = 'Hulk (2008) #53'
        const { comicName, comicYear } = parseComicTitle(comicTitle);

        expect(comicName).toEqual('Hulk #53')
        expect(comicYear).toEqual('2008')
    })

    it('should split the string into comicName and comicYear without text after a year', () => {
        const comicTitle = 'Hulk (2008)'
        const { comicName, comicYear } = parseComicTitle(comicTitle);

        expect(comicName).toEqual('Hulk')
        expect(comicYear).toEqual('2008')
    })

    it('should work if there is no year', () => {
        const comicTitle = 'Abomination (Emil Blonsky)'
        const { comicName, comicYear } = parseComicTitle(comicTitle);

        expect(comicName).toEqual('Abomination (Emil Blonsky)')
        expect(comicYear).toEqual('')
    })

    it('should work if there is two parentheses', () => {
        const comicTitle = 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1'
        const { comicName, comicYear } = parseComicTitle(comicTitle);

        expect(comicName).toEqual('cover from Free Comic Book Day 2013 (Avengers/Hulk) #1')
        expect(comicYear).toEqual('2013')
    })

})