const head = require('./head')
const fs = require('fs');


function generatePage(team) {
    
    // Reorder the team array so that the Manager card will be created first, the Engineer card(s) second and the Intern(s) last
    team.sort((a,b) => (a.sortBy > b.sortBy) ? 1 : ((b.sortBy > a.sortBy) ? -1 : 0));

    let cards = "";
    let name = "";
    let role = "";
    let id = "";
    let email = "";
    let varyingInfo = "";
    let color = "";
    let favIcon = "";
    for(let i = 0; i<team.length; i++) {
        name = team[i].getName();
        role = team[i].getRole();
        id = team[i].getId();
        email = team[i].getEmail();

        // check if role of the class and generate different HTML elements depending on which one it is.
        if (role === "Manager") {
            varyingInfo = team[i].getOfficeNumber();
            color = "secondary";
            favIcon = "chart-pie"

        } else if (role === "Engineer") {
            varyingInfo = team[i].getGithub();
            color = "primary";
            favIcon = "laptop-code";
        } else {
            varyingInfo = team[i].getSchool();
            color = "success";
            favIcon = "user-graduate";
        }

        // Create a card for each team member
        cards += `
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <div class="card-header bg-${color} text-white">
                        <h2 class="h3">${name}</h2>
                        <h3 class="h5"><i class="fas fa-${favIcon}"></i> ${role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item"><strong>Employee ID:</strong> ${id}</li>
                            <li class="list-group-item"><strong>Email:</strong> ${email}</li>
                            <li class="list-group-item">${varyingInfo}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        //adds a new row every third card.
        if ((i+1)%3 === 0 && i+1<team.length) {
            cards += `
            
        </div>
        <div class="row justify-content-center">

            `;
        }


    }
    let output = `
${head}
${cards}
        </div>
    </main>
</body>
</html>
    `
// write generated HTML to an HTML file.    
fs.writeFile('./dist/index.html', output, function (err) {
    if (err) return console.log(err);
    console.log(`
* * * * Your "index.html" file was saved in the "dist" folder. * * * *
    `);
  });
}
module.exports = generatePage;