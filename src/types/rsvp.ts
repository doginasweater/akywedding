export type Rsvp = {
  partyId: number;
  guests: GuestDto[];
  music: string;
  comments: string;
};

export type GuestDto = {
  guest_id: number;
  name: string;
  is_attending: boolean;
  meal_id: number;
  dietary_restrictions: string;
};

export type AdminRsvpViewModel = {
  rsvp_id: number;
  music: string;
  comments: string;
  guests: GuestDto[];
  created_at: Date;
  updated_at: Date;
};