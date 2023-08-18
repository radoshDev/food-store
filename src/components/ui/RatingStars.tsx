import type { FC } from 'react'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons'

type Props = {
	rating: number
}

const RatingStars: FC<Props> = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, i) => {
		const currStar = i + 1
		if (currStar <= rating) return <StarFill />

		const diff = currStar - rating

		if (diff > 0 && diff < 1) return <StarHalf />

		return <Star />
	})

	return stars
}

export default RatingStars
