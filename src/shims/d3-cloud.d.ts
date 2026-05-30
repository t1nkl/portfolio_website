// Minimal type shim for d3-cloud (ships no types; @types/d3-cloud does not exist).
// Covers only the layout API surface this project uses.
declare module 'd3-cloud' {
  export interface Word {
    text?: string
    size?: number
    x?: number
    y?: number
    rotate?: number
    font?: string
    [key: string]: unknown
  }

  export interface Layout<T extends Word> {
    size(): [number, number]
    size(size: [number, number]): Layout<T>
    words(): T[]
    words(words: T[]): Layout<T>
    padding(padding: number | ((word: T, index: number) => number)): Layout<T>
    rotate(rotate: number | ((word: T, index: number) => number)): Layout<T>
    font(font: string | ((word: T, index: number) => string)): Layout<T>
    fontSize(fontSize: number | ((word: T, index: number) => number)): Layout<T>
    random(random: () => number): Layout<T>
    on(type: 'word' | 'end', listener: (...args: never[]) => void): Layout<T>
    on(type: 'end', listener: (words: T[]) => void): Layout<T>
    start(): Layout<T>
    stop(): Layout<T>
  }

  export default function cloud<T extends Word = Word>(): Layout<T>
}
