import { favorite } from "../interfaces";

const toggleFavorite = (favorite: favorite) => {
    let favorites: favorite[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    if (favorites.findIndex((poke) => poke.id === favorite.id) > -1) {
        favorites = favorites.filter((poke) => poke.id != favorite.id);
    } else {
        favorites.push(favorite);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (favorite: favorite): boolean => {
    if (typeof window === "undefined") return false;

    const favorites: favorite[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    return favorites.findIndex((poke) => poke.id === favorite.id) > -1;
};

const pokemons = (): favorite[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existInFavorites, pokemons };
