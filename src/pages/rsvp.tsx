import { Button } from '@chakra-ui/react';
import { FieldArray, Form, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { getMealOptions, MealOption } from '../api';
import { Select, TextField, TextArea } from '../components';
import React from 'react';

export type Guest = {
  id: string;
  isChild: boolean;
  firstName: string;
  lastName: string;
  attending: string;
  foodChoice: string;
  dietaryRestrictions: string;
};

export type RsvpFormType = {
  music: string;
  comments: string;
  guests: Guest[];
};

export const Rsvp: React.FC = () => {
  const [ resultText, setResultText ] = useState('');
  const [ mealOptions, setMeals ] = useState<MealOption[]>();

  useEffect(() => {
    getMealOptions()
      .then((result) => setMeals(result?.data ?? []))
      .catch(console.error);
  }, []);

  const initialValues: RsvpFormType = {
    music: '',
    comments: '',
    guests: [ {
      id: '1',
      isChild: false,
      firstName: 'Bruce',
      lastName: 'Almighty',
      attending: '',
      foodChoice: '',
      dietaryRestrictions: '',
    }, {
      id: '2',
      isChild: true,
      firstName: 'Kyle',
      lastName: 'Almighty',
      attending: '',
      foodChoice: '',
      dietaryRestrictions: '',
    } ],
  };

  const handleSubmit = useCallback((values: RsvpFormType) => {
    setResultText(JSON.stringify(values));
  }, []);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
        <Form>
          <p>
            Almighty Party, 2 guests
          </p>
          <FieldArray name="guests">
            {() => values.guests.map((guest, index) => (
              <div style={{ border: '1px solid #ececec' }} key={guest.id}>
                <h3>{values.guests[index].firstName} {values.guests[index].lastName}</h3>

                <Select name={`guests.${index}.attending`} placeholder="Will you be joining us?">
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Select>

                <Select name={`guests.${index}.foodChoice`} placeholder="Meal Selection" isDisabled={values.guests[index].attending === 'false'}>
                  {mealOptions?.map((opt) => (
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

          <TextArea
            name="music"
            placeholder="Request some music if you like."
            isDisabled={values.guests.every(x => x.attending === 'false')}
          />

          <TextArea
            name="comments"
            placeholder="Comments? Notes? Existential questions?"
          />

          <Button type="submit">Submit RSVP</Button>
        </Form>
  )}
      </Formik>
      <p>{resultText}</p>
    </>
  );
};