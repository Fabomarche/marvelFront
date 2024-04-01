import { CharacterType } from "../infrastructure/CharacterTypes";
import { ComicType } from "../infrastructure/ComicTypes";
import { FavoriteType } from "../infrastructure/FavoritesTypes";

export function isCharacter(item: CharacterType | ComicType | FavoriteType): item is CharacterType {
    return (item as CharacterType).name !== undefined;
}

export function IsImgSrc(item: CharacterType | ComicType | FavoriteType): item is FavoriteType {
    return (item as FavoriteType).imgSrc !== undefined;

}