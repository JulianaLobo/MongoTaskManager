// Inserir Usuário 1
db.Users.insertOne({
    "first_name": "Maria",
    "last_name": "Fernandes",
    "email": "maria@example.com",
    "cell_phone": "9876543210",
    "tasks": []
})

// Inserir Usuário 2
db.Users.insertOne({
    "first_name": "Pedro",
    "last_name": "Santos",
    "email": "pedro@example.com",
    "cell_phone": "5551112233",
    "tasks": []
})

// Inserir Usuário 3
db.Users.insertOne({
    "first_name": "Ana",
    "last_name": "Oliveira",
    "email": "ana@example.com",
    "cell_phone": "9998887776",
    "tasks": []
})

// Inserir Usuário 4
db.Users.insertOne({
    "first_name": "Lucas",
    "last_name": "Rocha",
    "email": "lucas@example.com",
    "cell_phone": "1231231234",
    "tasks": []
})

// Inserir Usuário 5
db.Users.insertOne({
    "first_name": "Isabel",
    "last_name": "Almeida",
    "email": "isabel@example.com",
    "cell_phone": "9876543210",
    "tasks": []
})

// Inserir Usuário 6
db.Users.insertOne({
    "first_name": "Rafael",
    "last_name": "Carvalho",
    "email": "rafael@example.com",
    "cell_phone": "5551112233",
    "tasks": []
})

// Inserir Usuário 7
db.Users.insertOne({
    "first_name": "Larissa",
    "last_name": "Gomes",
    "email": "larissa@example.com",
    "cell_phone": "9998887776",
    "tasks": []
})

// Inserir Usuário 8
db.Users.insertOne({
    "first_name": "Diego",
    "last_name": "Sousa",
    "email": "diego@example.com",
    "cell_phone": "1231231234",
    "tasks": []
})

// Inserir Usuário 9
db.Users.insertOne({
    "first_name": "Clara",
    "last_name": "Nascimento",
    "email": "clara@example.com",
    "cell_phone": "9876543210",
    "tasks": []
})

// Inserir Usuário 10
db.Users.insertOne({
    "first_name": "Fernando",
    "last_name": "Silveira",
    "email": "fernando@example.com",
    "cell_phone": "5551112233",
    "tasks": []
})
////////////////////////////////////////////

// Inserir Projeto 1
db.Projects.insertOne({
    "name": "Projeto B",
    "start_date": new Date("2023-02-01"),
    "end_date": new Date("2023-03-15"),
    "tasks": []
})

// Inserir Projeto 2
db.Projects.insertOne({
    "name": "Projeto C",
    "start_date": new Date("2023-03-15"),
    "end_date": new Date("2023-04-30"),
    "tasks": []
})

// Inserir Projeto 3
db.Projects.insertOne({
    "name": "Projeto D",
    "start_date": new Date("2023-04-01"),
    "end_date": new Date("2023-05-15"),
    "tasks": []
})

// Inserir Projeto 4
db.Projects.insertOne({
    "name": "Projeto E",
    "start_date": new Date("2023-05-15"),
    "end_date": new Date("2023-06-30"),
    "tasks": []
})

// Inserir Projeto 5
db.Projects.insertOne({
    "name": "Projeto F",
    "start_date": new Date("2023-06-01"),
    "end_date": new Date("2023-07-15"),
    "tasks": []
})

// Inserir Projeto 6
db.Projects.insertOne({
    "name": "Projeto G",
    "start_date": new Date("2023-07-15"),
    "end_date": new Date("2023-08-31"),
    "tasks": []
})

// Inserir Projeto 7
db.Projects.insertOne({
    "name": "Projeto H",
    "start_date": new Date("2023-08-01"),
    "end_date": new Date("2023-09-15"),
    "tasks": []
})

// Inserir Projeto 8
db.Projects.insertOne({
    "name": "Projeto I",
    "start_date": new Date("2023-09-15"),
    "end_date": new Date("2023-10-31"),
    "tasks": []
})

// Inserir Projeto 9
db.Projects.insertOne({
    "name": "Projeto J",
    "start_date": new Date("2023-10-01"),
    "end_date": new Date("2023-11-15"),
    "tasks": []
})

// Inserir Projeto 10
db.Projects.insertOne({
    "name": "Projeto K",
    "start_date": new Date("2023-11-15"),
    "end_date": new Date("2023-12-31"),
    "tasks": []
})

//////////////////////////////////////////////////////

