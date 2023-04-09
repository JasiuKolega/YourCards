export interface ISection {
    id: string
    word: string
    translate: string
    category: string
    sentence: string
}

export interface ISectionData {
    sections: ISection[]
}