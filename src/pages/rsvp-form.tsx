import { Button } from '@chakra-ui/react';
import { FieldArray, Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { getMealOptions } from '../api';
import { Select, TextField, TextArea } from '../components';
import { Guest, MealOption } from '../types';


export type RsvpFormType = {
  music: string;
  comments: string;
  guests: Guest[];
};


export const RsvpForm: React.FC = () => {

  const [ resultText, setResultText ] = useState('');
  const [ mealOptions, setMeals ] = useState<MealOption[]>();


  const handleSubmit = useCallback((values: RsvpFormType) => {
    setResultText(JSON.stringify(values));
  }, []);


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
          <p>{resultText}</p>
        </div>
      </div>
    </div>
  );


};