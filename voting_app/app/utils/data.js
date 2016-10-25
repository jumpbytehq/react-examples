 
var generateVoteCount = function(){
	return Math.round(Math.random(100) * 100);
};

const data = {
	products: [
		{
			id: 1,
			title: 'Yellow Pail',
			description: 'On-demand sand castle construction expertise.',
			url: '#',
			votes: generateVoteCount(),
			submitter_avatar_url: 'images/avatars/molly.png',
			product_image_url: 'images/products/image-aqua.png',
		},

		{
			id: 2,
			title: 'Blue Pail',
			description: 'On-demand pickup and delivery sand service.',
			url: '#',
			votes: generateVoteCount(),
			submitter_avatar_url: 'images/avatars/molly.png',
			product_image_url: 'images/products/image-aqua.png',
		}
	]
};

module.exports = data;