// Conectando ao MongoDB (Suponha que o banco de dados se chame 'taskManagement')
use('taskManagement') 

// Criando um usuário
db.Users.insertOne({
    "first_name": "Primeiro Nome",
    "last_name": "Sobrenome",
    "email": "email@example.com",
    "cell_phone": "Número de telefone",
    "tasks": []  // Um array para armazenar os IDs das tarefas associadas ao usuário
})

// Criando um projeto
db.Projects.insertOne({
    "name": "Nome do Projeto",
    "start_date": new Date("YYYY-MM-DD"),
    "end_date": new Date("YYYY-MM-DD"),
    "tasks": [],  // Um array para armazenar os IDs das tarefas associadas
})

// Criando uma tarefa
db.Tasks.insert({
    "title": "Título da Tarefa",
    "description": "Descrição detalhada da tarefa",
    "start_date": new Date("YYYY-MM-DD"),
    "deadline_date": new Date("YYYY-MM-DD"),
    "priority": "Alta/Média/Baixa",
    "status": "To-do/In-Progress/Complete",
    "user_id": ObjectId("ID do usuário associado"),  // Referência ao usuário
    "project_id": ObjectId("ID do projeto associado")  // Referência ao projeto
})



