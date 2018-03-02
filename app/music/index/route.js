import {hash} from 'rsvp'
import Route from '@ember/routing/route'

export default Route.extend({
	model() {
		if (this.get('cached')) return this.get('cached')
		// /artists?filter[cat]=12 or /posts?filter[category_name]=jazz_funk
		return hash({
			page: this.store.findRecord('page', 14),
			artists: this.store.query('artist', {
				filter: {
					category_name: '2018'
				},
				per_page: 99
			})
		}).then(model => {
			this.set('cached', model)
			return model
		})
	}
})
