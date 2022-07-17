import StudentItem from './StudentItem';
import { StudentContext } from '../context/StudentContext';
import { useContext } from 'react';

const StudentList = () => {
  //! Context'ten students verisini okuduk.
  const { students } = useContext(StudentContext);

  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
