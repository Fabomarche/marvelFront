export const parseComicTitle: (comicTitle: string) => { comicName: string; comicYear: string } = (comicTitle: string) => {

    const yearRegex = /\((\d{4}(?:\s*-\s*\d{4})?)\)/;
    const result = yearRegex.exec(comicTitle)

    if (result) {
        const comicYear = result[1]
        const replaceRegex = /\s\((\d{4}(?:\s*-\s*\d{4})?)\)/; //white space + year
        const comicName = comicTitle.replace(replaceRegex, '').trim()

        return { comicName: comicName, comicYear: comicYear }
    } else {

        return { comicName: comicTitle, comicYear: '' }
    }

}