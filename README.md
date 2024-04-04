# Introduction/Summary
This test involves creating an application to explore information about characters from the Marvel universe. The challenge focuses on developing two main views: the list of characters and the details of each one. Additionally, emphasis is placed on responsive design, the use of the Marvel API to obtain relevant data, and the implementation of efficient state management with React's ContextAPI.

## Features
Main View: Displays an initial list of 50 characters, with the ability to search and filter by name. Users can add characters to their favorites, which can be viewed in a dedicated section.

Character Details: Provides detailed information about each character, including a description, image, and list of comics they appear in.

# Deploy Demo Link:  [marvel-front.vercel.app](https://marvel-front.vercel.app/)

## Clarification regarding the publication years of the comics in the character detail:

It has been observed that the publication year is included in the title of the comics. To address this, a function called "parseComicTitle.ts" has been developed to separate the title and the year of each comic, consuming them in the component that requires them.

However, it has been identified that the date obtained in this way, in some cases, does not match the publication date provided in the object of each comic returned by the API. This may lead to apparent disorganization when sorting the comics by date in the character detail using the endpoint: "/characters/${id}/comics?orderBy=onsaleDate".

In reality, what happens is that the order returned by the endpoint depends on information that does not exactly match the years indicated in the titles of the comics.

The decision has been made to leave it this way because the work done with the Test-Driven Development (TDD) methodology used to create the functionality of "parseComicTitle.ts" is considered more interesting.


## Run project in local
- complete .env (model .env.example)
- npm install
- to start project: npm run dev
- to test: npm run test

# Folders Structure
The architecture of this React project is organized in a structured and modular manner, facilitating its maintenance and scalability. The "components" folder houses the reusable components of the project, subdivided into folders according to their functionality. Test files are included alongside the components to facilitate testing. The "helpers" folder contains auxiliary functions, while "hooks" includes custom hooks used in the application. In "infrastructure," aspects of the project's infrastructure such as data types and API adapters are managed. Services are specifically found in the Marvel API service. Finally, views are organized in the "Views" folder, divided into subfolders according to the view.

```
└── 📁src
    └── App.css
    └── App.tsx
    └── index.css        
    └── main.tsx

    └── 📁assets
        └── character.svg
        └── comic.svg
        └── heart.svg
        └── marvel.svg
        └── search.svg
        └── variables.scss

    └── 📁components
        └── 📁CardsList
            └── CardList.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁CharacterCard
            └── CharacterCard.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁CharacterResumeDetail
            └── CharacterResumeDetail.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁ComicCard
            └── ComicCard.test.tsx
            └── index.tsx
            └── syles.scss
        └── 📁FavoriteCounter
            └── FavoriteCounter.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁FavoriteHeart
            └── FavoriteHeart.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁Header
            └── Header.test.tsx
            └── index.tsx
            └── styles.scss
        └── 📁Icons
            └── EmptyHeart.tsx
            └── Heart.tsx
        └── 📁Logo
            └── index.tsx
            └── Logo.test.tsx
        └── 📁MainLayout
            └── index.tsx
            └── MainLayout.test.tsx
            └── styles.scss
        └── 📁Search
            └── index.tsx
            └── Search.test.tsx
            └── styles.scss

    └── 📁helpers
        └── isCharacter.ts
        └── parseComicTitle.ts

    └── 📁hooks
        └── useFetchAllCharacters.ts
        └── useFetchCharacterComics.ts
        └── useFetchOneCharacter.ts
        └── useStorageFavorites.ts

    └── 📁infrastructure
        └── Card.ts
        └── CharacterTypes.ts
        └── ComicTypes.ts
        └── 📁context
            └── FavoritesContext.ts
        └── env.ts
        └── MarvelAPIAdapter.ts
        └── 📁repositories
            └── Repository.ts
            └── StorageRepository.ts

    └── 📁Services
        └── marvelService.ts

    └── 📁Views
        └── 📁DetailView
            └── index.tsx
            └── styles.scss
        └── 📁FavoritesView
            └── index.tsx
            └── styles.scss
        └── 📁Home
            └── index.tsx
            └── styles.scss
    
```

# Stack
- Vite
- React 
- Typescript
- Vitest
- sass


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
