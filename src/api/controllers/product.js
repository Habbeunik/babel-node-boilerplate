function getProducts(req, res) {
	res.status(200).json({ data: [] });
}

function saveProduct(req, res) {
	res.status(200).json({ data: req.body });
}

export default {
	getProducts,
	saveProduct
};
