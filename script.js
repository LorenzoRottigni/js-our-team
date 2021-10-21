const teamMemberList = [
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
}
]



for (let i = 0; i < teamMemberList.length; i++) {
    const element = teamMemberList[i];
    writeMember(element);
}
    
function writeMember(teamMember){
    const memberCardContainer = document.querySelector('.team-container');
    memberCardContainer.innerHTML += `
        <div class="team-card">
        <div class="card-image">
        <img src="img/${teamMember.image}" alt="${teamMember.name}"/>
        </div>
        <div class="card-text">
        <h3>${teamMember.name}</h3>
        <p>${teamMember.role}</p>
        </div>
    </div>`;
}
function memberAdder(){
    const newName = document.getElementById('name').value
    const newRole = document.getElementById('role').value
    const newImage = document.getElementById('image').value
    const newMember = {
        name: newName,
        role: newRole,
        image: newImage
    }
    writeMember(newMember);
}
const button = document.getElementById('addMemberButton')
button.addEventListener('click', memberAdder)