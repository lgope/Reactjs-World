const styleToString = (stylesObj) =>
	Object.keys(stylesObj).reduce((acc, key) => {
		const cssProperty = key
			.split(/(?=[A-Z])/)
			.join('-')
			.toLowerCase();

		if (cssProperty.includes('webkit')) {
			return `${acc}-${cssProperty}:${stylesObj[key]};`;
		}
		return `${acc}${cssProperty}:${stylesObj[key]};`;
	}, '');

const style = {
    width: '1px',
    height: '1px',
    backgroundColor: 'red',
    transform: 'rotateZ(45deg)',
    webkitText: 'text',
}

console.log(styleToString(style));
