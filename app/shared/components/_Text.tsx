import React from 'react'
import {
    StyleSheet,
    Text
} from 'react-native'

interface ITitle {
    name: string
    color: string
    ftsize: number
    ftweight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined
    mt: number,
    ml: number,
    pl: number,
    pr: number,
    align: "auto" | "left" | "right" | "center" | "justify" | undefined,
    italic: boolean
}

const _Text = ({
    name,
    color,
    ftsize,
    ftweight,
    mt,
    ml,
    pl,
    pr,
    align,
    italic
}: ITitle) => {

    return (
        <Text style={{
            color: color,
            fontSize: ftsize,
            fontWeight: ftweight,
            marginTop: mt,
            marginLeft: ml,
            paddingLeft: pl,
            paddingRight: pr,
            textAlign: align,
            fontStyle: italic ? 'italic' : 'normal'
        }}>{name}</Text>
    )
}

_Text.defaultProps = {
    color: 'white',
    ftsize: 16,
    ftweight: "normal",
    mt: 0,
    ml: 0,
    pl: 0,
    pr: 0,
    align: 'left',
    italic: false
}

export default _Text