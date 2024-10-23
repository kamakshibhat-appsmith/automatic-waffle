export default {
	
	 myfun(){
	const doc = new jspdf.jsPDF();


const columns = ["Name", "Age", "Country"];
const rows = [
  ["John Doe", 30, "USA"],
  ["Jane Smith", 25, "Canada"],
  ["Bob Johnson", 40, "UK"],
];

// Set the table options
const options = {
  startY: 20, // Vertical position to start the table (in mm)
};

// Generate the table
doc.table(columns, rows, options);

// Save the PDF
doc.save('table.pdf');
}
}