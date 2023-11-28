let attendance = {};

function markAttendance(studentId) {
  const studentName = `Student ${studentId}`;
  const currentDate = new Date().toLocaleDateString();
  
  if (!attendance[currentDate]) {
    attendance[currentDate] = [];
  }
  
  if (!attendance[currentDate].includes(studentName)) {
    attendance[currentDate].push(studentName);
    alert(`${studentName} marked as present for ${currentDate}`);
  } else {
    alert(`${studentName} is already marked as present for ${currentDate}`);
  }
  console.log(attendance);
}
