// Create element with class and tag name
const createElement = (className = '', tagName = 'div') => {
	const item = document.createElement(tagName);
	item.classList.add(className);
	return item;
};
