import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemons } from "./";
import { favorite } from "../../interfaces";

interface Props {
    favorites: favorite[];
}

export const FavoritesPokemons: FC<Props> = ({ favorites }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {favorites.map((favorite) => (
                <FavoriteCardPokemons favorite={favorite} key={favorite.name} />
            ))}
        </Grid.Container>
    );
};
