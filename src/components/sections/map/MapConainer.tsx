import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useState, useCallback } from 'react'

const mapOptions = {
	mapId: '794a3bfe1b138b52',
	center: {
		lat: 40.754461721314634,
		lng: -73.98821454599212,
	},
	zoom: 12,
}

const MapContainer = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'map-script',
		googleMapsApiKey: import.meta.env.PUBLIC_MAP_API_KEY,
		language: 'en',
	})

	const [map, setMap] = useState<any>(null)

	// const onLoad = useCallback(function callback(map: any) {
	// 	// This is just an example of getting and using the map instance!!! don't just blindly copy!
	// 	const bounds = new window.google.maps.LatLngBounds(mapOptions.center)
	// 	map.fitBounds(bounds)

	// 	setMap(map)
	// }, [])

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null)
	}, [])
	console.log('MapContainer render')

	if (!isLoaded) return null

	return (
		<GoogleMap
			options={mapOptions}
			mapContainerStyle={{ height: '71.4rem' }}
			// onLoad={onLoad}
			onUnmount={onUnmount}>
			<Marker
				position={mapOptions.center}
				title="Food Store!"
				icon={{ url: '/assets/map_marker.svg' }}
			/>
		</GoogleMap>
	)
}

export default MapContainer
