const { log } = require("console");

    const readline = require("readline").createInterface({
        // <= readline peut être raccourci (rl)
        input: process.stdin, // <= permet d'entrer des données
        output: process.stdout, // <= permet de sortir des données
    });
    
    let contacts = []; // Permet d'insérér des données dans un tableau
    
        const command = () => {
            readline.question("Command : ", (command) => {
            switch (command) {
                case "/help":
                help()
                break;
                case "/stop":
                readline.close()
                break;
                case "/add":
                add()
                break;
                case "/list":
                list()
                break;
                case "/delete":
                //
                break;
                default:
                console.log(`Unknow command ${command}`);
                command()
            }
            });
        };
        
        
        const welcome = () => {
            console.log(`
            Hey Sir i'm your directory !
            Enter /help to display a list of commands.
            Otherwise just enter any existing commands. 
            `);
            command();
        };
        
        // HELP
        const help = () => {
            console.log(`
            There is the details of differents commands available :
            /help : Display all the commands available
            /stop : Quit your loved application
            /add : Add a new contact in your directory
            /list : List all the contacts you have in your loved directory
            /delete : Delete one contact by specifying his ID
            `);
            command()
        }
        
        // ADD 
        const add = () => {
            readline.question('What is the first-name of your contact : ', firstName => {
            readline.question('What is the last-name of your contact : ', lastName => {
                readline.question(`What is the phone number of ${firstName} ${lastName} : `, phone => {
                    contacts.push({firstName, lastName, phone})
                    list()
                } )
            })
            })
        }
        
        // LIST
        const list = () => {
            console.log(`
            Here is the list of your contact :
            --------------------------------
            `);
        contacts.map((user, index) => {
            console.log(`
            Firstname: ${user.firstName}
            Lastname : ${user.lastName}
            Phone: ${user.phone}                
            `);
        })
        command()
        }

        //CLOSE
        const stop = () => {
            console.log('Thank you for using the application !')
            readline.close()
        }
        
        // DELETE
        const deleteUser = () => {
            readline.question('Wich contact do you want ?', id=> {
                console.log("ID =>", id);
                let resultAfterDelete = contacts.filter((user, index) => index != id )
                
                contacts = resultAfterDelete;
                
                list()
                })
        }
        // WELCOME
        welcome();
        