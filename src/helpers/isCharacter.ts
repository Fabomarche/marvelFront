import { CharacterType } from "../infrastructure/CharacterTypes";
import { ComicType } from "../infrastructure/ComicTypes";

export default function isCharacter(item: CharacterType | ComicType): item is CharacterType {
    return (item as CharacterType).name !== undefined;
}