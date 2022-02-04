const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style = "background-color: pink">${word}</span>` : word)
.join(' ');

const link = document.createElement('a');
link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job- interview-questions-and-how-great-job-candidates-answer-them.html";
link.innerText = "Reference of this text.";
document.body.appendChild(link);

paragraph.innerHTML = paragraph.innerHTML
.split(/\.[^\.|<]/)
.join('</p><p>') + '</p>';


const count = paragraph.innerHTML.split('').length;
const countElement = document.createElement('div');
countElement.innerHTML = `${count} words`;
document.body.insertBefore(countElement, paragraph);


Array.from(document.querySelectorAll('p'))
  .forEach(p => {
    p.innerHTML = p.innerHTML
    .replace(/\?/g, '🤔')
    .replace(/\!/g, '😲');
  });
