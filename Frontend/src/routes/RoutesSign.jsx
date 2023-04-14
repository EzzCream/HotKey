import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../components/SignIn/SignIn.jsx';
import { SignUp } from '../components/SignUp/SignUp.jsx';

export const RoutesSign = () => {
	return (
		<>
			<Routes>
				<Route path="signin" element={<SignIn />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</>
	);
};
