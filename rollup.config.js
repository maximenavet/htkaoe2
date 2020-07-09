import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;
const publicPath = production ? '/htkaoe2/' : '/';

const htmlTemplate = ({ attributes, title, publicPath, bundle }) => (`
<!DOCTYPE html>
<html lang='${attributes.html.lang}'>
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>${title}</title>

	<link rel='icon' type='image/png' href='${publicPath}favicon.png'>
	<link rel='stylesheet' href='${publicPath}global.css'>
	<link rel='stylesheet' href='${publicPath}bundle.css'>

	<script defer src='${publicPath}${bundle['bundle.js'].fileName}'></script>
</head>

<body>
</body>
</html>
`)

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'build/bundle.js'
	},
	plugins: [
		nodePolyfills(),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('build/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

    replace({
      process: JSON.stringify({
        env: {
          isProd: production,
          publicPath
        }
      }),
    }),

		html({
			fileName: 'index.html',
			publicPath,
			title: 'Svelte app',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width,initial-scale=1' }
			],
			template: htmlTemplate
		}),

		copy({ targets: [ { src: 'public/*', dest: 'build' } ] }),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('build'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
