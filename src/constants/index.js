// Initial Store State
export const COLLECTION_NAME = 'categories';

export const categories = {
    CAT_BOOKS: 'books',
    CAT_MOVIES: 'movies',
    CAT_GAMES: 'CAT_GAMES',
    CAT_LECTURES: 'CAT_LECTURES',
    CAT_MUSIC: 'CAT_MUSIC',
    CAT_INTERVIEWS: 'CAT_INTERVIEWS',
    CAT_PROJECTS: 'CAT_PROJECTS'
}

export const initState = {
    currentCategory: categories.CAT_BOOKS,
    isLoading: true,
    data: {}
};