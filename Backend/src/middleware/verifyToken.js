// Authorization: Bearer <token>
export function verifyToken(req, res, next) {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearertoken = bearerHeader.split(' ')[1];
		req.token = bearertoken;
		next();
	} else {
		res.status(403).send('error');
	}
}
