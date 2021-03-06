import Controller from '@ember/controller'
import {computed} from '@ember/object'

export default Controller.extend({
	queryParams: ['tag'],
	tag: 'all',

	// get all, unique tags for our menu
	tags: computed('model.artists.@each.tags', function() {
		return this.get('model.artists')
			.mapBy('tags.firstObject')
			.uniq()
	}),
	musiccategory: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if (!tag || tag === 'all') {
			return;
		}
		if(tag === "musik"){
			return true;
		}
	}),

	kunstcategory: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "kunst"){
			return true;
		}
	}),
	udflugtercategory: computed('tag', 'model.artists.@each.tags', function(){
		let tag = this.get('tag')
		if(tag === "udflugter"){
			return true;
		}
	}),
	filteredArtists: computed('tag', 'model.artists.@each.tags', function() {
		let tag = this.get('tag')
		let artists = this.get('model.artists')
		if (!tag || tag === 'all') {
			return artists
		}
		
		// To get "music" artists we get those without any tags.
		if (tag === 'musik') {
	
			
			return artists.filter(artist => {
				let tags = artist.get('tags')
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '26') name = 'musik'
					return name === tag
				})
			}) 
			
		} 
	
		if (tag === "kunst"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '27') name = 'kunst'
					return name === tag
				})
			})
		} 

		if (tag === "udflugter"){
			return artists.filter(artist => {
				let tags = artist.get('tags')
	
				if (!tags) return false
	
				return tags.any(t => {
					let name = t.get('name')
					if (t.id === '29') name = 'udflugter'
					return name === tag
				})
			})
		} 

		
	})
})
