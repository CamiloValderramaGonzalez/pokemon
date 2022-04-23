import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { useRouter } from "next/router";
import { favorite } from "../../interfaces";

interface Props {
    favorite: favorite;
}

export const FavoriteCardPokemons: FC<Props> = ({ favorite }) => {
    const router = useRouter();
    const onFavoriteClicked = () => {
        router.push(`/name/${favorite.name}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card
                hoverable
                clickable
                css={{ padding: 10 }}
                onClick={onFavoriteClicked}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${favorite.id}.svg`}
                    width={"100%"}
                    height={140}
                />
            </Card>
        </Grid>
    );
};
