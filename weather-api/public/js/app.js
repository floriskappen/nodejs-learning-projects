const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const waitingMessage = document.querySelector('#waiting-message')
const resultsTable = document.querySelector('#results-table')
const locationMessage = document.querySelector('#location-message')
const summaryMessage = document.querySelector('#summary-message')
const tempMaxMessage = document.querySelector('#temp-max-message')
const tempMinMessage = document.querySelector('#temp-min-message')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    waitingMessage.style.display = 'block'

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                waitingMessage.textContent = data.error
            } else {
                locationMessage.textContent = data.location
                summaryMessage.textContent = data.summary
                tempMaxMessage.textContent = data.temperatureMax + '°C'
                tempMinMessage.textContent = data.temperatureMin + '°C'
                waitingMessage.style.display = 'none'
                resultsTable.style.display = 'block'
            }
        })
    })
})