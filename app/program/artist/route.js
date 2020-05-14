import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
	// AND => https://example.com/cms/wp-json/pages?filter[tag]=L1,L2,L3
	// OR => https://example.com/cms/wp-json/pages?filter[tag]=L1+L2+L3

	model(params) {
		return this.store
			.query('artist', {slug: params.artist_slug})
			.then(models => models.get('firstObject'))
		// return hash({
		// 	design: this.store.findRecord('page', 2407),
		// 	moreActivities: this.store.query('artist', {
		// 		categories: 11,
		// 		per_page: 5
		// 	}),
		// 	artist: this.store
		// 	.query('artist', {slug: params.artist_slug}).then(models => models.get('firstObject'))
		// })
	},

	serialize(model) {
		return {artist_slug: model.get('slug')}
	}
})


