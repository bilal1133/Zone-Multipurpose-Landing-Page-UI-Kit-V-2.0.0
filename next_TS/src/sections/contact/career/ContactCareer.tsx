// _mock
import { _offices } from 'src/_mock';
//
import ContactMap from '../map';
import ContactCareerInfo from './ContactCareerInfo';
import ContactCareerForm from './ContactCareerForm';

// ----------------------------------------------------------------------

export default function ContactCareer() {
  return (
    <>
      <ContactCareerInfo />

      <ContactMap offices={_offices} />

      <ContactCareerForm />
    </>
  );
}
