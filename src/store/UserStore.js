import { makeAutoObservable } from 'mobx'

class UserStore {
	constructor() {
		this._isAdmin = false
		makeAutoObservable(this)
	}
	setIsAdmin(bool) {
		this._isAdmin = bool
	}
	get isAdmin() {
		return this._isAdmin
	}
}
export default new UserStore()
