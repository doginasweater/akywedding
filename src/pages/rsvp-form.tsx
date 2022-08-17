import { Button } from '@chakra-ui/react';
import { FieldArray, Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { getMealOptions, submitParty } from '../api';
import { Select, TextField, TextArea } from '../components';
import { Guest, Party, Rsvp } from '../types';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



export type RsvpFormProps = {
  party: Party;
  // setParty: setParty;
};

export type RsvpFormType = {
  music: string;
  comments: string;
  guests: Guest[];
};

const refreshPage = () => {
  window.location.reload();
};

export const RsvpForm: React.FC<RsvpFormProps> = ({ party }) => {
  const { data: mealOptions, isLoading } = useQuery(
    ['get-meals'],
    () => getMealOptions()
  );

  const handleSubmit = useCallback(async (values: RsvpFormType) => {
    const submission: Rsvp = {
      partyId: party.partyId,
      music: values.music,
      comments: values.comments,
      guests: values.guests.map(guest => {
        return {
          guest_id: Number(guest.guest_id),
          name: guest.name,
          is_attending: (guest.is_attending === 'true'),
          meal_id: Number(guest.meal_id),
          dietary_restrictions: guest.dietary_restrictions,
          is_child: guest.is_child,
        };
      })
    };

    const result = await submitParty(submission);
    
    console.log('result', result);
    // post
    /*
      2. in handleSubmit, change the data from the object formik is giving you into what the db requires 
      3. call new post function
      4. check result
      5. kick to thank you page OR show server errors

      if (!200) {error}
    const navigate = useNavigate();
    */
  }, [party.partyId]);


  const initialValues: RsvpFormType = {
    music: '',
    comments: '',
    guests: party.guests.map(p => ({
      guest_id: p.guest_id,
      is_child: p.is_child,
      name: p.name,
      is_attending: '',
      meal_id: '',
      dietary_restrictions: ''
    })),
  };

  if (isLoading) {
    return <div>Loading meals...</div>;
  }

  return (
    <div className="rsvp-full-form-container">
      <div className="rsvp-full-form-wrapper">

        <div className="rsvp-full-form">
          <p>Not your party? </p>
          <p>Click <Button variant="link" onClick={refreshPage}>here</Button> to try searching again with your full name.</p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              guests: Yup.array().of(
                Yup.object({
                  is_attending: Yup.string()
                    .required('Please select an option'),
                  meal_id: Yup.string()
                    .required('Please select an option')
                })
              )
            })}
          >
            {({ values, errors }) => (
              <Form>
                <div className="input-group">
                  <FieldArray name="guests">
                    {() => values.guests.map((guest, index) => (
                      <div style={{ border: '0px solid #ececec' }} key={`guest-${guest.guest_id}`}>
                        <h3>{values.guests[index].name}</h3>


                        <Select name={`guests.${index}.is_attending`} placeholder="Will you be joining us?">
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </Select>

                        <Select name={`guests.${index}.meal_id`} placeholder="Meal Selection" isDisabled={values.guests[index].is_attending === 'false'}>
                          {mealOptions?.data.map((opt) => (
                            <option value={opt.meal_id} key={`option-${opt.meal_id}`}>
                              {opt.name}
                            </option>
                          ))}
                        </Select>

                        <TextField
                          name={`guests.${index}.dietary_restrictions`}
                          placeholder="Dietary Restrictions/Allergies?"
                          isDisabled={values.guests[index].is_attending === 'false'}
                        />
                      </div>
                    ))}
                  </FieldArray>

                  <h3>-</h3>

                  <TextArea
                    name="music"
                    placeholder="Request some music if you like (optional)"
                    isDisabled={values.guests.every(x => x.is_attending === 'false')}
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

