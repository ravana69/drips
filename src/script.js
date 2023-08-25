const amp = 1.3
const nPts = 50
const pts = []

for (let i=0; i<=nPts; i++) { //fill array with points
  pts.push({x:Math.round(i/nPts*200), y:99})
}

function applyPath(dur=0.3){ //convert points to path data and apply to the path element
  let i, d='M'
  for (i=0; i<pts.length; i++) d += pts[i].x + ',' + pts[i].y + ' '
  gsap.to('path', {attr:{ d:d }, duration:dur, stagger:0.1})
}

applyPath(0)

const tl = gsap.timeline({onUpdate:applyPath, repeat:-1})
  .to('.drop', {y:100, ease:'sine.in'})
  .to(pts, {duration:2, y:(i)=>99+amp*(i/nPts), ease:'elastic.out(7)', yoyoEase:'none', stagger:{amount:1.4, from:'center', ease:'sine', repeat:1}}, 0.48)
  .to('.drop', {duration:0.01, attr:{r:0}}, 0.48)
  .to('.drop', {duration:0.01, attr:{r:0.5}}, 0.65)
  .to('.drop', {duration:0.5, y:93, ease:'power3', yoyoEase:'power1.in', repeat:1}, 0.64)
  .to('.drop', {duration:0.01, attr:{r:0}}, 1.61)
  .timeScale(1.7)