import RoomsData from '@/app/lib/data.json'
export async function GET() {
  const roomsList = RoomsData.data.rooms
  const set = roomsList.map((room) => {
    const id = parseInt(room.id)
    const image = room.images
    const country = room.country
    const location = room.location
    const price = room.price
    const distance = room.distance
    const date = room.date
    const description = room.description
    const rating = room.rating
    return {
      id,
      image,
      country,
      location,
      price,
      distance,
      date,
      description,
      rating,
    }
  })

  return Response.json({ data: JSON.stringify(set) })
}
