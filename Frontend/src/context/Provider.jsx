import { createContext, useState } from 'react';

const User = createContext();

export const Provider = ({ children }) => {
	const [user, setUser] = useState([]);
	const [state, setState] = useState(0);

	return (
		<User.Provider
			value={{
				user,
				setUser,
				state,
				setState,
			}}
		>
			{children}
		</User.Provider>
	);
};

export default User;
