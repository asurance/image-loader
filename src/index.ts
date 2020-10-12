import { getOptions, interpolateName } from 'loader-utils';
import webpack from 'webpack';
import { imageSize } from 'image-size'
export default function (this: webpack.loader.LoaderContext, content: Buffer): string {
    const context = this.rootContext
    const name = '[contenthash].[ext]'
    const url = interpolateName(this, name, { context, content })
    const publicPath = `__webpack_public_path__ + ${JSON.stringify(url)}`
    this.emitFile(url, content, null)
    let width = 0
    let height = 0
    try {
        const result = imageSize(content)
        width = result.width ?? 0
        height = result.height ?? 0
    } catch (e) {
        this.emitError(e)
    }
    return `export const url = ${publicPath};export const width = ${width};export const height = ${height};`
}

export const raw = true