const record = document.querySelector("#record");
const shot = document.querySelector("#shot");
const hit = document.querySelector("#hit");
const dead = document.querySelector("#dead");
const enemy = document.querySelector("#enemy");
const again = document.querySelector("#again");

const play = {
  record: 0,
  shot: 0,
  hit: 0,
  dead: 0,
};

const show = {
    hit() {

    },
    miss(elem) {
        
    },
    dead() {
        
    }
}

const fire = (event) => {
  const target = event.target
  show.miss(target);
};
