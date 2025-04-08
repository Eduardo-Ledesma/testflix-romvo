export type Serie = {
    id: number;
    title: string;
    description: string;
    img: string;
    score: number;
    year: number;
    in_list: boolean;
    in_favorite: boolean;
}

export type Modal = 'form' | 'list'
export type ListOrLiked = 'list' | 'liked'