module.exports = {
	plugins:{
		'precss':{},
		'postcss-import':{},
		'postcss-assets':{},
		'postcss-px-to-viewport':{
			viewportWidth: 640,
			unitPrecision: 2,
			viewportUnit: 'vw',
			selectorBlackList: ['.ignore', '.hairlines', '.novw'],
			minPixelValue: 1,
			mediaQuery: false
		}//px转vw移动端适配方案
	}
}