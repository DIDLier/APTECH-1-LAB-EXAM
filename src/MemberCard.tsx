import ActivityList from './ActivityList';

type MemberProps = {
  name: string;
  course: string;
  status: string;
  email: string;
  phone: string;
  activities: string[];
};

const MemberCard = ({ name, course, status, email, phone, activities }: MemberProps) => {
  return (
    <>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <h4>Activities</h4>
      <ActivityList activities={activities} />
    </>
  );
};

export default MemberCard;
