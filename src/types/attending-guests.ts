type Attending = {
  count: number;
  guests: string[];
};

export type AttendingGuests = {
  attending: Attending;
  not_attending: Attending;
};