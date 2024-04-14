
export class Home {
  id: number;
  name: string;
  email: string;
  ph: string;
  image: string; 

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.ph = "";
    this.image = "";
  }
}



// case 'POST':
//   if (!empty($_POST['name']) && !empty($_POST['ph']) && !empty($_POST['email']) && !empty($_POST['image'])) {
// $name = $_POST['name'];
// $ph = $_POST['ph'];
// $email = $_POST['email'];

// // Decode base64 image string
// $base64Image = $_POST['image'];
// $binaryImage = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64Image));

// // Generate unique filename
// $image_name = time() . '.png';
// $image_path = 'img/' . $image_name;

// // Save binary image data to server
// if (file_put_contents($image_path, $binaryImage)) {
//     // Prepare and execute SQL query to insert data into database
//     $stmt = $pdo->prepare('INSERT INTO users (name, email, ph, image) VALUES (?, ?, ?, ?)');
//     if ($stmt->execute([$name, $email, $ph, $image_path])) {
//         // If data is successfully saved, send success response
//         echo json_encode(['message' => 'Data added successfully']);
//     } else {
//         // If data could not be saved to database, send error response
//         http_response_code(500);
//         echo json_encode(['message' => 'Failed to save data']);
//     }
// } else {
//     // If image file could not be saved to server, send error response
//     http_response_code(500);
//     echo json_encode(['message' => 'Failed to save image file']);
// }
// } else {
// // If any required field is missing, send error response
// http_response_code(400);
// echo json_encode(['message' => 'Missing required fields']);
// }
//     break;






// ngOnInit() {
//   this.getAll();
// }

// getAll() {
//   this.employeeservice.getAllapi().subscribe(
//     (response) => {
//       this.abc = response;
//     },
//     (error) => {
//       console.log('Something went wrong while fetching data.');
//     }
//   );
// }

// saveclicks() {
//   if (this.selectedImage) {
//     const reader = new FileReader();
//     reader.readAsDataURL(this.selectedImage);
//     reader.onload = () => {
//       const base64Image = reader.result as string;

//       const formData = new FormData();
//       formData.append('name', this.newabc.name);
//       formData.append('ph', this.newabc.ph);
//       formData.append('email', this.newabc.email);
//       formData.append('image', base64Image); // Add base64 image to formData

//       this.employeeservice.saveapi(formData).subscribe(
//         (response) => {
//           alert('Data saved successfully.');
//           this.getAll();
//         },
//         (error) => {
//           console.log('Error saving data:', error);
//         }
//       );
//     };
//   } else {
//     console.log('Please select an image.');
//   }
// }


// onFileSelected(event: any) {
//   this.selectedImage = event.target.files[0];
// }

// editClick(home: Home) {
//   this.updateabc = home;
// }

// updateClick() {
//   this.employeeservice.updateapi(this.updateabc).subscribe(
//     (response) => {
//       alert('Data updated successfully :)');
//       this.getAll();
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }

// deleteClick(id: number) {
//   console.log(id);
//   this.employeeservice.deleteapi(id).subscribe(
//     () => {
//       alert('Data deleted successfully');
//       this.getAll();
//     },
//     (error) => {
//       console.log('Cannot delete data', error);
//       alert('Error deleting data.');
//     }
//   );
// }

// }
