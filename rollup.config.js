import babel from "rollup-plugin-babel"
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import sass from 'rollup-plugin-sass'
import minifier from 'node-sass'

const prod = !process.env.ROLLUP_WATCH
const dev = !!process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: {
    file: 'docs/index.js',
    sourcemap: dev ? 'inline' : false,
    format: 'iife',
  },
  plugins: [
    sass({
       processor: css => { 
      const result = minifier.renderSync({
         data: css,
         sourcemap: true,
         outputStyle: 'compressed',
         importer: result => minify(url, prev, result).then({
         contents: result.data
      })
    }) 
         return result.css.toString(); 
    },
      insert: true
    }),
    resolve({ jsnext: true,
              browser: true, }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    prod && uglify(),
    dev && livereload('static'),
    dev &&
    serve({
      contentBase: ['static'],
      historyApiFallback: true,
      port: 8080,
    }),
  ],
}
