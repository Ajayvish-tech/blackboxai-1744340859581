// Handle profile picture upload and preview
document.getElementById('profilePicture').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle objective type selection
document.getElementById('objectiveType').addEventListener('change', function(e) {
    const customObjective = document.getElementById('customObjective');
    if (e.target.value === 'entry') {
        customObjective.value = "Seeking an entry-level position to begin my career in a professional environment where I can utilize my skills and education while gaining valuable work experience.";
        customObjective.disabled = true;
    } else {
        customObjective.value = "";
        customObjective.disabled = false;
    }
});

// Function to add qualification entry
function addQualification() {
    const container = document.getElementById('qualificationsContainer');
    const qualificationHtml = `
        <div class="qualification-entry border-b pb-4 mb-4">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Degree/Course</label>
                    <input type="text" name="degree[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Institution</label>
                    <input type="text" name="institution[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Year</label>
                    <input type="text" name="year[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Percentage/CGPA</label>
                    <input type="text" name="percentage[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
            </div>
            <button type="button" onclick="removeEntry(this)" class="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <i class="fas fa-trash mr-2"></i>
                Remove
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', qualificationHtml);
}

// Function to add experience entry
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const experienceHtml = `
        <div class="experience-entry border-b pb-4 mb-4">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" name="company[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Position</label>
                    <input type="text" name="position[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Duration</label>
                    <input type="text" name="duration[]" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="col-span-6">
                    <label class="block text-sm font-medium text-gray-700">Responsibilities</label>
                    <textarea name="responsibilities[]" rows="3" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
            </div>
            <button type="button" onclick="removeEntry(this)" class="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <i class="fas fa-trash mr-2"></i>
                Remove
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', experienceHtml);
}

// Function to remove an entry (qualification or experience)
function removeEntry(button) {
    button.closest('.qualification-entry, .experience-entry').remove();
}

// Add initial qualification and experience entries when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addQualification();
    addExperience();
});

// Handle form submission
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const resumeData = {
        personalInfo: {
            fullName: formData.get('fullName'),
            houseNo: formData.get('houseNo'),
            landmark: formData.get('landmark'),
            area: formData.get('area'),
            stateCity: formData.get('stateCity'),
            pincode: formData.get('pincode'),
            mobile: formData.get('mobile'),
            email: formData.get('email')
        },
        objective: document.getElementById('customObjective').value,
        qualifications: Array.from(document.querySelectorAll('.qualification-entry')).map(entry => ({
            degree: entry.querySelector('[name="degree[]"]').value,
            institution: entry.querySelector('[name="institution[]"]').value,
            year: entry.querySelector('[name="year[]"]').value,
            percentage: entry.querySelector('[name="percentage[]"]').value
        })),
        experience: Array.from(document.querySelectorAll('.experience-entry')).map(entry => ({
            company: entry.querySelector('[name="company[]"]').value,
            position: entry.querySelector('[name="position[]"]').value,
            duration: entry.querySelector('[name="duration[]"]').value,
            responsibilities: entry.querySelector('[name="responsibilities[]"]').value
        }))
    };

    // Store the data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    // Redirect to preview page
    window.location.href = 'preview.html';
});
