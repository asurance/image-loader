declare module '*.png' {
    const content: {
        url: string,
        width: number,
        height: number,
    }
    export default content
}