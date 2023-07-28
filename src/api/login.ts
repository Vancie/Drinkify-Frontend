import axios from 'axios'


type User =  {
  name: string,
  password: string
}

export const login = async (user: User) => {
  const res = await axios.post(
    `${import.meta.env.DATABASE_URL}/user`, user
  );

  return res;
}
