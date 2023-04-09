export interface IModal {
    modal: boolean
    setModal: boolean
}

export interface IModalProps {
    isOpen: any
    onClose: () => void
}

export interface IModalObject {
    word: string
    translate: string
    category: string
    sentence: string
}

export interface IModalObjectCard {
    parent: any
    word: string
    translate: string
}

export interface IGetModalObject {
    id: string
    name: string
    language: string
}