import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import merge from 'deepmerge'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const globals = {}

const base = {
  input: 'src/index.ts',
  output: {
    globals,
    freeze: false,
    interop: false,
    sourcemap: true
  },
  plugins: [
    typescript({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          sourceMap: true,
          declaration: false,
          declarationMap: false
        }
      }
    })
  ],
  external: Object.keys(globals)
}

const umd = merge(base, {
  output: {
    format: 'umd',
    file: pkg.browser,
    name: pkg.name
  }
})

const min = merge(umd, {
  output: {
    file: pkg.browser.replace(/\w+$/, 'min.$&')
  },
  plugins: [
    terser({
      ecma: 8,
      compress: {
        unsafe: true,
        pure_getters: true
      }
    })
  ]
})

export default production
  ? [ umd, min ]
  : [ umd ]
