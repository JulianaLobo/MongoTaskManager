// Projetos:

// 1. Buscar todos os projetos em andamento (com tarefas "To-Do" ou "In-Progress"):
db.Projects.find({
    "tasks.status": { $in: ["To-do", "In-Progress"] }
})

// 2. Buscar projetos concluídos (todas as tarefas com status "Complete"):
db.Projects.find({
    "tasks.status": "Complete"
})

// 3. Buscar projetos que possuem tarefas com prazo de entrega vencido (atrasadas):
db.Projects.find({
    "tasks.deadline_date": { $lt: new Date() }
})

// 4. Buscar projetos com um nome específico (por exemplo, "Projeto B"):
db.Projects.find({
    "name": "Projeto B"
})

// 5. Buscar projetos que começam no próximo mês (por exemplo, março de 2023):
db.Projects.find({
    "start_date": { $gte: new Date("2023-03-01"), $lt: new Date("2023-04-01") }
})

// Tarefas:

// 6. Buscar todas as tarefas em andamento (com status "To-Do" ou "In-Progress"):
db.Tasks.find({
    "status": { $in: ["To-do", "In-Progress"] }
})

// 7. Buscar tarefas concluídas:
db.Tasks.find({
    "status": "Complete"
})

// 8. Buscar tarefas com prazo de entrega próximo (por exemplo, nas próximas duas semanas):
db.Tasks.find({
    "deadline_date": { $gte: new Date(), $lte: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000) }
})

// 9. Buscar tarefas com prioridade alta:
db.Tasks.find({
    "priority": "Alta"
})

// 10. Buscar tarefas atribuídas a um usuário específico (por exemplo, usuário com email "maria@example.com"):
db.Tasks.find({
    "user.email": "maria@example.com"
})

// Usuários:

// 11. Buscar todos os usuários com tarefas em atraso:
db.Users.find({
    "tasks": {
        $elemMatch: { "deadline_date": { $lt: new Date() } }
    }
})

// 12. Buscar todos os usuários que estão envolvidos em projetos em andamento (com tarefas "To-Do" ou "In-Progress"):
db.Users.find({
    "tasks.project.status": { $in: ["To-do", "In-Progress"] }
})

// 13. Buscar usuários que concluíram todas as suas tarefas:
db.Users.find({
    "tasks.status": "Complete"
})

// 14. Buscar usuários com um nome específico (por exemplo, "Maria"):
db.Users.find({
    "first_name": "Maria"
})

// 15. Buscar usuários com um número de telefone específico (por exemplo, "9876543210"):
db.Users.find({
    "cell_phone": "9876543210"
})
