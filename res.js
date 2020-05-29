const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
const ES = new EventSource(url, header)
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

ES.onmessage = message => {
    votesObj = JSON.parse(message.data)
    all = votesObj.cats + votesObj.parrots + votesObj.dogs
    cats_per = votesObj.cats/all
    parrots_per = votesObj.parrots/all
    dogs_per = votesObj.dogs/all
    p1.style.cssText = `width: ${cats_per*100}%`
    p1.textContent = `${votesObj.cats}`
    p2.style.cssText = `width: ${parrots_per*100}%`
    p2.textContent = `${votesObj.parrots}`
    p3.style.cssText = `width: ${dogs_per*100}%`
    p3.textContent = `${votesObj.dogs}`
    p4.style.cssText = `width: ${all}%`
    p4.textContent = `${all}`
}