// Inserir Tarefa 1
db.Tasks.insertOne({
    "title": "Tarefa 2",
    "description": "Descrição da Tarefa 2",
    "start_date": new Date("2023-01-25"),
    "deadline_date": new Date("2023-02-15"),
    "priority": "Média",
    "status": "In-Progress",
    "user_id": ObjectId("653d2f8d382d6da3e4473136"),
    "project_id": ObjectId("653d303c34216495d7661617")
})

// Inserir Tarefa 2
db.Tasks.insertOne({
    "title": "Tarefa 3",
    "description": "Descrição da Tarefa 3",
    "start_date": new Date("2023-02-10"),
    "deadline_date": new Date("2023-03-01"),
    "priority": "Baixa",
    "status": "To-do",
    "user_id": ObjectId("653d2f9e1e4dde0b04c9dc34"),
    "project_id": ObjectId("653d304b505bc754001ff32b")
})

// Inserir Tarefa 3
db.Tasks.insertOne({
    "title": "Tarefa 4",
    "description": "Descrição da Tarefa 4",
    "start_date": new Date("2023-03-01"),
    "deadline_date": new Date("2023-03-15"),
    "priority": "Alta",
    "status": "Complete",
    "user_id": ObjectId("653d2fb5dec533acfde4b1ed"),
    "project_id": ObjectId("653d305e19fe091950514835")
})

// Inserir Tarefa 4
db.Tasks.insertOne({
    "title": "Tarefa 5",
    "description": "Descrição da Tarefa 5",
    "start_date": new Date("2023-04-01"),
    "deadline_date": new Date("2023-04-15"),
    "priority": "Média",
    "status": "In-Progress",
    "user_id": ObjectId("653d2fc3a9cdbb5f37efeaed"),
    "project_id": ObjectId("653d3070f17f65cfa124029f")
})

// Inserir Tarefa 5
db.Tasks.insertOne({
    "title": "Tarefa 6",
    "description": "Descrição da Tarefa 6",
    "start_date": new Date("2023-05-01"),
    "deadline_date": new Date("2023-05-15"),
    "priority": "Baixa",
    "status": "To-do",
    "user_id": ObjectId("653d2fd541692d505ff06977"),
    "project_id": ObjectId("653d3080f153a881a7626d62")
})

// Inserir Tarefa 6
db.Tasks.insertOne({
    "title": "Tarefa 7",
    "description": "Descrição da Tarefa 7",
    "start_date": new Date("2023-06-01"),
    "deadline_date": new Date("2023-06-15"),
    "priority": "Alta",
    "status": "Complete",
    "user_id": ObjectId("653d2fe6147ffba9f020e537"),
    "project_id": ObjectId("653d3094eb4641c4d583051a")
})

// Inserir Tarefa 7
db.Tasks.insertOne({
    "title": "Tarefa 8",
    "description": "Descrição da Tarefa 8",
    "start_date": new Date("2023-07-01"),
    "deadline_date": new Date("2023-07-15"),
    "priority": "Média",
    "status": "In-Progress",
    "user_id": ObjectId("653d2ff78b9deafa90bd156a"),
    "project_id": ObjectId("653d30a1acfc25671c6ef287")
})

// Inserir Tarefa 8
db.Tasks.insertOne({
    "title": "Tarefa 9",
    "description": "Descrição da Tarefa 9",
    "start_date": new Date("2023-08-01"),
    "deadline_date": new Date("2023-08-15"),
    "priority": "Baixa",
    "status": "To-do",
    "user_id": ObjectId("653d300f59eb897d9a62f49a"),
    "project_id": ObjectId("653d30afd86745fec4b286b9")
})

// Inserir Tarefa 9
db.Tasks.insertOne({
    "title": "Tarefa 10",
    "description": "Descrição da Tarefa 10",
    "start_date": new Date("2023-09-01"),
    "deadline_date": new Date("2023-09-15"),
    "priority": "Alta",
    "status": "Complete",
    "user_id": ObjectId("653d301e781f91958fa07715"),
    "project_id": ObjectId("653d30bce8b189a4ee0647aa")
})

// Inserir Tarefa 10
db.Tasks.insertOne({
    "title": "Tarefa 11",
    "description": "Descrição da Tarefa 11",
    "start_date": new Date("2023-10-01"),
    "deadline_date": new Date("2023-10-15"),
    "priority": "Média",
    "status": "In-Progress",
    "user_id": ObjectId("653d302fb022f6bd314a1f8f"),
    "project_id": ObjectId("653d30c8724077d4feccb31f")
})
