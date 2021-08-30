import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
// import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

console.log("process.env.ROLLUP_WATCH", process.env.ROLLUP_WATCH)
console.log("production", production)
function serve() {
	let server;
	function toExit() {
		if (server) server.kill(0);
	}
	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: !production,
		format: 'iife',
		inlineDynamicImports: true,
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// etc...
			preprocess: sveltePreprocess({
				// https://github.com/kaisermann/svelte-preprocess/#user-content-options
				sourceMap: !production,
				postcss: {
					plugins: [
						require("tailwindcss"),
						require("autoprefixer"),
						require("postcss-nesting")
					],
				},
			}),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

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
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// production &&

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(
			{
				compress:
					true
				// {
				// 	defaults: true,
				// 	drop_console: true,
				// 	// dead_code: true,
				// 	// // format
				// 	global_defs: {
				// 		// DEBUG: false,
				// 		// PROD: true,
				// 		// "@checkEnv()": "true",
				// 		// "@console.log": "alert",
				// 		// "location.href.indexOf('http://localhost:5000/')": true
				// 		"PROD": true
				// 	}
				// },
			}
		)
	],
	watch: {
		clearScreen: false
	}
};
