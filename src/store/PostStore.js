import axios from 'axios'
import { makeAutoObservable } from 'mobx'

class PostStore {
	_post = axios.get(`http://localhost:5001/api/posts/all`)
	constructor() {
		makeAutoObservable(this._post)
	}
	setPost(res) {
		this._post = res
	}
	getPosts() {
		return this._post
	}
}
export default new PostStore()
