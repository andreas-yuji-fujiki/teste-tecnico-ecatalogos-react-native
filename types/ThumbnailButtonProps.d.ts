import { Image } from "./ProductTypes";

export interface ThumbnailButtonProps {
    image: Image;
    onThumbnailClick: (imagePath: string) => void;
    index: number;
}