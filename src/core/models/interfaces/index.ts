export interface VectorIconModel {
    fill?: string,
    width?: string,
    height?: string
}

export interface SocialMediaModel<T> {
    key: T,
    url: string
}

export interface HeaderNavItemModel {
    path: string,
    label: string,
    isImportant?: boolean
}
