import { useState } from 'react';
import React from 'react';
import { RsvpSearch } from './rsvp-search';
import { RsvpForm } from './rsvp-form';


export const Rsvp: React.FC = () => {


  const [party, setParty] = useState();

  if (!party) {
    return <RsvpSearch />;
  }

  return <RsvpForm />;


};