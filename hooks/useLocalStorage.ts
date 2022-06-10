const useLocalStorage = (watchlist: string[]): void => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
};

export default useLocalStorage;