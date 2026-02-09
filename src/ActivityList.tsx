type ActivityListProps = {
    activities: string[];
  };
  
  const ActivityList = ({ activities }: ActivityListProps) => {
    return (
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    );
  };
  
  export default ActivityList;
  