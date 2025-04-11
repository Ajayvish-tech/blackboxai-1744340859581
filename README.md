
Built by https://www.blackbox.ai

---

```markdown
# Resume Builder

## Project Overview
Resume Builder is a web application designed to help users create professional resumes in minutes. With a variety of templates and an intuitive user interface, users can input their information, customize their resumes, and export them to PDF. The application is easy to use and is suitable for both beginners and experienced users.

## Installation
To set up the Resume Builder on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd resume-builder
   ```

2. **Open the `index.html` file in your browser:**
   You can simply double-click on the `index.html` file or open it with any browser to run the application.

## Usage
1. Open the `index.html` file to access the main interface.
2. Click on the "Create Resume" button to navigate to the resume creation form.
3. Fill out the necessary fields, including personal information, career objectives, qualifications, and work experience.
4. Once done, click on "Create Resume" to save the information and preview the resume.
5. Use the options on the preview page to edit your resume or download it as a PDF.

## Features
- **Professional Templates**: Choose from various aesthetically pleasing and professionally designed templates.
- **PDF Export**: Download your completed resume as a PDF file for easy sharing and application.
- **Easy to Use**: The interface is user-friendly, allowing a smooth experience for creating resumes quickly.
- **Dynamic Form**: Add multiple qualifications and work experiences dynamically with a click of a button.
- **Preview Functionality**: Review your resume before downloading, ensuring everything appears as expected.

## Dependencies
The application utilizes the following external libraries:
- **Tailwind CSS**: For styling and responsive design.
- **Font Awesome**: For icons.
- **jsPDF**: For generating PDF files.
- **html2canvas**: For capturing the HTML elements as a canvas for PDF generation.

No additional dependencies are required in the `package.json` for this static application.

## Project Structure
```
resume-builder/
├── index.html        # Main landing page
├── create-resume.html  # Resume creation page
├── preview.html      # Resume preview and PDF generation page
└── js/
    └── main.js       # JavaScript file for form validation and PDF generation
```

### Additional Information:
- Ensure you have an internet connection to access the external resources from CDN for Tailwind CSS, Font Awesome, jsPDF, and html2canvas.
- The application data is temporarily stored in the user's browser `localStorage`.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```