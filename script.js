const member2 = {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
}
const member3 = {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
}
const member4 = {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
}
const member5 = {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
}
const member6 = {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
}

const teamMemberList = [member2,member3,member4,member5,member6,]


for (let key in teamMemberList) {
    
    writeMember(teamMemberList[key].name, teamMemberList[key].role, teamMemberList[key].image)
    
}
function writeMember(name, role, image){
    const memberCard = document.querySelector('.team-card');
    const memberCardContainer = document.querySelector('.team-container');
    const newMemberCard = memberCard.cloneNode(true);
    const newMemberCardName = newMemberCard.querySelector(`h3`)
    const newMemberCardRole = newMemberCard.querySelector(`p`)
    const newMemberCardImage = newMemberCard.querySelector(`img`)

    newMemberCardName.textContent = name
    newMemberCardRole.textContent = role
    newMemberCardImage.src = `./img/${image}`

    memberCardContainer.appendChild(newMemberCard)
}
function memberAdder(){
    const newName = document.getElementById('name')
    const newRole = document.getElementById('role')
    const newImage = document.getElementById('image')
    writeMember(newName, newRole, newImage);
}