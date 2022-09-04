function Skill(id, name, progress, info) {
  this.id = id;
  this.name = name;
  this.progress = progress;
  this.info = info;
}

const skills = [
    new Skill('react', 'React', 85, 'Learning'),
    new Skill('javascript', 'JavaScript', 70, 'Learning'),
    new Skill('nodejs', 'NodeJs', 65, 'Learning'),
];

export default skills
