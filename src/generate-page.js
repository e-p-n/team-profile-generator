const head = require('./head')
const fs = require('fs');


function generatePage(team) {
    let cards = "";
    let name = "";
    let role = "";
    let id = "";
    let email = "";
    let varyingInfo = "";
    let color = "";
    for(let i = 0; i<team.length; i++) {
        name = team[i].getName();
        role = team[i].getRole();
        id = team[i].getId();
        email = team[i].getEmail();

        if (role === "Manager") {
            varyingInfo = team[i].getOfficeNumber();
            color = "secondary";
        } else if (role === "Engineer") {
            varyingInfo = team[i].getGithub();
            color = "primary";
        } else {
            varyingInfo = team[i].getSchool();
            color = "success";
        }
        cards += `
        <div class="col-sm">
            <div class="card">
                <div class="card-header bg-${color} text-white">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>Employee ID:</strong> ${id}</p>
                    <p class="card-text"><strong>Email:</strong> ${email}</p>
                    <p class="card-text">${varyingInfo}</p>
                </div>
            </div>
        </div>
        `;


    }
    let output = `
${head}
${cards}
        </div>
    </main>
</body>
</html>
    `
fs.writeFile('./dist/index.html', output, function (err) {
    if (err) return console.log(err);
    console.log('Index.html saved in "dist" folder.');
  });
}
module.exports = generatePage;