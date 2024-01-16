import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Container from './Styled/Container.styled';
import Title from './Styled/Title.styled';
import MiniTitle from './Styled/MiniTitle.styled';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContacts } from 'Hooks/hook';
// import { useSelector } from 'react-redux';
// import * as selectors from 'components/Store/Contacts/selectors';

export function PhoneBook() {
  const { fetchAllContacts } = useContacts();

  // const contacts = useSelector(selectors.selectContact);
  // const isLoading = useSelector(selectors.selectIsLoading);
  // const error = useSelector(selectors.selectError);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllContacts();
    };

    fetchData();
  }, [fetchAllContacts]);
  return (
    <>
      <Container>
        <ToastContainer />
        <Title>Phonebook</Title>
        <Form />
        <MiniTitle>Contacts</MiniTitle>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
