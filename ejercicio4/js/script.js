//  Ejericio 4 - Usando filter() e includes()

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
  console.log('Cursos en común:');
  const commonCoursesString = commonCourses.join(', '); 
  console.log(commonCoursesString); 
  
} else {
  console.log('No hay cursos en común.');
}