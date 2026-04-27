export interface srcType {
    id: number,
    src: string
}
export interface postType {
    id: number,
    ownnerImage: string,
    ownnerName: string,
    descript: string,
    src: srcType[],
    action: {
        like: number,
        comment: number,
        share: number
    },
    comment: {
        ownner: string,
        other: string
    },
    isFollow: boolean,
    isLike : boolean

}