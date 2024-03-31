import { CharacterType } from "../infrastructure/CharacterTypes";

export default function isCharacter(item: CharacterType | ComicType): item is CharacterType {
    return (item as CharacterType).name !== undefined;
}