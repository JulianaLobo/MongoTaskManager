
// Validação da collection users
db.createCollection("Users", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["first_name", "last_name", "email", "cell_phone"],
          properties: {
             first_name: {
                bsonType: "string",
                description: "O primeiro nome é uma string e é obrigatório."
             },
             last_name: {
                bsonType: "string",
                description: "O sobrenome é uma string e é obrigatório."
             },
             email: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                description: "O email é uma string válida e é obrigatório."
             },
             cell_phone: {
                bsonType: "string",
                pattern: "^[0-9]{10}$",
                description: "O número de telefone é uma string de 10 dígitos."
             },
             tasks: {
                bsonType: "array",
                description: "Um array para armazenar os IDs das tarefas associadas."
             }
          }
       }
    }
 })
 
 //Validação da collection projects
 db.createCollection("Projects", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["name", "start_date", "end_date", "tasks"],
          properties: {
             name: {
                bsonType: "string",
                description: "O nome do projeto é uma string e é obrigatório."
             },
             start_date: {
                bsonType: "date",
                description: "A data de início é uma data válida e é obrigatória."
             },
             end_date: {
                bsonType: "date",
                description: "A data de término é uma data válida e é obrigatória."
             },
             tasks: {
                bsonType: "array",
                description: "Um array para armazenar os IDs das tarefas associadas."
             }
          }
       }
    }
 })
 
//Validação da collection tasks
db.createCollection("Tasks", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["title", "description", "start_date", "deadline_date", "priority", "status", "user_id", "project_id"],
          properties: {
             title: {
                bsonType: "string",
                description: "O título da tarefa é uma string e é obrigatório."
             },
             description: {
                bsonType: "string",
                description: "A descrição da tarefa é uma string e é obrigatória."
             },
             start_date: {
                bsonType: "date",
                description: "A data de início é uma data válida e é obrigatória."
             },
             deadline_date: {
                bsonType: "date",
                description: "A data de vencimento é uma data válida e é obrigatória."
             },
             priority: {
                enum: ["Alta", "Média", "Baixa"],
                description: "A prioridade deve ser 'Alta', 'Média' ou 'Baixa'."
             },
             status: {
                enum: ["To-do", "In-Progress", "Complete"],
                description: "O status deve ser 'To-do', 'In-Progress' ou 'Complete'."
             },
             user_id: {
                bsonType: "objectId",
                description: "Referência ao ID de um usuário."
             },
             project_id: {
                bsonType: "objectId",
                description: "Referência ao ID de um projeto."
             }
          }
       }
    }
 })
 
