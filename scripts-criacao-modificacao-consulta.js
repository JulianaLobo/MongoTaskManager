//Inserir um Projeto
db.Projects.insertOne({
    "name": "Projeto A",
    "start_date": new Date("2023-01-15"),
    "end_date": new Date("2023-02-28"),
    "tasks": []
})

//Inserir um Usuário
db.Users.insert({
    "first_name": "João",
    "last_name": "Silva",
    "email": "joao@example.com",
    "cell_phone": "1234567890",
    "tasks": []
})

//Inserir uma Tarefa
db.Tasks.insert({
    "title": "Tarefa 1",
    "description": "Descrição da Tarefa 1",
    "start_date": new Date("2023-01-20"),
    "deadline_date": new Date("2023-02-10"),
    "priority": "Alta",
    "status": "To-do",
    "user_id": ObjectId("653d2b55bff6b435cf0e50f7"),
    "project_id": ObjectId("653d2b4f0e8622d8fcbdd855")
})

//Modificar uma Tarefa
db.Tasks.update(
    { "_id": ObjectId("653d2b95d721e5d34eb49d97") },
    { $set: { "status": "In-Progress" } }
)

//Consultar Todas as Tarefas de um Projeto
db.Tasks.find({ "project_id": ObjectId("653d2b4f0e8622d8fcbdd855") })

//Consultar Tarefas de um Usuário com Status "In-Progress"
db.Tasks.find({
    "user_id": ObjectId("653d2b55bff6b435cf0e50f7"),
    "status": "In-Progress"
})








