export type ServiceIcon = 'cake' | 'cocktail' | 'cupcake' | 'gift'

export type Product = {
	image: string
	price: number
	title: string
	subtitle: string
}

export type UserInfo = {
	avatar: string
	fullName: string
	position: string
}

export type Testimonial = {
	user: UserInfo
	title: string
	description: string
	rating: string
}
