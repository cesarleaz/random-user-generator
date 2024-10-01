const loader = document.getElementById('loader')
const userInfo = document.getElementById('user-info')
const userName = document.getElementById('user-name')
const userImage = document.getElementById('user-image')
const userEmail = document.getElementById('user-email')
const userLocation = document.getElementById('user-location')
const refreshBtn = document.getElementById('refresh-btn')

// Fetch user data from the Random User API
function fetchUserData() {
  loader.classList.remove('hidden')
  userInfo.classList.add('hidden')

  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0]
      userName.textContent = `${user.name.first} ${user.name.last}`
      userImage.src = user.picture.large
      userEmail.textContent = user.email
      userLocation.textContent = `${user.location.city}, ${user.location.country}`

      loader.classList.add('hidden')
      userInfo.classList.remove('hidden')
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      loader.classList.add('hidden')
      userInfo.innerHTML = '<p>Error loading user data</p>'
      userInfo.classList.remove('hidden')
    })
}

// Load initial user
fetchUserData()

// Refresh user on button click
refreshBtn.addEventListener('click', fetchUserData)
