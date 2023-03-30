import axios from 'axios';


const instance = axios.create({
	baseURL: 'http://localhost:3010/',
})

export const formAPI = {
	sendMessage(values: ValuesType) {
		return instance.post(`sendMessage`, {values})
	}
}

type ValuesType = {
	name?: string
	email?: string
	message?: string
}
