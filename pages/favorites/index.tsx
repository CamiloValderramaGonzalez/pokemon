import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritesPokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { favorite } from "../../interfaces";
import localFavorites from "../../utils/localFavorites";

const FavoritesPage = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<favorite[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title="Pokómons - Favoritos">
            {favoritesPokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritesPokemons favorites={favoritesPokemons} />
            )}
        </Layout>
    );
};

export default FavoritesPage;
