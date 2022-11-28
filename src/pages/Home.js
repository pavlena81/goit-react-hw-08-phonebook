import { FcContacts } from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    gap: 10,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>
        <FcContacts />      
        Phonebook welcome page{' '}
        
      </h1>
    </div>
  );
}