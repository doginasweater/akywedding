import { useCallback, useState } from 'react';
import React from 'react';
import { RsvpSearch } from './rsvp-search';
import { RsvpForm } from './rsvp-form';
import { Party } from '../types';


export const Rsvp: React.FC = () => {
  const [ party, setParty ] = useState<Party>();

  const handleFindParty = useCallback((party: Party) => {
    setParty(party);
  }, []);

  if (!party) {
    return <RsvpSearch onFound={handleFindParty} />;
  }

  return <RsvpForm party={party} />;
};