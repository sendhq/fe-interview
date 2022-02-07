import React, { useState } from 'react';
import {Wrapper, Text, BottomButton } from './styles';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { AdditionalServices } from './components/AdditionalServices';
import { CargoDetails } from './components/CargoDetails';
import { FreightModeOptions } from './components/FreightModeOption';
import { ShipmentLocationInformation } from './components/LocInformation';
import { ContactDetailsBoard } from './components/ContactDetails';

export const App = ({}) => {
  const [selectedMode, setMode] = useState('');
  
  const handleSubmit = (values) => {
    console.log(values)
  }

  const handleCurrency = (currency) => {
    console.log(currency)
  }

  return (
    <>
      <Text variant="h3" fontWeight={600} fontSize={26} fontFamily="Gilroy-Medium">
        New Booking
      </Text>
      <Text
        variant="h6"
        color="#81868c"
        fontSize={15}
        fontFamily="Inter"
        fontWeight={300}
      >
        Fill in the information below get a quote or create a new booking.
      </Text>
      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            touched,
            errors,
            resetForm
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <FreightModeOptions
                setMode={(value) => {
                  setMode(value);
                }}
                resetForm={resetForm}
                selectedMode={selectedMode}
              />
              {selectedMode ? (
                <Wrapper>
                  <ShipmentLocationInformation
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    setPreferredCurrency={handleCurrency}
                    preferredCurrency={"USD"}
                    currencies={[]}
                  />

                    <CargoDetails
                      values={values}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      errors={errors}
                    />
                  
                    <AdditionalServices
                      values={values}
                      setFieldValue={setFieldValue}
                      preferredCurrency={"USD"}
                    />
                    <ContactDetailsBoard
                      quoteData={values}
                      setFieldValue={setFieldValue}
                    />
                  <BottomButton
                    full
                    text={'Submit Quote Request'}
                    loading={false}
                  />
                </Wrapper>
              ) : null}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default App