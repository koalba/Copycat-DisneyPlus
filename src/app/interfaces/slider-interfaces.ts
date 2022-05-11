export interface IType {
    cover  : boolean,
    new    : boolean,
    coming : boolean
}

export interface ICard {
    type?   : IType
    url     : string,
    src     : string,
    srcBig? : string
    titulo  : string,
    texto?  : string,
    logo?   : string,
    description? :string,
    tags?: string[]
}

export interface ISlider {
    tipo    : string,
    cards   : ICard[],
    titulo? : string,
    height?  : boolean
}
