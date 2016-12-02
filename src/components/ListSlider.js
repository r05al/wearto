import React from 'react';

const navButtonStyle = {
	position: 'absolute',
	zIndex: 1,
	top: '30%',
	opacity: '.7',
	cursor: 'pointer',
	fontSize: '4em'
}

function LeftNavButton(props) {
	const style = Object.assign({}, navButtonStyle, {left: 0});

	return <span{...props} style={style}>&#8249;</span>  
}

function RightNavButton(props) {
	const style = Object.assign({}, navButtonStyle, {right: 0});

  return <span{...props} style={style}>&#8250;</span>  
}

export const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 1,
	nextArrow: <RightNavButton />,
	prevArrow: <LeftNavButton />
};
