import MemberCard from './MemberCard';
import './App.css';

const membersData = [
  {
    name: 'Harley Pucti',
    course: 'BSCS',
    status: 'Active',
    email: 'harley@gmail.com',
    phone: '096762312',
    activities: ['Orientation', 'Workshop', 'Meeting'],
  },
  {
    name: 'Dan Balacdao',
    course: 'BSCOI',
    status: 'Inactive',
    email: 'dan@gmail.com',
    phone: '09687578',
    activities: ['Orientation', 'Club Picnic', 'Mamangans'],
  },
  {
    name: 'Jhon Patrick Monte',
    course: 'BSSE',
    status: 'Active',
    email: 'patrick@gmail.com',
    phone: '096271314',
    activities: ['Workshop', 'Meeting', 'Mamangans'],
  },
];

function App() {
  return (
    <>
        <h1>University Club Members DashBoard</h1>
      <section>
        <h2>Member List</h2>
        {membersData.map((member) => (
          <MemberCard key={member.email} {...member} />
        ))}
      </section>
    </>
  );
}

export default App;
