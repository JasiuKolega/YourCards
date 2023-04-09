export interface ICardProps {
    id: number
    parent: any
    word: string
    translate: string
}

export interface ICardData {
    cards: ICardProps[]
}

export interface ICardDataSingle {
    cards: ICardProps
}

export interface ICreateCardProps {
    parent: any
}

export interface IDeleteCard {
    id: number | string
    isOpen: any
    onClose: () => void
}
