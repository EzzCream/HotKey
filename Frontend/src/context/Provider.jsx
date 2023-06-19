import { createContext, useEffect, useState } from 'react';

const User = createContext();

export const Provider = ({ children }) => {
	const [user, setUser] = useState([]);
	const [state, setState] = useState(0);
	const [cart, setCart] = useState([]);

	const userSave = JSON.parse(localStorage.getItem('User'));
	if (userSave && user === []) {
		setUser(userSave);
	}

	return (
		<User.Provider
			value={{
				user,
				setUser,
				state,
				setState,
				cart,
				setCart,
			}}
		>
			{children}
		</User.Provider>
	);
};

export default User;
