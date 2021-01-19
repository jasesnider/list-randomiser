import "./styles.css";

const names = [
  "Tim",
  "Alisa",
  "Wally",
  "Alyssa",
  "Stacey",
  "Jason",
  "Kara",
  "Katie",
  "Karim"
];

function shuffle(list) {
  var currentIdx = list.length,
    tempValue,
    randomIdx;

  while (0 !== currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    tempValue = list[currentIdx];
    list[currentIdx] = list[randomIdx];
    list[randomIdx] = tempValue;
  }

  return list.join(", ");
}

document.write(shuffle(names));
