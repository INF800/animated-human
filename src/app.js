/** app.js
 *
 */
 
// imports

import { version as VERSION } from '../package.json'
import { WebGLRenderer } from '../three.js/src/renderers/WebGLRenderer'

// constants

const SCENE_URL = 'human/human.json'



// globals

let renderer = null

// init

function init () {

	console.debug( 'init()' )

	renderer = new WebGLRenderer( { antialias: true } )

	return load( SCENE_URL )

}

// load

function load ( url ) {

	return new Promise( ( resolve, reject ) => {

		

	} )

}

// exports

export { VERSION, init }
