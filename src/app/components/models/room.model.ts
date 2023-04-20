export interface Room {
  id: number,
  number: number,
  capacity: number,
  equipments: Equipment[],
  bookings: Booking[]
}

export interface Equipment {
  id: number,
  name: string
}

export interface Booking {
  id: number,
  date: Date,
  beginsAt: string,
  endsAt: string,
  username: string,
  status: "PENDING" | "ACCEPTED" | "REFUSED"
}
