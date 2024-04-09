import type { CharacterType } from "../infrastructure/CharacterTypes";
import type { ComicType } from "../infrastructure/ComicTypes";
import type { FavoriteType } from "../infrastructure/Card";

export function isCharacter(item: CharacterType | ComicType | FavoriteType): item is CharacterType {
    return (item as CharacterType).name !== undefined;
}

export function IsImgSrc(item: CharacterType | ComicType | FavoriteType): item is FavoriteType {
    return (item as FavoriteType).imgSrc !== undefined;

}