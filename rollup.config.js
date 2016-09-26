import * as fs from 'fs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';

/*
var outro = `
Object.defineProperty( exports, 'AudioContext', {
	get: function () {
		return exports.getAudioContext();
	}
});`;
*/

function glsl () {
	return {
		transform ( code, id ) {
			if ( !/\.glsl$/.test( id ) ) return;
			return 'export default ' + JSON.stringify(
				code
					.replace( /[ \t]*\/\/.*\n/g, '' )
					.replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' )
					.replace( /\n{2,}/g, '\n' )
			) + ';';
		}
	};
}

export default {
	entry: 'src/app.js',
	dest: 'build/three-app.js',
	format: 'umd',
	moduleName: 'APP',
	plugins: [
		json(), 
		glsl(),
	 	babel( {
			babelrc: false,
    	presets: [ [ 'es2015', { "modules": false } ] ]
    } )
	]
};
