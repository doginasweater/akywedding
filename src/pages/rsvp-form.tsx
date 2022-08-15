import { Button } from '@chakra-ui/react';
import { FieldArray, Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { getMealOptions } from '../api';
import { Select, TextField, TextArea } from '../components';
import { Guest, Party } from '../types';

export type RsvpFormProps = {
  party: Party;
};

export type RsvpFormType = {
  music: string;
  comments: string;
  guests: Guest[];
};

export const RsvpForm: React.FC<RsvpFormProps> = ({ party }) => {
  const { data: mealOptions, isLoading } = useQuery(
    [ 'get-meals' ],
    () => getMealOptions()
  );

  const handleSubmit = useCallback((values: RsvpFormType) => {
    console.log(values);
  }, []);

  const initialValues: RsvpFormType = {
    music: '',
    comments: '',
    guests: party.guests.map(p => ({
      id: p.id,
      isChild: p.isChild,
      name: p.name,
      attending: '',
      foodChoice: '',
      dietaryRestrictions: ''
    })),
  };

  if (isLoading) {
    return <div>Loading meals...</div>;
  }

  return (
    <div className="rsvp-full-form-container">
      <div className="rsvp-full-form-wrapper">
        <div className="rsvp-full-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            {({ values }) => (
              <Form>

                <div className="input-group">
                  <FieldArray name="guests">
                    {() => values.guests.map((guest, index) => (
                      <div style={{ border: '0px solid #ececec' }} key={guest.id}>
                        <h3>{values.guests[index].name}</h3>


                        <Select name={`guests.${index}.attending`} placeholder="Will you be joining us?">
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </Select>

                        <Select name={`guests.${index}.foodChoice`} placeholder="Meal Selection" isDisabled={values.guests[index].attending === 'false'}>
                          {mealOptions?.data.map((opt) => (
                            <option value={opt.name} key={opt.id}>
                              {opt.name}
                            </option>
                          ))}
                        </Select>

                        <TextField
                          name={`guests.${index}.dietaryRestrictions`}
                          placeholder="Dietary Restrictions/Allergies?"
                          isDisabled={values.guests[index].attending === 'false'}
                        />
                      </div>
                    ))}
                  </FieldArray>

                  <h3>-</h3>

                  <TextArea
                    name="music"
                    placeholder="Request some music if you like (optional)"
                    isDisabled={values.guests.every(x => x.attending === 'false')}
                  />

                  <TextArea
                    name="comments"
                    placeholder="Comments/Notes (optional)"
                  />
                </div>
                <Button type="submit" colorScheme="whiteAlpha" size="md">SUBMIT RSVP</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );


};