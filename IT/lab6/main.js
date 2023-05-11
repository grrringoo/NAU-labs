document.addEventListener('DOMContentLoaded', initialize);

const cars = [
	{
		title: 'BMW',
		imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-5-series-101-1676576715.jpg?crop=0.819xw:0.645xh;0.127xw,0.355xh&resize=1200:*',
		price: 11000,
		currency: '$'
	},
	{
		title: 'Audi',
		imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.689xw:0.517xh;0.276xw,0.368xh&resize=1200:*',
		price: 12000,
		currency: '$'
	},
	{
		title: 'Mercedes',
		imageUrl: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
		price: 13000,
		currency: '$'
	},
	{
		title: 'BMW',
		imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-5-series-101-1676576715.jpg?crop=0.819xw:0.645xh;0.127xw,0.355xh&resize=1200:*',
		price: 11000,
		currency: '$'
	},
	{
		title: 'Audi',
		imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.689xw:0.517xh;0.276xw,0.368xh&resize=1200:*',
		price: 12000,
		currency: '$'
	},
	{
		title: 'Mercedes',
		imageUrl: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
		price: 13000,
		currency: '$'
	}
];

function initialize() {
	const root = document.getElementById('root');
	const cards = cars.map(createCard);

	root.innerHTML = cards.join('');
}


function createCard({ title, imageUrl, price, currency }) {
	return `
		<div class="card">
			<div class="card-image">
				<img src="${imageUrl}" alt="${title}">
			</div>
			<div class="card-content">
				<span class="card-title">${title}</span>
				<p>Price: ${price} ${currency}</p>
			</div>
		</div>
	`;
}

