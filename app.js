console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
// 1a
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(oneAJSON);
console.log(jokeJS1);
// 1b
p1.innerText = jokeJS1.setup
// 1c
p2.innerText = jokeJS1.punchline



// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
// 2a
const activity = axios.get('https://www.boredapi.com/api/activity')
// 2b
.then((result) => (
    console.log('Question 2 was successful');
    activityjs2 = result.data.activity
    p3.innerText = activityjs2.type
    p4.innerText = activityjs2.activity
))
.catch((err) => {
    console.log('Question 2 Failed to GET');
    console.log(err);
})

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// 3b
async function activityFunc() {
    try {
        // 3a
        const activityjs3 = await axios.get('https://www.boredapi.com/api/activity')
        // 3c
        p5.innerText = activityjs3.data.activity
        p6.innerText = activityjs3.data.type
    } catch (err) {
        console.log('Question 3 Failed to GET');
        console.log(err);
    }
}
activityFunc();



// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// 4a
// https://www.tvmaze.com/api
async function tvMazeFunc() {
    try {
        console.log('Question 4 was successful');
        const finalEP= await axios.get('https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes')
        p7.innerHTML = finalEP.data._embedded.episodes[15].name
    } catch (error) {
        console.log('Question 4 Failed to GET');
        console.log(err);
    }
}
tvMazeFunc()
